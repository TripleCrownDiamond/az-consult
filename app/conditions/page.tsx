import React from 'react';
import Image from 'next/image';

export default function ConditionsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Informations Légales</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conditions Générales d'Utilisation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bienvenue sur le site d'AZ Consult. En accédant à notre site et en utilisant nos services, vous acceptez de vous conformer aux présentes conditions générales d'utilisation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Acceptation des Conditions</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                L'accès et l'utilisation de ce site sont soumis à votre acceptation inconditionnelle des présentes conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Modifications des Conditions</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                AZ Consult se réserve le droit de modifier les présentes conditions à tout moment. Il est de votre responsabilité de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/copeaux-de-verre.jpg"
                alt="Conditions Générales d'Utilisation"
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