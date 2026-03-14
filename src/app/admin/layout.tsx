import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Camp Mack Cookies",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {children}
    </div>
  );
}
