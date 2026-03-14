import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { COOKIE_PRICES, COOKIE_NAMES } from "@/lib/cookies";
import type { OrderPayload } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: OrderPayload = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      receivingMethod,
      requestedDate,
      items,
      specialInstructions,
    } = body;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !receivingMethod ||
      !requestedDate
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!items || typeof items !== "object" || Object.keys(items).length === 0) {
      return NextResponse.json(
        { error: "No cookies selected." },
        { status: 400 }
      );
    }

    for (const [id, qty] of Object.entries(items)) {
      if (!(id in COOKIE_PRICES)) {
        return NextResponse.json(
          { error: `Unknown cookie type: ${id}` },
          { status: 400 }
        );
      }
      if (typeof qty !== "number" || qty < 1 || !Number.isInteger(qty)) {
        return NextResponse.json(
          { error: `Invalid quantity for ${id}` },
          { status: 400 }
        );
      }
    }

    if (!["pickup", "delivery"].includes(receivingMethod)) {
      return NextResponse.json(
        { error: "Invalid receiving method." },
        { status: 400 }
      );
    }

    // Compute totals server-side
    const totalItems = Object.values(items).reduce((sum, qty) => sum + qty, 0);
    const totalPrice = Object.entries(items).reduce(
      (sum, [id, qty]) => sum + qty * COOKIE_PRICES[id],
      0
    );

    // Save to Supabase
    const { data: order, error: dbError } = await supabase
      .from("orders")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        receiving_method: receivingMethod,
        requested_date: requestedDate,
        items,
        total_items: totalItems,
        total_price: totalPrice,
        special_instructions: specialInstructions || "",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save order." },
        { status: 500 }
      );
    }

    // Send notification email
    const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL;
    if (notificationEmail) {
      try {
        await resend.emails.send({
          from: "Camp Mack Cookies <onboarding@resend.dev>",
          to: notificationEmail,
          subject: `New Order from ${firstName} ${lastName} - $${totalPrice.toFixed(2)}`,
          html: buildOrderEmailHtml({
            firstName,
            lastName,
            email,
            phone,
            receivingMethod,
            requestedDate,
            items,
            totalItems,
            totalPrice,
            specialInstructions: specialInstructions || "",
            orderId: order.id,
            createdAt: order.created_at,
          }),
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, orderId: order.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Order API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function buildOrderEmailHtml(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  receivingMethod: string;
  requestedDate: string;
  items: Record<string, number>;
  totalItems: number;
  totalPrice: number;
  specialInstructions: string;
  orderId: string;
  createdAt: string;
}): string {
  const itemRows = Object.entries(data.items)
    .map(([id, qty]) => {
      const name = COOKIE_NAMES[id] || id;
      const lineTotal = qty * COOKIE_PRICES[id];
      return `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #E8D5B0;">${name}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #E8D5B0; text-align: center;">${qty}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #E8D5B0; text-align: right;">$${lineTotal.toFixed(2)}</td>
        </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background-color: #FFF8EE; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <div style="background-color: #4A2912; border-radius: 16px 16px 0 0; padding: 24px; text-align: center;">
      <h1 style="color: #FFF8EE; margin: 0; font-size: 24px;">Camp Mack Cookie Co.</h1>
      <p style="color: #E8D5B0; margin: 8px 0 0; font-size: 14px;">New Order Received</p>
    </div>
    <div style="background-color: #FFFFFF; padding: 24px; border: 1px solid #E8D5B0;">
      <p style="color: #7A5230; font-size: 13px; margin: 0 0 16px;">
        Order ID: <strong>${data.orderId}</strong><br>
        Placed: ${new Date(data.createdAt).toLocaleString("en-US", { timeZone: "America/Phoenix" })}
      </p>
      <h2 style="color: #4A2912; font-size: 18px; margin: 0 0 8px; border-bottom: 2px solid #E8D5B0; padding-bottom: 4px;">Customer</h2>
      <table style="width: 100%; font-size: 14px; color: #4A2912; margin-bottom: 16px;">
        <tr><td style="padding: 4px 0;"><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Phone:</strong></td><td>${data.phone}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Method:</strong></td><td style="text-transform: capitalize;">${data.receivingMethod}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Date:</strong></td><td>${data.requestedDate}</td></tr>
      </table>
      <h2 style="color: #4A2912; font-size: 18px; margin: 0 0 8px; border-bottom: 2px solid #E8D5B0; padding-bottom: 4px;">Cookies Ordered</h2>
      <table style="width: 100%; font-size: 14px; color: #4A2912; border-collapse: collapse; margin-bottom: 8px;">
        <thead>
          <tr style="background-color: #FAE8C8;">
            <th style="padding: 8px 12px; text-align: left;">Cookie</th>
            <th style="padding: 8px 12px; text-align: center;">Qty</th>
            <th style="padding: 8px 12px; text-align: right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>
      <div style="text-align: right; padding: 12px; background-color: #FAE8C8; border-radius: 8px; margin-bottom: 16px;">
        <span style="font-size: 16px; color: #4A2912;">
          <strong>${data.totalItems} cookies</strong> &mdash;
          <strong style="color: #C8761A; font-size: 20px;">$${data.totalPrice.toFixed(2)}</strong>
        </span>
      </div>
      ${
        data.specialInstructions
          ? `<h2 style="color: #4A2912; font-size: 18px; margin: 0 0 8px; border-bottom: 2px solid #E8D5B0; padding-bottom: 4px;">Special Instructions</h2>
      <p style="color: #7A5230; font-size: 14px; background-color: #FFF8EE; padding: 12px; border-radius: 8px; border: 1px solid #E8D5B0;">${data.specialInstructions}</p>`
          : ""
      }
    </div>
    <div style="background-color: #4A2912; border-radius: 0 0 16px 16px; padding: 16px; text-align: center;">
      <p style="color: #E8D5B0; margin: 0; font-size: 12px;">Camp Mack Cookie Co. &mdash; Baked with love in Arizona</p>
    </div>
  </div>
</body>
</html>`;
}
