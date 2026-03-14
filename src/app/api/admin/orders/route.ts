import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifySessionToken } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const session = request.cookies.get("admin_session")?.value;
  if (!session || !verifySessionToken(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const sort = searchParams.get("sort") || "created_at";
  const order = searchParams.get("order") === "asc" ? true : false;

  let query = supabase.from("orders").select("*");

  if (status) {
    query = query.eq("status", status);
  }

  if (search) {
    query = query.or(
      `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`
    );
  }

  if (from) {
    query = query.gte("created_at", `${from}T00:00:00`);
  }

  if (to) {
    query = query.lte("created_at", `${to}T23:59:59`);
  }

  query = query.order(sort, { ascending: order });

  const { data: orders, error } = await query;

  if (error) {
    console.error("Supabase query error:", error);
    return NextResponse.json({ error: "Failed to fetch orders." }, { status: 500 });
  }

  return NextResponse.json({ orders });
}
