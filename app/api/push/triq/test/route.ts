import { NextResponse } from "next/server";
import { getPushSubscriptionByEndpoint, sendPushToSubscription } from "@/lib/push";

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
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigin(origin)) return new Response(null, { status: 403, headers: cors(origin) });
  return new Response(null, { status: 204, headers: cors(origin) });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigin(origin)) {
    return NextResponse.json({ ok: false, error: "Origin not allowed." }, { status: 403, headers: cors(origin) });
  }
  try {
    const { endpoint } = await request.json();
    const stored = endpoint ? await getPushSubscriptionByEndpoint("triq", endpoint) : null;
    if (!stored) {
      return NextResponse.json({ ok: false, error: "This device is not registered for TrIQ push." }, { status: 403, headers: cors(origin) });
    }

    await sendPushToSubscription(stored, {
      title: "TrIQ · Push is live",
      body: "Family HQ can reach this phone even when TrIQ is closed.",
      url: "https://tridente-family-hq.vercel.app/",
      tag: `triq-server-test-${Date.now()}`,
      category: "system",
      severity: "actionable",
    });

    return NextResponse.json({ ok: true }, { headers: cors(origin) });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "TrIQ server push test failed." },
      { status: 500, headers: cors(origin) },
    );
  }
}
