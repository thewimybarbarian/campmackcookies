"use client";

import type { OrderStatus } from "@/lib/types";

interface Filters {
  status: string;
  search: string;
  from: string;
  to: string;
}

interface OrdersToolbarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onRefresh: () => void;
}

const STATUSES: (OrderStatus | "")[] = [
  "",
  "pending",
  "confirmed",
  "baking",
  "ready",
  "completed",
  "cancelled",
];

export default function OrdersToolbar({
  filters,
  onFilterChange,
  onRefresh,
}: OrdersToolbarProps) {
  const update = (key: keyof Filters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleExport = () => {
    const params = new URLSearchParams();
    if (filters.status) params.set("status", filters.status);
    if (filters.search) params.set("search", filters.search);
    if (filters.from) params.set("from", filters.from);
    if (filters.to) params.set("to", filters.to);
    window.open(`/api/admin/orders/export?${params.toString()}`, "_blank");
  };

  return (
    <div className="flex flex-wrap gap-3 items-end">
      <div>
        <label
          className="block text-xs font-semibold mb-1"
          style={{ color: "#7A5230" }}
        >
          Status
        </label>
        <select
          value={filters.status}
          onChange={(e) => update("status", e.target.value)}
          className="px-3 py-2 rounded-lg border text-sm bg-white"
          style={{ borderColor: "var(--color-sand)" }}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s ? s.charAt(0).toUpperCase() + s.slice(1) : "All Statuses"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="block text-xs font-semibold mb-1"
          style={{ color: "#7A5230" }}
        >
          From
        </label>
        <input
          type="date"
          value={filters.from}
          onChange={(e) => update("from", e.target.value)}
          className="px-3 py-2 rounded-lg border text-sm"
          style={{ borderColor: "var(--color-sand)" }}
        />
      </div>

      <div>
        <label
          className="block text-xs font-semibold mb-1"
          style={{ color: "#7A5230" }}
        >
          To
        </label>
        <input
          type="date"
          value={filters.to}
          onChange={(e) => update("to", e.target.value)}
          className="px-3 py-2 rounded-lg border text-sm"
          style={{ borderColor: "var(--color-sand)" }}
        />
      </div>

      <div className="flex-1 min-w-[180px]">
        <label
          className="block text-xs font-semibold mb-1"
          style={{ color: "#7A5230" }}
        >
          Search
        </label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          placeholder="Name or email..."
          className="w-full px-3 py-2 rounded-lg border text-sm"
          style={{ borderColor: "var(--color-sand)" }}
        />
      </div>

      <button
        onClick={onRefresh}
        className="px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all hover:opacity-80"
        style={{
          borderColor: "var(--color-chocolate)",
          color: "var(--color-chocolate)",
        }}
      >
        Refresh
      </button>

      <button
        onClick={handleExport}
        className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
        style={{ backgroundColor: "var(--color-sage)" }}
      >
        Export CSV
      </button>
    </div>
  );
}
