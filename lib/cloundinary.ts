import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(imageUploaded: File, folder: string) {
  const buffer = await imageUploaded.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", folder: folder },
        async (err, result) => {
          if (err) {
            reject(err.message);
          }
          resolve(result);
        }
      )
      .end(bytes);
  });
}
