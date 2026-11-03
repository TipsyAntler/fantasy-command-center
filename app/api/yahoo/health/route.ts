import { NextResponse } from "next/server";
import { getServerYahooSession, yahooServerStorageConfigured } from "@/lib/yahoo-store";
import { getLeague, LEAGUES } from "@/lib/yahoo-scout";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = { "Cache-Control":"public, max-age=0, s-maxage=300", "X-Robots-Tag":"noindex, nofollow" };
export async function GET(request: Request) {
 const checkedAt = new Date().toISOString();
 if (!yahooServerStorageConfigured()) return NextResponse.json({ok:false,checkedAt,stage:"storage-not-configured"},{status:503,headers});
 try {
  const session = await getServerYahooSession(new URL(request.url).origin);
  if (!session) return NextResponse.json({ok:false,checkedAt,stage:"session-not-initialized"},{status:503,headers});
  const results = await Promise.allSettled(LEAGUES.map(l=>getLeague(l.id,l.short,l.expectedTeam,session,new URL(request.url).origin,false)));
  const ready = results.map((r,i)=>({league:LEAGUES[i].short,ready:r.status==="fulfilled"&&r.value.starters.length>0&&r.value.standings.length>0}));
  const ok=ready.every(r=>r.ready);
  return NextResponse.json({ok,checkedAt,stage:ok?"live-yahoo-verified":"partial-live-data",leagues:ready,readOnly:true},{status:ok?200:503,headers});
 } catch { return NextResponse.json({ok:false,checkedAt,stage:"yahoo-request-failed"},{status:503,headers}); }
}
