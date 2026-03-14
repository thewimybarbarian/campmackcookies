export const COOKIE_PRICES: Record<string, number> = {
  "chocolate-chip": 3,
  "cookie-monster": 3,
  "cinnamon-roll": 3,
  "red-velvet": 3,
  "reeses": 3,
  "sprinkle": 3,
};

export const COOKIE_NAMES: Record<string, string> = {
  "chocolate-chip": "Chocolate Chip",
  "cookie-monster": "Cookie Monster",
  "cinnamon-roll": "Cinnamon Roll",
  "red-velvet": "Red Velvet",
  "reeses": "Reese's",
  "sprinkle": "Sprinkle",
};

/**
 * Bundle pricing: 6 for $18, 12 for $33
 * - Every full dozen = $33
 * - Every full half-dozen (after dozens) = $18
 * - Remaining individual cookies = $3 each
 */
export function calculateBundlePrice(totalItems: number): number {
  let remaining = totalItems;
  let price = 0;

  const dozens = Math.floor(remaining / 12);
  price += dozens * 33;
  remaining -= dozens * 12;

  const halfDozens = Math.floor(remaining / 6);
  price += halfDozens * 18;
  remaining -= halfDozens * 6;

  price += remaining * 3;

  return price;
}
