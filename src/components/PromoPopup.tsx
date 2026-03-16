"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Small delay to trigger CSS transition after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 hidden md:flex items-center justify-center px-6 py-8 transition-all duration-400 ${
        isVisible && !isClosing
          ? "bg-black/50 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`relative w-[calc(100%-2rem)] max-w-sm md:max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl flex flex-col md:flex-row mx-auto transition-all duration-400 ${
          isVisible && !isClosing
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
        style={{
          border: "3px solid var(--color-chocolate)",
          transitionTimingFunction: isVisible ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "ease-in",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 hover:rotate-90 text-white transition-all duration-300 border-2 border-white/50 backdrop-blur-md"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image Section — hidden on mobile, shown on md+ */}
        <div className="hidden md:flex w-1/2 relative min-h-[450px] bg-[#FAE8C8] items-center justify-center p-8">
          <div className="relative w-full h-full min-h-[350px]">
            <Image
              src="/coupon2.jpg"
              alt="Camp Mack Cookie Co. 20% Off Coupon"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className="w-full md:w-1/2 p-5 md:p-12 flex flex-col justify-center"
          style={{ backgroundColor: "var(--color-vanilla)" }}
        >
          {hasSubmitted ? (
            <div className="text-center space-y-3">
              <div className="text-4xl md:text-6xl mb-2 animate-cookie-spin">🎉</div>
              <h2
                className="text-2xl md:text-4xl font-extrabold animate-fade-up"
                style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
              >
                You&rsquo;re in!
              </h2>
              <p
                className="text-base md:text-xl animate-fade-up stagger-2"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}
              >
                Check your email for your 20% off coupon code!
              </p>
            </div>
          ) : (
            <div>
              <div className="flex justify-center mb-2 md:mb-4 text-2xl md:text-4xl animate-soft-bounce">🍪</div>
              <h2
                className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-4 text-center leading-tight animate-fade-up stagger-1"
                style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
              >
                Sweet Deal!
              </h2>
              <p
                className="text-center text-sm md:text-xl mb-4 md:mb-8 animate-fade-up stagger-2"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)", opacity: 0.9 }}
              >
                Sign up for our newsletter and get{" "}
                <span className="font-bold whitespace-nowrap animate-pulse" style={{ color: "var(--color-caramel)" }}>
                  20% OFF
                </span>{" "}
                your next order!
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 flex flex-col animate-fade-up stagger-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 md:py-4 rounded-xl border-2 shadow-inner focus:outline-none focus:ring-4 focus:ring-[var(--color-caramel)]/20 text-base md:text-lg font-semibold transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-nunito)",
                    borderColor: "var(--color-sand)",
                    color: "var(--color-chocolate)",
                  }}
                />
                <button
                  type="submit"
                  className="btn-glow btn-social w-full py-3 md:py-4 rounded-xl text-lg md:text-xl font-bold text-white hover:scale-[1.02] active:scale-95 shadow-md flex justify-center items-center gap-2"
                  style={{ backgroundColor: "var(--color-caramel)", fontFamily: "var(--font-baloo)" }}
                >
                  Claim My 20% Off <span className="text-xl md:text-2xl leading-none">&rarr;</span>
                </button>
              </form>
              <p
                className="text-xs md:text-sm text-center mt-4 font-semibold opacity-70 animate-fade-up stagger-4"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}
              >
                We respect your privacy. No spam, just cookies.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
