"use server";

let photos: { url: string; name: string }[] = [];

export async function uploadPhoto(formData: FormData) {
  const file = formData.get("file-upload") as File;

  if (!file) return;

  // Temporary in-memory storage (restart = cleared)
  const url = URL.createObjectURL(file);
  photos.push({ url, name: file.name });
}

export async function getPhotos() {
  return photos;
}
