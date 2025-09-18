import React from 'react';
import Image from 'next/image';

export default function RampesEscaliersPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Nos Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rampes & Escaliers Sur Mesure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous concevons et fabriquons des rampes et escaliers uniques, alliant sécurité, fonctionnalité et esthétique, pour s'intégrer parfaitement à votre espace.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Design Personnalisé</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Chaque projet est une œuvre d'art. Nous travaillons avec vous pour créer des designs qui reflètent votre style et répondent à vos besoins spécifiques.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Matériaux de Qualité</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Utilisation de matériaux durables et esthétiques tels que l'acier inoxydable, le verre, le bois et l'aluminium pour une finition impeccable et une longévité assurée.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/interieur-de-la-maison-avec-parquet-et-escalier-en-bois.jpg"
                alt="Rampes et Escaliers"
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