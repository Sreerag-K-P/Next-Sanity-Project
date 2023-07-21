import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json();
  alert(body.path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
