import { NextResponse } from "next/server";
import { getOrCreateVapidKeys } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { publicKey } = await getOrCreateVapidKeys();
    return NextResponse.json({ ok: true, publicKey });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not load FFCC push key." },
      { status: 500 },
    );
  }
}
