"use server";

let photos: { url: string; name: string }[] = [];  // <-- keep it inside the file

export async function getPhotos() {
  return photos;
}

export async function addPhoto(photo: { url: string; name: string }) {
  photos.push(photo);
}

export async function deletePhoto(index: number) {
  photos.splice(index, 1);
}
