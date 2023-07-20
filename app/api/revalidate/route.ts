import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const body = await req.text();

  const path = JSON.parse(body);

  revalidatePath("/");
  revalidatePath(`/${path.slug}`);

  return NextResponse.json({
    success: true,
  });
}
