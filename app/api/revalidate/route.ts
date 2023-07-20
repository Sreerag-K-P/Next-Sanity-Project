import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import {} from "sanity";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("*[_type == project]") || " ";

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now(), request });
}
