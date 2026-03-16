"use client";

import { useEffect, useState } from "react";

export default function CookieLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Cookie SVG */}
      <div className="relative animate-cookie-spin">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cookie body */}
          <circle cx="40" cy="40" r="36" fill="#D4943A" />
          <circle cx="40" cy="40" r="36" fill="url(#cookieGrad)" />
          {/* Darker edge */}
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#B07828"
            strokeWidth="2"
            fill="none"
          />
          {/* Chocolate chips */}
          <ellipse cx="28" cy="26" rx="5" ry="4.5" fill="#4A2912" />
          <ellipse cx="50" cy="22" rx="4" ry="3.5" fill="#3D2010" />
          <ellipse cx="22" cy="44" rx="4.5" ry="4" fill="#3D2010" />
          <ellipse cx="44" cy="40" rx="5" ry="4" fill="#4A2912" />
          <ellipse cx="54" cy="52" rx="4" ry="3.5" fill="#3D2010" />
          <ellipse cx="34" cy="56" rx="4.5" ry="4" fill="#4A2912" />
          {/* Bite mark */}
          <circle cx="68" cy="18" r="10" fill="var(--color-cream)" />
          {/* Subtle highlight */}
          <ellipse cx="32" cy="30" rx="14" ry="10" fill="white" opacity="0.08" />
          <defs>
            <radialGradient id="cookieGrad" cx="0.4" cy="0.35" r="0.6">
              <stop offset="0%" stopColor="#E8A84C" />
              <stop offset="100%" stopColor="#C4862E" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Crumb particles */}
      <div className="absolute flex gap-3 mt-24">
        <div
          className="w-2 h-2 rounded-full animate-crumb-1"
          style={{ backgroundColor: "#D4943A" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full animate-crumb-2"
          style={{ backgroundColor: "#C4862E" }}
        />
        <div
          className="w-2.5 h-2.5 rounded-full animate-crumb-3"
          style={{ backgroundColor: "#D4943A" }}
        />
      </div>

      {/* Loading text */}
      <p
        className="mt-8 text-lg font-bold tracking-wide animate-pulse"
        style={{
          fontFamily: "var(--font-baloo)",
          color: "var(--color-chocolate)",
        }}
      >
        Baking up something sweet...
      </p>
    </div>
  );
}
