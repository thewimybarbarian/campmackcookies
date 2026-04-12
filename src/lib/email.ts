import { Resend } from "resend";
import { COOKIE_NAMES, COOKIE_PRICES, calculateBundlePrice } from "./cookies";

let _resend: Resend | null = null;
export function getResend() {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

interface OrderEmailData {
  orderId: string;
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
  createdAt: string;
}

export async function sendCustomerConfirmation(data: OrderEmailData) {
  const itemRows = Object.entries(data.items)
    .map(([id, qty]) => {
      const name = COOKIE_NAMES[id] || id;
      return `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #E8D5B0; color: #4A2912;">${name}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #E8D5B0; text-align: center; color: #4A2912;">${qty}</td>
        </tr>`;
    })
    .join("");

  await getResend().emails.send({
    from: "Camp Mack Cookie Co. <orders@campmackcookies.com>",
    to: data.email,
    subject: `Order Confirmed - Camp Mack Cookie Co.`,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background-color: #FFF8EE; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <div style="background-color: #4A2912; border-radius: 16px 16px 0 0; padding: 28px; text-align: center;">
      <h1 style="color: #FFF8EE; margin: 0; font-size: 24px;">Camp Mack Cookie Co.</h1>
      <p style="color: #E8D5B0; margin: 8px 0 0; font-size: 14px;">Thanks for your order!</p>
    </div>
    <div style="background-color: #FFFFFF; padding: 28px; border: 1px solid #E8D5B0;">
      <h2 style="color: #4A2912; font-size: 20px; margin: 0 0 8px;">Hey ${data.firstName}! 🍪</h2>
      <p style="color: #7A5230; font-size: 14px; margin: 0 0 20px;">We got your order and we're getting it ready. Here's what you ordered:</p>

      <div style="background-color: #FFF8EE; border-radius: 12px; padding: 16px; margin: 0 0 20px; border: 1px solid #E8D5B0;">
        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #FAE8C8;">
              <th style="padding: 8px 12px; text-align: left; color: #4A2912;">Cookie</th>
              <th style="padding: 8px 12px; text-align: center; color: #4A2912;">Qty</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
        </table>
        <div style="text-align: right; padding: 12px 0 0; margin-top: 8px; border-top: 2px solid #E8D5B0;">
          <span style="font-size: 16px; color: #4A2912;">
            <strong>${data.totalItems} cookies</strong> &mdash;
            <strong style="color: #C8761A; font-size: 20px;">$${data.totalPrice.toFixed(2)}</strong>
          </span>
        </div>
      </div>

      <div style="background-color: #FFF8EE; border-radius: 12px; padding: 16px; margin: 0 0 20px; border: 1px solid #E8D5B0;">
        <table style="width: 100%; font-size: 14px; color: #4A2912;">
          <tr><td style="padding: 4px 0;"><strong>${data.receivingMethod === "delivery" ? "Delivery" : "Pickup"} Date:</strong></td><td>${data.requestedDate}</td></tr>
          <tr><td style="padding: 4px 0;"><strong>Method:</strong></td><td style="text-transform: capitalize;">${data.receivingMethod}</td></tr>
        </table>
      </div>

      ${data.specialInstructions ? `<p style="color: #7A5230; font-size: 13px; background-color: #FFF8EE; padding: 12px; border-radius: 8px; border: 1px solid #E8D5B0; margin: 0 0 20px;"><strong>Your Notes:</strong><br/>${data.specialInstructions}</p>` : ""}

      <p style="color: #7A5230; font-size: 14px; margin: 0;">Questions? Just reply to this email or text us!</p>
    </div>
    <div style="background-color: #4A2912; border-radius: 0 0 16px 16px; padding: 16px; text-align: center;">
      <p style="color: #E8D5B0; margin: 0; font-size: 12px;">Camp Mack Cookie Co. &mdash; Baked with love in Arkansas</p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendAdminSMS(data: OrderEmailData) {
  const gateway = process.env.ADMIN_PHONE_SMS;
  if (!gateway) return;

  const message = `New order! ${data.firstName} ${data.lastName} - ${data.totalItems} cookies ($${data.totalPrice.toFixed(2)}) for ${data.requestedDate}.\nhttps://campmackcookies.com/admin/dashboard`;

  await getResend().emails.send({
    from: "Camp Mack Cookie Co. <orders@campmackcookies.com>",
    to: gateway,
    subject: "New Order",
    text: message,
  });
}
