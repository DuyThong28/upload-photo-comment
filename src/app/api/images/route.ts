import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: Request) {
  const images = await prisma.photo.findMany();
  return NextResponse.json(images);
}
