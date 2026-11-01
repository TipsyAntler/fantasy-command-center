import { NextRequest, NextResponse } from "next/server";
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/pickem/board";
  return NextResponse.rewrite(url);
}
export const config = { matcher: ["/pickem"] };
