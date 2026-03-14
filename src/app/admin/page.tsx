"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Incorrect password.");
        return;
      }

      router.push("/admin/dashboard");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border-2"
        style={{ borderColor: "var(--color-sand)" }}
      >
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/cookie-icon.png"
            alt="Camp Mack Cookies"
            width={48}
            height={48}
            className="mb-3"
          />
          <h1
            className="text-2xl font-extrabold"
            style={{
              fontFamily: "var(--font-baloo)",
              color: "var(--color-chocolate)",
            }}
          >
            Admin Login
          </h1>
          <p
            className="text-sm mt-1"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "#7A5230",
            }}
          >
            Enter your password to continue
          </p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:outline-none mb-4 text-base"
          style={{
            fontFamily: "var(--font-nunito)",
            borderColor: "var(--color-sand)",
            color: "var(--color-chocolate)",
          }}
        />

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg text-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
          style={{
            fontFamily: "var(--font-baloo)",
            backgroundColor: "var(--color-caramel)",
          }}
        >
          {loading ? "Logging in..." : "Enter Dashboard"}
        </button>
      </form>
    </div>
  );
}
