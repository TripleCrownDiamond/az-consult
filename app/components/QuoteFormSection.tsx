import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function QuoteFormSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Obtenez un devis rapide.
            <br />
            Contactez-nous dès aujourd'hui.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Décrivez votre projet et nous vous recontacterons dans les plus brefs délais avec une proposition personnalisée.
          </p>
          <form action="#" method="POST" className="mx-auto mt-10 max-w-md">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-az-blue sm:text-sm sm:leading-6"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-az-blue sm:text-sm sm:leading-6"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-az-blue sm:text-sm sm:leading-6"
                  placeholder="Décrivez votre projet..."
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="rounded-md bg-az-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-az-blue"
              >
                Envoyer la demande
                <ChevronRightIcon className="inline-block h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85737ce66)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85737ce66">
            <stop stopColor="#3b82f6" />
            <stop offset={1} stopColor="#6d28d9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}