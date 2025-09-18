import React from 'react';
import Image from 'next/image';

export default function CarrieresPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Notre Entreprise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Carrières chez AZ Consult
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rejoignez une équipe dynamique et innovante. Chez AZ Consult, nous valorisons le talent, la créativité et l&apos;engagement. Découvrez nos opportunités de carrière et construisez votre avenir avec nous.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Pourquoi nous rejoindre ?</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nous offrons un environnement de travail stimulant, des projets variés et des opportunités de développement professionnel continu. Contribuez à des réalisations concrètes et innovantes.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Postes Actuellement Ouverts</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nous recherchons régulièrement des ingénieurs, techniciens, designers et commerciaux passionnés. Consultez nos offres ou envoyez-nous une candidature spontanée.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/13416.jpg"
                alt="Carrières"
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