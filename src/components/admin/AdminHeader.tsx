"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  return (
    <header
      className="flex items-center justify-between px-4 md:px-6 py-3 shadow-md"
      style={{ backgroundColor: "var(--color-chocolate)" }}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/cookie-icon-white.png"
          alt="Camp Mack Cookies"
          width={32}
          height={32}
        />
        <span
          className="text-lg font-extrabold text-white hidden sm:inline"
          style={{ fontFamily: "var(--font-baloo)" }}
        >
          Camp Mack Cookies
        </span>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: "var(--color-caramel)",
            color: "#fff",
          }}
        >
          Admin
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm font-semibold px-4 py-1.5 rounded-lg transition-all hover:opacity-80"
        style={{
          fontFamily: "var(--font-nunito)",
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "#fff",
        }}
      >
        Logout
      </button>
    </header>
  );
}
