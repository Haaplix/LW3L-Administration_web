'use server';


import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const photos: { name: string; url: string }[] = [];

export async function uploadPhoto(formData: FormData) {
 
 const file = formData.get('file') as File | null;
  if (!file) return;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Convert to base64 and store in memory
  const base64 = buffer.toString('base64');
  const url = `data:${file.type};base64,${base64}`;

  photos.push({ name: file.name, url });

  redirect((await headers()).get('referer') ?? '/');
}
