import React from 'react';
import Image from 'next/image';

export default function PartenairesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Notre Entreprise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Partenaires Stratégiques
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chez AZ Consult, nous croyons en la force des collaborations. Nous sommes fiers de travailler avec des partenaires de confiance qui partagent notre vision de l&apos;excellence et de l&apos;innovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Collaborations Fructueuses</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nos partenariats nous permettent d&apos;élargir notre offre de services, d&apos;intégrer des technologies de pointe et de garantir des solutions complètes et performantes à nos clients.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Devenir Partenaire</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Vous souhaitez collaborer avec AZ Consult ? Contactez-nous pour discuter des opportunités de partenariat et construire ensemble des projets innovants.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/vieux-design-architectural-avec-des-escaliers-en-bois.jpg"
                alt="Partenaires"
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