import React from 'react';
import Image from 'next/image';

export default function ServicesConnexesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Nos Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services Connexes & Expertise Complémentaire
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Au-delà de nos services principaux, nous offrons une gamme de services connexes pour vous accompagner de manière exhaustive dans tous vos projets industriels et de design.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Conseil et Ingénierie</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Notre équipe d'ingénieurs et de consultants est à votre disposition pour vous offrir des conseils techniques, des études de faisabilité et des solutions optimisées pour vos défis complexes.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Installation et Maintenance</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nous assurons l'installation de vos équipements et un service de maintenance réactif pour garantir la pérennité et la performance de vos installations.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/copeaux-de-verre.jpg"
                alt="Services Connexes"
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