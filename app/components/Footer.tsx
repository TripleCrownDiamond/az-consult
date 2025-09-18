import Image from 'next/image';
import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'Découpe Laser', href: '/decoupe-laser' },
    { name: 'Rampes & Escaliers', href: '/rampes-escaliers' },
    { name: 'Prototypage', href: '/prototypage' },
    { name: 'Services Connexes', href: '/services-connexes' },
  ],
  company: [
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Carrières', href: '/carrieres' },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'Réalisations', href: '/realisation' },
    { name: 'Contact', href: '/contact' },
    { name: 'Devis Gratuit', href: '/demande-de-devis' },
  ],
  legal: [
    { name: 'Conditions Générales', href: '/conditions' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Image
                className="h-7"
                src="/img/AZ Consult White.svg"
                alt="AZ Consult"
                width={100}
                height={28}
              />
              <p className="text-sm leading-6 text-gray-300">
                Votre partenaire de confiance pour des solutions métalliques innovantes et sur mesure.
              </p>
              <div className="flex space-x-6">
                {/* Social media links can be added here */}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Entreprise</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Légal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                  <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                    <li><a href="tel:+2290192606002">+229 01 92 60 60 02</a></li>
                    <li><a href="mailto:contact@az-consulte.com">contact@az-consulte.com</a></li>
                    <li>Agblangandan, Cotonou, Bénin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">&copy; 2024 AZ Consult. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2290192606002"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <Image src="/img/whatsapp.png" alt="WhatsApp" width={24} height={24} />
      </a>
    </>
  );
}
