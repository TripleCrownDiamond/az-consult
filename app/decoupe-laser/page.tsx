import React from 'react';
import Image from 'next/image';

export default function DecoupeLaserPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Nos Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Découpe Laser de Précision
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Grâce à notre technologie de découpe laser de pointe, nous réalisons des pièces métalliques d&apos;une précision inégalée, adaptées à toutes vos exigences.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Technologie Avancée</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nos machines de découpe laser sont équipées des dernières innovations pour garantir des coupes nettes, rapides et sans déformation, sur une large gamme de matériaux.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Applications Variées</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                De la fabrication de prototypes à la production en série, la découpe laser est idéale pour l&apos;automobile, l&apos;aéronautique, le bâtiment, et bien d&apos;autres secteurs.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/details-decoupes-au-laser.jpg"
                alt="Découpe Laser"
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