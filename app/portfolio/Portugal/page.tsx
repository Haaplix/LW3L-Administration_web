import Carousel from "@/components/Carousel";

export default function Portugal() {
  return (
    <> 
    <h1 className="text-center font-bold text-5xl">Portugal</h1>

    	<h2 className="text-left text-4xl px-2 py-4 underline">Lisboa</h2>
    		<h3 className="text-left text-2xl px-8 py-2">Costa da Caparica</h3>

				<div className="p-3">
      				<Carousel
						images={[{src: "/Costa da Caparica/IMG_0883.jpg"},
						{src: "/Costa da Caparica/IMG_0877.jpg"},
						{src: "/Costa da Caparica/IMG_0886.jpg"},
						{src: "/Costa da Caparica/IMG_0887.jpg"},
						{src: "/Costa da Caparica/IMG_0891.jpg"},
						{src: "/Costa da Caparica/IMG_0894.jpg"},
						{src: "/Costa da Caparica/IMG_0897.jpg"},
						{src: "/Costa da Caparica/IMG_0908.jpg"},
						{src: "/Costa da Caparica/IMG_0910.jpg"},
						{src: "/Costa da Caparica/IMG_0913.jpg"},
						{src: "/Costa da Caparica/IMG_1000-2.jpg"},
						{src: "/Costa da Caparica/IMG_1000.jpg"},
						{src: "/Costa da Caparica/IMG_1006.jpg"},
						{src: "/Costa da Caparica/IMG_1007.jpg"},
						]}/>
				</div>

			<h3 className="text-left text-2xl px-8 py-2">Sintra</h3>
				<div className="p-3">
	  				<Carousel
						images={[{src: "/Sintra/IMG_0005.jpg"},
						{src: "/Sintra/IMG_0023.jpg"},
						{src: "/Sintra/IMG_0030.jpg"},
						]}/>
				</div>

    </>
  );
}
