import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const body = await request.text();

  const path = request.headers.get("path") || "/";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
