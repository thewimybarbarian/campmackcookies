import Image from "next/image";
import OrderForm from "@/components/OrderForm";
import PromoPopup from "@/components/PromoPopup";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      <PromoPopup />
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Camp Mack Cookies Logo" 
            width={80} 
            height={80} 
            className="rounded-full drop-shadow-md"
          />
          <span
            className="text-2xl font-extrabold tracking-tight hidden sm:block"
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
            className="px-5 py-2 rounded-full font-bold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--color-caramel)", color: "#fff" }}
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pt-8 pb-32 md:pt-12 md:pb-48 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

          {/* Centerpiece image */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full"
              style={{
                width: "520px",
                height: "520px",
                background: "radial-gradient(circle, #FAE8C8 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />
            <Image
              src="/image2.png"
              alt="Camp Mack Cookie Co."
              width={480}
              height={480}
              className="relative drop-shadow-2xl"
              priority
            />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
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
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
          >
            Life&rsquo;s Better With a{" "}
            <span style={{ color: "var(--color-caramel)" }}>Cookie</span>{" "}
            in Your Hand
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}
          >
            Handcrafted cookies made from scratch — cozy flavors, generous portions,
            and that just-out-of-the-oven magic in every bite.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#order"
              className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
              style={{
                fontFamily: "var(--font-baloo)",
                backgroundColor: "var(--color-caramel)",
                color: "#fff",
              }}
            >
              Order Yours →
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:opacity-80"
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

        </div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="#FAE8C8"
            />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative pb-24">
        {/* Top Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] z-0" />
        
        {/* Bottom Wood Texture Background */}
        <div 
          className="absolute top-[400px] left-0 w-full h-[calc(100%-400px)] z-0" 
          style={{
            backgroundColor: "#F3EAE0",
            backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
            opacity: 0.8
          }} 
        />
        
        {/* Playful Pennant Bunting */}
        <div className="relative z-10 w-full flex justify-center pt-8 overflow-hidden pointer-events-none">
          <svg width="400" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 drop-shadow-sm">
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
              className="text-5xl md:text-7xl mb-2"
              style={{ fontFamily: "var(--font-oleo)", color: "var(--color-chocolate)" }}
            >
              March Cookie Menu
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-semibold mb-8" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
              Our Freshly Baked March Flavors
            </p>
            
            {/* Bundle & Save Banner */}
            <div 
              className="inline-block bg-[var(--color-cream)] px-8 py-3 rounded-xl border border-[#D1BFA5] shadow-lg mb-4"
              style={{
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(255,255,255,0.8)"
              }}
            >
              <p className="font-extrabold text-xl md:text-2xl" style={{ fontFamily: "var(--font-nunito)", color: "var(--color-chocolate)" }}>
                BUNDLE & SAVE: 6 for $18 or 12 for $33!
              </p>
              <p className="font-medium text-sm md:text-base mt-1" style={{ color: "var(--color-chocolate)" }}>
                (Select your cookies at checkout)
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Chocolate Chip */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c1.png" alt="Classic Chocolate Chip Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Classic Chocolate Chip</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Buttery dough with semi-sweet chocolate chips
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Cookie Monster */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c2.png" alt="Blue Cookie Monster Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Blue Cookie Monster</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Vibrant blue dough with Oreo bits and white chocolate
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Cinnamon Roll */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c3.png" alt="Cinnamon Roll Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Cinnamon Roll</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Swirls of brown sugar streusel and sweet icing glaze
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Red Velvet */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c4.png" alt="Red Velvet Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Red Velvet</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Cocoa-infused red dough with melting white chocolate chunks
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Reese's */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c5.png" alt="Peanut Butter & Reese's Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Peanut Butter & Reese's</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Classic peanut butter cup taste, studded with real Reese's Pieces
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>

          {/* Sprinkle */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 overflow-hidden">
               <Image src="/c6.png" alt="Confetti Sprinkle Cookie" fill className="object-cover transform transition-transform group-hover:scale-105" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Confetti Sprinkle</h3>
            <p className="text-sm md:text-base text-center mb-6 flex-grow" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Vanilla sugar cookie celebration with rainbow sprinkles
            </p>
            <button className="w-full py-3 rounded-xl font-bold transition-all shadow-md bg-gradient-to-r from-[#DFF9EC] to-[#A3C7FF] hover:opacity-90 active:scale-95" style={{ color: "var(--color-chocolate)", fontFamily: "var(--font-nunito)" }}>
              Select
            </button>
          </div>
        </div>
      </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-caramel)" }}>
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
    </main>
  );
}
