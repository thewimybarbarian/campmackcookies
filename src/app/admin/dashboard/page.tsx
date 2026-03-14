"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Order, OrderStatus } from "@/lib/types";
import AdminHeader from "@/components/admin/AdminHeader";
import StatsBar from "@/components/admin/StatsBar";
import OrdersToolbar from "@/components/admin/OrdersToolbar";
import OrdersTable from "@/components/admin/OrdersTable";

interface Filters {
  status: string;
  search: string;
  from: string;
  to: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    status: "",
    search: "",
    from: "",
    to: "",
  });

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.status) params.set("status", filters.status);
    if (filters.search) params.set("search", filters.search);
    if (filters.from) params.set("from", filters.from);
    if (filters.to) params.set("to", filters.to);

    try {
      const res = await fetch(`/api/admin/orders?${params.toString()}`);
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setOrders(data.orders || []);
    } catch {
      console.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }, [filters, router]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusChange = async (id: string, status: OrderStatus) => {
    // Optimistic update
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );

    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        fetchOrders(); // revert on error
      }
    } catch {
      fetchOrders(); // revert on error
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
        <h1
          className="text-2xl md:text-3xl font-extrabold"
          style={{
            fontFamily: "var(--font-baloo)",
            color: "var(--color-chocolate)",
          }}
        >
          Order Dashboard
        </h1>

        <StatsBar orders={orders} />
        <OrdersToolbar
          filters={filters}
          onFilterChange={setFilters}
          onRefresh={fetchOrders}
        />

        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg font-semibold" style={{ color: "#7A5230" }}>
              Loading orders...
            </p>
          </div>
        ) : (
          <OrdersTable orders={orders} onStatusChange={handleStatusChange} />
        )}
      </main>
    </div>
  );
}
