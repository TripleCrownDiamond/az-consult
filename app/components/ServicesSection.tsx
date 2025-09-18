import Link from 'next/link';
import { WrenchScrewdriverIcon, BuildingOffice2Icon, CubeTransparentIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Découpe Laser de Précision',
    description: 'Transformez vos designs en réalité avec notre service de découpe laser de pointe, idéal pour une variété de matériaux.',
    icon: WrenchScrewdriverIcon,
    href: '/decoupe-laser',
  },
  {
    name: 'Rampes et Escaliers Sur Mesure',
    description: 'Conception et fabrication de rampes et escaliers uniques, alliant sécurité, esthétique et durabilité pour vos espaces.',
    icon: BuildingOffice2Icon,
    href: '/rampes-escaliers',
  },
  {
    name: 'Prototypage Rapide',
    description: 'Du concept à la réalité, notre service de prototypage rapide transforme vos idées en modèles fonctionnels avec efficacité.',
    icon: CubeTransparentIcon,
    href: '/prototypage',
  },
  {
    name: 'Services Connexes',
    description: 'Découvrez notre gamme complète de services complémentaires, conçus pour optimiser et enrichir tous vos projets métalliques.',
    icon: WrenchScrewdriverIcon,
    href: '/services-connexes',
  },
];

export default function ServicesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Nos Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Des solutions complètes pour vos projets métalliques
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AZ Consult est votre partenaire privilégié pour la réalisation de vos projets, de la conception à la fabrication. Découvrez nos expertises.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-az-blue">
                    <service.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
                <div className="mt-4">
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-az-blue hover:text-blue-800"
                  >
                    En savoir plus <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}