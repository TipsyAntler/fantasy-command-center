import { NextResponse } from "next/server";
import { getDashboardData } from "@/lib/sleeper";

export const revalidate = 300;

export async function GET() {
  const data = await getDashboardData();

  return NextResponse.json({
    state: data.state,
    adds: data.adds,
    drops: data.drops,
    injuries: data.injuries,
    fetchedAt: data.fetchedAt,
    errors: data.errors,
  });
}
