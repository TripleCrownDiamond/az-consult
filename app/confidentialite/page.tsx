import React from 'react';
import Image from 'next/image';

export default function ConfidentialitePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Informations Légales</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Politique de Confidentialité
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chez AZ Consult, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Collecte d'Informations</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nous collectons des informations lorsque vous utilisez notre site web, remplissez un formulaire ou nous contactez directement. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone et toute autre information que vous choisissez de nous fournir.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Utilisation des Informations</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Les informations collectées sont utilisées pour répondre à vos demandes, améliorer nos services, personnaliser votre expérience et vous envoyer des communications marketing si vous y avez consenti.
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src="/img/gallery/copeaux-de-verre.jpg"
                alt="Politique de Confidentialité"
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