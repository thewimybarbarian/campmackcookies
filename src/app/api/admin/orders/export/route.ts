import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifySessionToken } from "@/lib/admin-auth";
import { COOKIE_NAMES } from "@/lib/cookies";

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function formatItems(items: Record<string, number>): string {
  return Object.entries(items)
    .map(([id, qty]) => `${COOKIE_NAMES[id] || id} x${qty}`)
    .join("; ");
}

export async function GET(request: NextRequest) {
  const session = request.cookies.get("admin_session")?.value;
  if (!session || !verifySessionToken(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  let query = supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (status) query = query.eq("status", status);
  if (search) {
    query = query.or(
      `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`
    );
  }
  if (from) query = query.gte("created_at", `${from}T00:00:00`);
  if (to) query = query.lte("created_at", `${to}T23:59:59`);

  const { data: orders, error } = await query;

  if (error) {
    return NextResponse.json({ error: "Failed to export." }, { status: 500 });
  }

  const headers = [
    "Order ID",
    "Date",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Method",
    "Requested Date",
    "Items",
    "Total Items",
    "Total Price",
    "Special Instructions",
    "Status",
  ];

  const rows = (orders || []).map((o) => [
    o.id,
    new Date(o.created_at).toLocaleString("en-US", { timeZone: "America/Chicago" }),
    o.first_name,
    o.last_name,
    o.email,
    o.phone,
    o.receiving_method,
    o.requested_date,
    formatItems(o.items),
    String(o.total_items),
    `$${Number(o.total_price).toFixed(2)}`,
    o.special_instructions || "",
    o.status,
  ]);

  const csv =
    headers.map(escapeCSV).join(",") +
    "\n" +
    rows.map((row) => row.map(escapeCSV).join(",")).join("\n");

  const today = new Date().toISOString().split("T")[0];

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="campmack-orders-${today}.csv"`,
    },
  });
}
