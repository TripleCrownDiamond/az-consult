import { MapPin, Phone, Mail, Clock } from "lucide-react"; // icons

export default function DemandeDeDevisPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-20">
      {/* Bloc Formulaire */}
      <div className="relative isolate overflow-hidden w-full py-8 mt-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Demandez un devis
          </h2>
        </div>
        <form method="POST" className="mx-auto max-w-md px-6 lg:px-8">
          <input type="hidden" name="_subject" value="Nouvelle demande de devis AZ Consult" />
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Téléphone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div>
              <label htmlFor="service" className="sr-only">Service intéressé</label>
              <select
                id="service"
                name="service"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-white"
              >
                <option value="">Sélectionnez un service</option>
                <option value="decoupe-laser">Découpe Laser</option>
                <option value="prototypage">Prototypage</option>
                <option value="rampes-escaliers">Rampes et Escaliers</option>
                <option value="services-connexes">Services Connexes</option>
              </select>
            </div>
            <div>
              <label htmlFor="project_details" className="sr-only">Détails du projet</label>
              <textarea
                name="project_details"
                id="project_details"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Décrivez votre projet et vos besoins..."
                defaultValue={''}
              ></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Demander un devis
            </button>
          </div>
        </form>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85737ce66)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85737ce66">
              <stop stopColor="#e0e7ff" />
              <stop offset={1} stopColor="#c7d2fe" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}