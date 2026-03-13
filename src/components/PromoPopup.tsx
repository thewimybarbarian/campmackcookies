"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("campMackPromoSeen");
    
    // For testing purposes, we might want it to show up frequently, but normally:
    if (!hasSeenPopup) {
      // Pop up after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("campMackPromoSeen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    // You can add logic here to send the email to a backend
    setTimeout(() => {
      handleClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
        style={{ border: "4px solid var(--color-chocolate)" }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors border-2 border-white/50 backdrop-blur-md"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[160px] sm:min-h-[200px] md:min-h-[450px] bg-[#FAE8C8] flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full h-full min-h-[140px] sm:min-h-[180px] md:min-h-[350px]">
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
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: "var(--color-vanilla)" }}>
          {hasSubmitted ? (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="text-5xl md:text-6xl mb-4">🎉</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>
                You're in!
              </h2>
              <p className="text-xl" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
                Check your email for your 20% off coupon code!
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-center mb-3 md:mb-4 text-3xl md:text-4xl">🍪</div>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 md:mb-4 text-center leading-tight"
                style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
              >
                Sweet Deal!
              </h2>
              <p 
                className="text-center text-base sm:text-lg md:text-xl mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)", opacity: 0.9 }}
              >
                Sign up for our newsletter and get <span className="font-bold whitespace-nowrap" style={{ color: "var(--color-caramel)" }}>20% OFF</span> your next order!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="w-full px-5 py-4 rounded-xl border-2 shadow-inner focus:outline-none focus:ring-4 text-lg font-semibold"
                  style={{ 
                    fontFamily: "var(--font-nunito)",
                    borderColor: "var(--color-sand)",
                    color: "var(--color-chocolate)"
                  }}
                />
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl text-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-md flex justify-center items-center gap-2"
                  style={{ backgroundColor: "var(--color-caramel)", fontFamily: "var(--font-baloo)" }}
                >
                  Claim My 20% Off <span className="text-2xl leading-none">&rarr;</span>
                </button>
              </form>
              <p className="text-sm text-center mt-6 font-semibold opacity-70" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
                We respect your privacy. No spam, just cookies.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
