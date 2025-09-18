import React from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Notre Entreprise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            À Propos d&apos;AZ Consult
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AZ Consult est une entreprise innovante spécialisée dans la conception et la fabrication de solutions métalliques sur mesure. Forts de notre expertise et de notre engagement envers la qualité, nous accompagnons nos clients dans la réalisation de leurs projets les plus ambitieux.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Notre Mission</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Offrir des solutions industrielles et de design innovantes, durables et esthétiques, en mettant l&apos;accent sur la précision, la personnalisation et la satisfaction client.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Nos Valeurs</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Excellence, Innovation, Intégrité et Collaboration sont les piliers de notre entreprise. Nous croyons en un partenariat solide avec nos clients pour atteindre des résultats exceptionnels.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/concept-de-magasin-objective-cafe-design.jpg"
                alt="À Propos d'AZ Consult"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}