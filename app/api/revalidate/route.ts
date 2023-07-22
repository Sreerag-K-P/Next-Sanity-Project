import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = request.headers.get("path");
  console.log(body);

  return NextResponse.json({ revalidated: true, now: Date.now(), body });
}
