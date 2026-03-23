import cloudinary from './cloudinary';

export async function uploadImage(file) {
  if (!file) return null;

  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');
  const dataUri = `data:${file.type};base64,${base64}`;

  const { secure_url } = await cloudinary.uploader.upload(dataUri, {
    folder: 'meals',
    resource_type: 'auto',
  });

  return secure_url;
}