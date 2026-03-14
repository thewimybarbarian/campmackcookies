export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Camp Mack Cookie Co.",
    description:
      "Handcrafted cookies baked with love in Arizona. Chocolate Chip, Cookie Monster, Red Velvet & more.",
    url: "https://campmackcookies.com",
    logo: "https://campmackcookies.com/logo-2.png",
    image: "https://campmackcookies.com/header.png",
    address: {
      "@type": "PostalAddress",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/camp_mack_cookies/?hl=en",
      "https://www.facebook.com/profile.php?id=61588434764211",
    ],
    priceRange: "$$",
    servesCuisine: "Cookies",
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: {
        "@type": "MenuSection",
        name: "Cookies",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Chocolate Chip Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Cookie Monster Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Cinnamon Roll Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Red Velvet Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Reese's Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Sprinkle Cookie",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
