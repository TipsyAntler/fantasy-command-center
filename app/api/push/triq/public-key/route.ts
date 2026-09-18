import { NextResponse } from "next/server";
import { getOrCreateVapidKeys } from "@/lib/push";

export const dynamic = "force-dynamic";

const TRIQ_ORIGIN = "https://tridente-family-hq.vercel.app";
const cors = {
  "Access-Control-Allow-Origin": TRIQ_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Vary": "Origin",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors });
}

export async function GET() {
  try {
    const { publicKey } = await getOrCreateVapidKeys();
    return NextResponse.json({ ok: true, publicKey }, { headers: cors });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not load TrIQ push key." },
      { status: 500, headers: cors },
    );
  }
}
