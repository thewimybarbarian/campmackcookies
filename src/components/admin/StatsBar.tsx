"use client";

import type { Order } from "@/lib/types";

interface StatsBarProps {
  orders: Order[];
}

export default function StatsBar({ orders }: StatsBarProps) {
  const totalOrders = orders.length;

  const today = new Date().toISOString().split("T")[0];
  const revenueToday = orders
    .filter((o) => o.created_at.startsWith(today))
    .reduce((sum, o) => sum + Number(o.total_price), 0);

  const pendingCount = orders.filter((o) => o.status === "pending").length;

  const stats = [
    { label: "Total Orders", value: String(totalOrders) },
    { label: "Revenue Today", value: `$${revenueToday.toFixed(2)}` },
    { label: "Pending Orders", value: String(pendingCount) },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl p-4 border-2 shadow-sm"
          style={{ borderColor: "var(--color-sand)" }}
        >
          <p
            className="text-sm font-semibold mb-1"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "#7A5230",
            }}
          >
            {stat.label}
          </p>
          <p
            className="text-2xl font-extrabold"
            style={{
              fontFamily: "var(--font-baloo)",
              color: "var(--color-caramel)",
            }}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
