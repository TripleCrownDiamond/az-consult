import { MapPin, Phone, Mail, Clock } from "lucide-react"; // icons

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen mt-24 flex flex-col">
      <div className="max-w-6xl mx-auto space-y-12 flex-grow px-6 lg:px-12">
        {/* Bloc Coordonnées */}
        <div className="p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Nos Coordonnées
          </h2>
          <ul className="space-y-6 text-center">
            <li className="flex items-start justify-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-lg text-gray-700">
                <strong>Adresse:</strong> Agblangandan, Cotonou, Bénin
              </span>
            </li>
            <li className="flex items-start justify-center gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-lg text-gray-700">
                <strong>Téléphone:</strong> +229 01 92 60 60 02
              </span>
            </li>
            <li className="flex items-start justify-center gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-lg text-gray-700">
                <strong>Email:</strong> contact@az-consulte.com
              </span>
            </li>
            <li className="flex items-start justify-center gap-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-lg text-gray-700">
                <strong>Horaires:</strong> Lun - Ven, 9h00 - 18h00
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bloc Formulaire */}
      <div className="relative isolate overflow-hidden bg-white mt-12 w-full py-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
          Envoyez-nous un message
        </h2>
        <form method="POST" className="mx-auto mt-10 max-w-md px-6 lg:px-8">
          <input type="hidden" name="_subject" value="Nouveau message de contact AZ Consult" />
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
              <label htmlFor="subject" className="sr-only">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Sujet de votre message"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Votre message..."
                defaultValue={''}
              ></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Envoyer le message
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
              <stop stopColor="#3b82f6" />
              <stop offset={1} stopColor="#6d28d9" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
