import React from 'react';
import Image from 'next/image';

export default function PrototypagePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Nos Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prototypage Rapide & Efficace
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            De l&apos;idée au produit fini, nous vous accompagnons dans la création de prototypes fonctionnels pour valider vos concepts et accélérer votre mise sur le marché.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Conception et Modélisation</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nos experts en conception utilisent les logiciels les plus performants pour transformer vos idées en modèles 3D précis et détaillés.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Fabrication Additive & Soustractive</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Que ce soit par impression 3D, usinage CNC ou d&apos;autres techniques, nous choisissons la méthode la plus adaptée pour votre prototype.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/fabrication-industrielle.jpg"
                alt="Prototypage"
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