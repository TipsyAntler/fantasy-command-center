import { NextResponse } from "next/server";
import { getOrCreateVapidKeys } from "@/lib/push";

export const dynamic = "force-dynamic";

function allowedOrigin(origin: string | null) {
  if (!origin) return "https://tridente-family-hq.vercel.app";
  if (origin === "https://tridente-family-hq.vercel.app") return origin;
  if (origin === "https://tridente-family-hq-tipsy-antler.vercel.app") return origin;
  if (/^https:\/\/tridente-family-[a-z0-9-]+-tipsy-antler\.vercel\.app$/i.test(origin)) return origin;
  return null;
}

function cors(origin: string | null) {
  const allow = allowedOrigin(origin) || "https://tridente-family-hq.vercel.app";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigin(origin)) return new Response(null, { status: 403, headers: cors(origin) });
  return new Response(null, { status: 204, headers: cors(origin) });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigin(origin)) {
    return NextResponse.json({ ok: false, error: "Origin not allowed." }, { status: 403, headers: cors(origin) });
  }
  try {
    const { publicKey } = await getOrCreateVapidKeys();
    return NextResponse.json({ ok: true, publicKey }, { headers: cors(origin) });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not load TrIQ push key." },
      { status: 500, headers: cors(origin) },
    );
  }
}
