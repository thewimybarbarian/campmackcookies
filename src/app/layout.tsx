import type { Metadata } from "next";
import { Baloo_2, Nunito, Oleo_Script } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oleo = Oleo_Script({
  variable: "--font-oleo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campmackcookies.com"),
  title: {
    default: "Camp Mack Cookie Co. | Handcrafted Cookies in Arkansas",
    template: "%s | Camp Mack Cookie Co.",
  },
  description:
    "Handcrafted cookies baked with love in Arkansas. Chocolate Chip, Cookie Monster, Red Velvet & more. Order online — 6 for $18, 12 for $33. Local pickup & delivery available.",
  keywords: [
    "cookies",
    "handmade cookies",
    "Arkansas cookies",
    "cookie delivery",
    "Camp Mack Cookies",
    "order cookies online",
    "chocolate chip cookies",
    "cookie monster cookies",
    "red velvet cookies",
    "homemade cookies Arkansas",
  ],
  authors: [{ name: "Camp Mack Cookie Co." }],
  creator: "Camp Mack Cookie Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://campmackcookies.com",
    siteName: "Camp Mack Cookie Co.",
    title: "Camp Mack Cookie Co. | Handcrafted Cookies in Arkansas",
    description:
      "Handcrafted cookies baked with love in Arkansas. Order online — 6 for $18, 12 for $33!",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Camp Mack Cookie Co. — Handcrafted Cookies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camp Mack Cookie Co. | Handcrafted Cookies in Arkansas",
    description:
      "Handcrafted cookies baked with love in Arkansas. Order online — 6 for $18, 12 for $33!",
    images: ["/header.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favi-new.png",
    apple: "/favi-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} ${nunito.variable} ${oleo.variable} antialiased`}>
        <JsonLd />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
