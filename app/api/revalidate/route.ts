import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  const body = await req.json();
  const data = JSON.parse(body);
  alert(data);
  revalidatePath("/");
  revalidatePath(`//${data.slug}`);

  // const path = req.nextUrl.searchParams.get(`/${body.name}`) || "/";
  // revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
