"use client";

import Image from "next/image";
import OrderForm from "@/components/OrderForm";
import PromoPopup from "@/components/PromoPopup";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addCookie } = useCart();

  const handleSelectCookie = (id: string) => {
    addCookie(id);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* Warmer, more noticeable parchment/baking-paper texture */}
      <div className="bg-texture-parchment absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-80" />
      
      {/* Ambient background orbs for deep, soft lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-30 pointer-events-none z-0 mix-blend-multiply" style={{ background: "radial-gradient(circle, var(--color-vanilla) 0%, transparent 60%)", filter: "blur(80px)" }} />
      <div className="absolute top-[40%] right-[-15%] w-[70%] h-[70%] rounded-full opacity-20 pointer-events-none z-0 mix-blend-multiply" style={{ background: "radial-gradient(circle, var(--color-sand) 0%, transparent 60%)", filter: "blur(100px)" }} />
      <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] rounded-full opacity-30 pointer-events-none z-0 mix-blend-multiply" style={{ background: "radial-gradient(circle, var(--color-vanilla) 0%, transparent 60%)", filter: "blur(90px)" }} />

      <div className="relative z-10">
        <PromoPopup />
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-5 md:px-12">
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src="/cookie-icon.png"
            alt="Cookie icon"
            width={36}
            height={36}
            className="flex-shrink-0 animate-soft-bounce"
          />
          <span
            className="text-lg sm:text-2xl font-extrabold tracking-tight truncate"
            style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
          >
            Camp Mack Cookies
          </span>
        </div>
        <div
          className="hidden md:flex items-center gap-8 text-base font-semibold"
          style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}
        >
          <a href="#menu" className="hover:opacity-70 transition-opacity">Menu</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#order" className="hover:opacity-70 transition-opacity">Order</a>
          <a
            href="#order"
            className="px-5 py-2 rounded-full font-bold transition-all duration-300 hover:opacity-90 hover:shadow-elegant hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: "var(--color-caramel)", color: "#fff" }}
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pt-8 pb-32 md:pt-12 md:pb-48 md:px-12 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

          {/* Centerpiece image */}
          <div className="relative flex items-center justify-center w-full max-w-[480px] animate-float">
            <div
              className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{
                background: "radial-gradient(circle, #FAE8C8 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />
            <Image
              src="/logo-2.png"
              alt="Camp Mack Cookie Co."
              width={480}
              height={480}
              className="relative drop-shadow-2xl w-full h-auto"
              priority
            />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold tracking-wide uppercase shadow-sm animate-fade-up stagger-1"
            style={{
              backgroundColor: "var(--color-vanilla)",
              color: "var(--color-caramel)",
              border: "2px solid var(--color-sand)",
              fontFamily: "var(--font-nunito)",
            }}
          >
            <span>🍪</span>
            <span>Small-batch · Made to order · Baked with love</span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-sm animate-fade-up stagger-2"
            style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
          >
            Life&rsquo;s Better With a{" "}
            <span style={{ color: "var(--color-caramel)" }}>Cookie</span>{" "}
            in Your Hand
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl animate-fade-up stagger-3"
            style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}
          >
            Handcrafted cookies made from scratch — cozy flavors, generous portions,
            and that just-out-of-the-oven magic in every bite.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 animate-fade-up stagger-4">
            <a
              href="#order"
              className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-elegant hover:shadow-elegant-hover hover:-translate-y-1 active:scale-95 animate-shimmer"
              style={{
                fontFamily: "var(--font-baloo)",
                backgroundImage: "linear-gradient(90deg, var(--color-caramel) 0%, #E8952E 25%, var(--color-caramel) 50%, #E8952E 75%, var(--color-caramel) 100%)",
                backgroundSize: "200% auto",
                color: "#fff",
              }}
            >
              Order Yours →
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-[#F3EAE0] active:scale-95"
              style={{
                fontFamily: "var(--font-baloo)",
                color: "var(--color-chocolate)",
                border: "2px solid var(--color-sand)",
                backgroundColor: "transparent",
              }}
            >
              See the Menu
            </a>
          </div>

          {/* Header product shot */}
          <div className="w-full max-w-4xl mt-8 transition-transform duration-700 hover:scale-[1.01] animate-fade-up stagger-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <Image
                src="/header.png"
                alt="Camp Mack Cookie Co. fresh-baked cookie collection"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ boxShadow: "inset 0 0 40px rgba(74,41,18,0.08)" }}
              />
            </div>
          </div>

        </div>

      </section>

      {/* Menu Section */}
      <section id="menu" className="relative pb-24" style={{ backgroundColor: "#DFF9EC" }}>
        {/* Full Menu Background (Wood) */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-[0]" 
          style={{
            backgroundColor: "#F3EAE0",
            backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
            opacity: 0.95
          }} 
        />
        
        {/* Top Gradient Overlay blending into Wood */}
        <div 
          className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] z-[1]" 
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)"
          }}
        />

        {/* Wavy top divider from Hero — pulled up to overlap and prevent gap */}
        <div className="absolute left-0 w-full overflow-hidden leading-none z-[2]" style={{ transform: "rotate(180deg)", top: "-2px" }}>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-cream)"
            />
          </svg>
        </div>

        {/* Wavy bottom divider leading to Order Section */}
        <div className="absolute left-0 w-full overflow-hidden leading-none z-[2]" style={{ bottom: "-1px" }}>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-14 md:h-24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-vanilla)"
            />
          </svg>
        </div>
        
        {/* Playful Pennant Bunting */}
        <div className="relative z-10 w-full flex justify-center pt-16 md:pt-20 overflow-hidden pointer-events-none">
          <svg width="400" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 drop-shadow-sm animate-sway">
            <path d="M0,0 Q200,40 400,0" stroke="#4A2912" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
            <polygon points="40,4 20,24 60,20" fill="#FFB6C1" />
            <polygon points="100,12 80,32 120,28" fill="#A3C7FF" />
            <polygon points="160,18 140,38 180,34" fill="#DFF9EC" />
            <polygon points="220,18 200,38 240,34" fill="#FFB6C1" />
            <polygon points="280,12 260,32 300,28" fill="#A3C7FF" />
            <polygon points="340,4 320,24 360,20" fill="#DFF9EC" />
          </svg>
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-4">
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 
              className="text-3xl sm:text-5xl md:text-7xl mb-2 tracking-tight drop-shadow-sm"
              style={{ fontFamily: "var(--font-oleo)", color: "var(--color-chocolate)" }}
            >
              March Cookie Menu
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-semibold mb-8" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
              Our Freshly Baked March Flavors
            </p>
            
            {/* Bundle & Save Banner */}
            <div 
              className="inline-block bg-[var(--color-cream)] px-8 py-3 rounded-xl border border-[#D1BFA5] shadow-elegant mb-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <p className="font-extrabold text-base sm:text-xl md:text-2xl" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
                BUNDLE & SAVE: 6 for $18 or 12 for $33!
              </p>
              <p className="font-medium text-sm md:text-base mt-1" style={{ color: "var(--color-chocolate)" }}>
                (Select your cookies at checkout)
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Chocolate Chip */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c1.png" alt="Classic Chocolate Chip Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Classic Chocolate Chip</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Buttery dough with semi-sweet chocolate chips
            </p>
            <button 
              onClick={() => handleSelectCookie("chocolate-chip")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Cookie Monster */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-2">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c2.png" alt="Blue Cookie Monster Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Blue Cookie Monster</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Vibrant blue dough with Oreo bits and white chocolate
            </p>
            <button 
              onClick={() => handleSelectCookie("cookie-monster")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Cinnamon Roll */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-3">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c4.png" alt="Cinnamon Roll Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Cinnamon Roll</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Swirls of brown sugar streusel and sweet icing glaze
            </p>
            <button 
              onClick={() => handleSelectCookie("cinnamon-roll")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Red Velvet */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-4">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c3.png" alt="Red Velvet Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Red Velvet</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Cocoa-infused red dough with melting white chocolate chunks
            </p>
            <button 
              onClick={() => handleSelectCookie("red-velvet")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Reese's */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-5">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c5.png" alt="Peanut Butter & Reese's Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Peanut Butter & Reese's</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Classic peanut butter cup taste, studded with real Reese's Pieces
            </p>
            <button 
              onClick={() => handleSelectCookie("reeses")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Sprinkle */}
          <div className="bg-white rounded-3xl p-6 shadow-elegant transition-all duration-500 flex flex-col items-center group flex-1 hover:shadow-elegant-hover hover:-translate-y-2 animate-fade-up stagger-6">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c6.png" alt="Confetti Sprinkle Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Confetti Sprinkle</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Vanilla sugar cookie celebration with rainbow sprinkles
            </p>
            <button 
              onClick={() => handleSelectCookie("sprinkle")}
              className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>
        </div>
      </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-bold mb-6 tracking-wide" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-caramel)" }}>
            💌 PRE ORDERS OPEN
          </p>
        </div>
      </section>
      <section
        id="order"
        className="py-20 px-6"
        style={{ backgroundColor: "var(--color-vanilla)" }}
      >
        <OrderForm />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 md:px-12" style={{ backgroundColor: "var(--color-cream)" }}>
        {/* Wavy top divider */}
        <div className="absolute left-0 w-full overflow-hidden leading-none" style={{ transform: "rotate(180deg)", top: "-1px" }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-vanilla)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div className="relative flex-shrink-0 w-full max-w-[280px] md:max-w-[360px]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, #FAE8C8 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />
            <Image
              src="/image2.png"
              alt="Camp Mack Cookie Co."
              width={360}
              height={360}
              className="relative drop-shadow-xl w-full h-auto animate-soft-bounce"
            />
          </div>

          {/* Copy */}
          <div className="text-center md:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-sm"
              style={{ fontFamily: "var(--font-oleo)", color: "var(--color-chocolate)" }}
            >
              The Story Behind the Cookies
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}
            >
              Camp Mack Cookie Co. was born in a small Arkansas kitchen with a big dream. What
              started as a passion for baking became something bigger — a way to bring people
              together, one cookie at a time.
            </p>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}
            >
              Behind every batch is a future doctor putting herself through medical school, one
              cookie at a time. She believes that quality food made with real ingredients and
              real love can make a real difference — for her community, her customers, and the
              country she&rsquo;s proud to serve.
            </p>
            <p
              className="text-lg leading-relaxed font-semibold"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}
            >
              Every cookie you order fuels a dream and feeds a community.
              That&rsquo;s the Camp Mack way.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "var(--color-chocolate)" }} className="py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <Image
              src="/cookie-icon-white.png"
              alt="Cookie icon"
              width={36}
              height={36}
            />
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-baloo)", color: "var(--color-cream)" }}
            >
              Camp Mack Cookie Co.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="https://www.instagram.com/camp_mack_cookies/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--color-caramel)", color: "#fff", fontFamily: "var(--font-nunito)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588434764211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--color-caramel)", color: "#fff", fontFamily: "var(--font-nunito)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div
            className="flex items-center gap-6 text-sm font-semibold"
            style={{ fontFamily: "var(--font-nunito)", color: "var(--color-sand)" }}
          >
            <a href="#menu" className="hover:opacity-70 transition-opacity">Menu</a>
            <a href="#order" className="hover:opacity-70 transition-opacity">Order</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          </div>

          {/* Bottom */}
          <p
            className="text-xs tracking-wide"
            style={{ fontFamily: "var(--font-nunito)", color: "var(--color-sand)", opacity: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Camp Mack Cookie Co. Baked with love in Arkansas.
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}
