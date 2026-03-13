import Image from "next/image";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
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
      <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}
          >
            March Menu
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
            Hand-rolled, fresh-baked, and carefully crafted. Here's what's dropping this month!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chocolate Chip */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">🍪</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Chocolate Chip</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              The classic you can't go wrong with. Thick, soft, and loaded with chocolate chips.
            </p>
          </div>

          {/* Cookie Monster */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:-rotate-6">💙</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Cookie Monster</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Bright blue vanilla base packed with oreos + white chocolate chips. Fun, gooey, and a fan favorite.
            </p>
          </div>

          {/* Cinnamon Roll */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">🤎</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Cinnamon Roll</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Cinnamon sugar cookie topped with brown sugar streusel and finished with a sweet icing drizzle.
            </p>
          </div>

          {/* Red Velvet */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:-rotate-6">❤️</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Red Velvet</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Rich red velvet base stuffed with creamy white chocolate chunks.
            </p>
          </div>

          {/* Reese's */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">🧡</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Reese's</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Peanut butter lovers, this one's for you. Loaded with reese's pieces in every bite.
            </p>
          </div>

          {/* Sprinkle */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FAE8C8] flex flex-col items-center text-center group">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:-rotate-6">🌈</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-baloo)", color: "var(--color-chocolate)" }}>Sprinkle</h3>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-nunito)", color: "#7A5230" }}>
              Soft vanilla sugar cookie rolled in colorful sprinkles for the perfect nostalgic bite.
            </p>
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
