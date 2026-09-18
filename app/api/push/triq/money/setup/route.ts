import { NextResponse } from "next/server";
import { claimTriqMoneyBridgeToken } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const token = await claimTriqMoneyBridgeToken();
    if (!token) {
      return NextResponse.json(
        { ok: false, configured: true, error: "Money push bridge is already configured." },
        { status: 409 },
      );
    }
    return NextResponse.json({ ok: true, token });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not configure money push bridge." },
      { status: 500 },
    );
  }
}
