"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { calculateBundlePrice } from "@/lib/cookies";

const COOKIE_TYPES = [
  { id: "chocolate-chip", name: "Chocolate Chip", price: 3 },
  { id: "cookie-monster", name: "Cookie Monster", price: 3 },
  { id: "cinnamon-roll", name: "Cinnamon Roll", price: 3 },
  { id: "red-velvet", name: "Red Velvet", price: 3 },
  { id: "reeses", name: "Reese's", price: 3 },
  { id: "sprinkle", name: "Sprinkle", price: 3 },
];

export default function OrderForm() {
  const { quantities, updateQuantity, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuantityChange = (id: string, delta: number) => {
    updateQuantity(id, delta);
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const fullPrice = totalItems * 3;
  const totalPrice = calculateBundlePrice(totalItems);
  const savings = fullPrice - totalPrice;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const items: Record<string, number> = {};
    for (const [id, qty] of Object.entries(quantities)) {
      if (qty > 0) items[id] = qty;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          receivingMethod: formData.get("receivingMethod"),
          requestedDate: formData.get("requestedDate"),
          items,
          specialInstructions: formData.get("specialInstructions") || "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      clearCart();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to place order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-elegant text-center max-w-md mx-auto border-2 border-[var(--color-sand)]">
        <div className="text-6xl mb-4">🍪</div>
        <h3 className="text-3xl font-extrabold mb-2 tracking-tight drop-shadow-sm" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Order Received!</h3>
        <p className="text-lg mb-6 leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
          Thank you for your order! We will reach out shortly to confirm the details.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2 rounded-full font-bold transition-all duration-300 hover:opacity-90 hover:shadow-elegant hover:-translate-y-0.5 active:scale-95"
          style={{ backgroundColor: "var(--color-caramel)", color: "#fff" }}
        >
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-elegant max-w-2xl mx-auto border-2 border-[var(--color-sand)] text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>
        Place Your Order
      </h2>

      {/* Customer Info */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-bold border-b pb-2 tracking-wide" style={{ color: "var(--color-chocolate)" }}>Your Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>First Name *</label>
            <input name="firstName" required type="text" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow" style={{ borderColor: "var(--color-sand)" }} />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Last Name *</label>
            <input name="lastName" required type="text" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow" style={{ borderColor: "var(--color-sand)" }} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Email *</label>
            <input name="email" required type="email" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow" style={{ borderColor: "var(--color-sand)" }} />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Phone Number *</label>
            <input name="phone" required type="tel" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow" style={{ borderColor: "var(--color-sand)" }} />
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-bold border-b pb-2 tracking-wide" style={{ color: "var(--color-chocolate)" }}>Delivery Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Receiving Method *</label>
            <select name="receivingMethod" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow bg-white" style={{ borderColor: "var(--color-sand)" }}>
              <option value="">Select an option</option>
              <option value="pickup">Local Pickup</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          <div className="group">
            <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Requested Date *</label>
            <input name="requestedDate" required type="date" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow" style={{ borderColor: "var(--color-sand)" }} />
          </div>
        </div>
      </div>

      {/* Cookies */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-end border-b pb-2 tracking-wide">
          <h3 className="text-xl font-bold" style={{ color: "var(--color-chocolate)" }}>Choose Cookies</h3>
          <div className="text-right">
            <span className="text-sm font-bold bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
              ${totalPrice.toFixed(2)} Total
            </span>
            {savings > 0 && (
              <div className="text-xs font-bold mt-1" style={{ color: "var(--color-sage)" }}>
                You save ${savings.toFixed(2)}!
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COOKIE_TYPES.map((cookie) => (
            <div key={cookie.id} className="flex items-center justify-between p-3 rounded-xl border bg-slate-50 border-slate-200">
              <div>
                <div className="font-bold text-slate-800">{cookie.name}</div>
                <div className="text-sm text-slate-500">${cookie.price.toFixed(2)} ea</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(cookie.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                >
                  -
                </button>
                <span className="w-4 text-center font-bold text-slate-700">
                  {quantities[cookie.id] || 0}
                </span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(cookie.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold text-center mt-2" style={{ color: "#7A5230", opacity: 0.7 }}>
          $3 each &bull; 6 for $18 &bull; 12 for $33
        </p>
      </div>

      {/* Special Instructions */}
      <div className="space-y-4 mb-8 group">
        <label className="block text-sm font-semibold mb-1 transition-colors group-focus-within:text-[#C8761A]" style={{ color: "#7A5230" }}>Special Instructions</label>
        <textarea
          name="specialInstructions"
          rows={3}
          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[var(--color-caramel)] focus:border-[var(--color-caramel)] transition-shadow"
          style={{ borderColor: "var(--color-sand)" }}
          placeholder="Allergies, specific packaging requests, etc..."
        />
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || totalItems === 0}
        className="w-full py-4 rounded-xl text-xl font-bold transition-all duration-300 shadow-elegant flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-elegant enabled:hover:shadow-elegant-hover enabled:hover:-translate-y-1 enabled:active:scale-95"
        style={{
          fontFamily: "var(--font-baloo)",
          backgroundColor: totalItems > 0 ? "var(--color-caramel)" : "var(--color-sand)",
          color: totalItems > 0 ? "#fff" : "#7A5230",
        }}
      >
        {isSubmitting ? "Sending Order..." : `Submit Order (${totalItems} items)`}
      </button>
    </form>
  );
}
