import crypto from "crypto";

const SECRET = process.env.ADMIN_PASSWORD || "changeme";

export function createSessionToken(): string {
  const payload = Buffer.from(
    JSON.stringify({ auth: true, exp: Date.now() + 86400000 })
  ).toString("base64");
  const sig = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return false;
    const expectedSig = crypto
      .createHmac("sha256", SECRET)
      .update(payload)
      .digest("hex");
    if (sig.length !== expectedSig.length) return false;
    if (
      !crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expectedSig, "hex"))
    ) {
      return false;
    }
    const data = JSON.parse(Buffer.from(payload, "base64").toString());
    return data.auth === true && data.exp > Date.now();
  } catch {
    return false;
  }
}
