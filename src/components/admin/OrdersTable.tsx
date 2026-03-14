"use client";

import type { Order, OrderStatus } from "@/lib/types";
import { COOKIE_NAMES } from "@/lib/cookies";
import StatusBadge from "./StatusBadge";

const ALL_STATUSES: OrderStatus[] = [
  "pending",
  "confirmed",
  "baking",
  "ready",
  "completed",
  "cancelled",
];

interface OrdersTableProps {
  orders: Order[];
  onStatusChange: (id: string, status: OrderStatus) => void;
}

function formatItems(items: Record<string, number>): string {
  return Object.entries(items)
    .map(([id, qty]) => `${COOKIE_NAMES[id] || id} x${qty}`)
    .join(", ");
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Phoenix",
  });
}

export default function OrdersTable({
  orders,
  onStatusChange,
}: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border-2" style={{ borderColor: "var(--color-sand)" }}>
        <p className="text-lg font-semibold" style={{ color: "#7A5230" }}>
          No orders found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl border-2 shadow-sm" style={{ borderColor: "var(--color-sand)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: "var(--color-vanilla)" }}>
            <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--color-chocolate)" }}>Date</th>
            <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--color-chocolate)" }}>Customer</th>
            <th className="text-left px-4 py-3 font-bold hidden md:table-cell" style={{ color: "var(--color-chocolate)" }}>Email</th>
            <th className="text-left px-4 py-3 font-bold hidden lg:table-cell" style={{ color: "var(--color-chocolate)" }}>Phone</th>
            <th className="text-left px-4 py-3 font-bold hidden lg:table-cell" style={{ color: "var(--color-chocolate)" }}>Method</th>
            <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--color-chocolate)" }}>Items</th>
            <th className="text-right px-4 py-3 font-bold" style={{ color: "var(--color-chocolate)" }}>Total</th>
            <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--color-chocolate)" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr
              key={order.id}
              className="border-t"
              style={{
                borderColor: "var(--color-sand)",
                backgroundColor: i % 2 === 0 ? "#fff" : "var(--color-cream)",
              }}
            >
              <td className="px-4 py-3 whitespace-nowrap text-xs" style={{ color: "#7A5230" }}>
                {formatDate(order.created_at)}
              </td>
              <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: "var(--color-chocolate)" }}>
                {order.first_name} {order.last_name}
              </td>
              <td className="px-4 py-3 hidden md:table-cell" style={{ color: "#7A5230" }}>
                {order.email}
              </td>
              <td className="px-4 py-3 hidden lg:table-cell" style={{ color: "#7A5230" }}>
                {order.phone}
              </td>
              <td className="px-4 py-3 hidden lg:table-cell capitalize" style={{ color: "#7A5230" }}>
                {order.receiving_method}
              </td>
              <td className="px-4 py-3 max-w-[200px] truncate" style={{ color: "#7A5230" }} title={formatItems(order.items)}>
                {formatItems(order.items)}
              </td>
              <td className="px-4 py-3 text-right font-bold whitespace-nowrap" style={{ color: "var(--color-caramel)" }}>
                ${Number(order.total_price).toFixed(2)}
              </td>
              <td className="px-4 py-3">
                <select
                  value={order.status}
                  onChange={(e) =>
                    onStatusChange(order.id, e.target.value as OrderStatus)
                  }
                  className="text-xs font-bold px-2 py-1 rounded-lg border bg-white cursor-pointer"
                  style={{ borderColor: "var(--color-sand)" }}
                >
                  {ALL_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
