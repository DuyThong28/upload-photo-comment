import { IncomingMessage } from "http";
import { uploadImage } from "../../../../lib/cloundinary";
import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const comment = formData.get("comment") as unknown as string;
  const image = formData.get("image") as unknown as File;
  const imageData = await uploadImage(image, "upload-photo");

  const result = await prisma.photo.create({
    data: {
      comment: comment || "",
      version: imageData.version.toString() || "",
      format: imageData.format || "",
      publicId: imageData.public_id || "",
    },
  });

  return NextResponse.json({ result });
}
