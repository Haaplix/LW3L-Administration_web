import { uploadPhoto, getPhotos } from "@/lib/uploadPhoto";

export default async function Portfolio() {
  const photos = await getPhotos();

  return (
    <>
      <h1 className="font-bold">Here's some pictures I took!</h1>

      <form action={uploadPhoto}>
        <input type="file" name="file-upload" />
        <button type="submit">Upload</button>
      </form>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {photos.length > 0 ? (
          photos.map((p, i) => (
            <img key={i} src={p.url} alt={p.name} className="rounded-lg" />
          ))
        ) : (
          <p>No photos yet.</p>
        )}
      </div>
    </>
  );
}
