"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ isHomepage }: { isHomepage: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    {
      name: 'Solutions',
      dropdown: [
        { name: 'Découpe Laser', href: '/decoupe-laser' },
        { name: 'Rampes & Escaliers', href: '/rampes-escaliers' },
        { name: 'Prototypage', href: '/prototypage' },
        { name: 'Services Connexes', href: '/services-connexes' },
      ],
    },
    {
      name: 'Entreprise',
      dropdown: [
        { name: 'À Propos', href: '/a-propos' },
        { name: 'Carrières', href: '/carrieres' },
        { name: 'Partenaires', href: '/partenaires' },
      ],
    },
    { name: 'Réalisations', href: '/realisation' },
    { name: 'Contact', href: '/contact' },
  ];

  const navbarClasses = classNames(
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    isHomepage ? (scrolled ? 'bg-white shadow-lg' : 'bg-transparent') : 'bg-white shadow-lg'
  );

  const logoSrc = isHomepage && !scrolled ? "/img/AZ Consult White.svg" : "/img/AZ Consult Blue.svg";
  const textColorClass = isHomepage && !scrolled ? 'text-white' : 'text-gray-900';
  const hoverTextColorClass = 'hover:text-blue-500'; // Always blue on hover

  return (
    <header className={navbarClasses}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">AZ Consult</span>
            <Image
              className="h-8 w-auto"
              src={logoSrc}
              alt="AZ Consult Logo"
              width={100}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  type="button"
                  className={classNames(
                    'flex items-center gap-x-1 text-sm font-semibold leading-6',
                    textColorClass,
                    hoverTextColorClass,
                    'transition duration-300'
                  )}
                  aria-expanded="false"
                >
                  {item.name}
                  <svg className={classNames('h-5 w-5 flex-none', textColorClass)} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.name} href={item.href} className={classNames('text-sm font-semibold leading-6', textColorClass, hoverTextColorClass, 'transition duration-300')}>
                {item.name}
              </Link>
            )
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/demande-de-devis" className="rounded-md bg-gradient-to-r from-az-blue to-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out">
            Devis Gratuit
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AZ Consult</span>
              <Image
                className="h-8 w-auto"
                src="/img/AZ Consult Blue.svg"
                alt="AZ Consult Logo"
                width={100}
                height={32}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="py-2">
                      <p className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                        {item.name}
                      </p>
                      <div className="mt-2 space-y-2 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/devis"
                  className="rounded-md bg-gradient-to-r from-az-blue to-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-glow transition-all duration-300 ease-in-out"
                >
                  Devis Gratuit
                </Link>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}