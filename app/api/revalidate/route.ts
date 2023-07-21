import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const data = request.body;
  // const path = request.nextUrl.searchParams.get(`/project/${slug}`) || "/";
  // revalidatePath(path);
  // const path2 = request.nextUrl.searchParams.get("join-our-team") || "/";
  // revalidatePath(path2);
  return NextResponse.json({ revalidated: true, now: Date.now(), data });
}
