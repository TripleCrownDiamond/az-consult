import Image from "next/image";

const images = [
  { src: "/img/gallery/13416.jpg", alt: "Image 1" },
  { src: "/img/gallery/bathroom-sign-door-outside.jpg", alt: "Image 2" },
  { src: "/img/gallery/concept-de-magasin-objective-cafe-design.jpg", alt: "Image 3" },
  { src: "/img/gallery/contreplaque.jpg", alt: "Image 4" },
  { src: "/img/gallery/copeaux-de-verre.jpg", alt: "Image 5" },
  { src: "/img/gallery/details-decoupes-au-laser.jpg", alt: "Image 6" },
  { src: "/img/gallery/fabrication-industrielle.jpg", alt: "Image 7" },
  { src: "/img/gallery/interieur-de-la-maison-avec-parquet-et-escalier-en-bois.jpg", alt: "Image 8" },
  { src: "/img/gallery/vieux-design-architectural-avec-des-escaliers-en-bois.jpg", alt: "Image 9" },
];

export default function GallerySection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre Travail</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Découvrez nos réalisations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explorez notre portfolio de projets qui témoignent de notre expertise et de notre passion pour le travail du métal.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 md:grid-cols-2">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
