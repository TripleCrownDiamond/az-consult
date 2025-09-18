import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    body: 'AZ Consult a transformé notre vision en réalité avec une précision incroyable. Leur découpe laser est inégalée et le service client est exceptionnel.',
    author: {
      name: 'Sarah M.',
      handle: 'Directrice de Production',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Les rampes et escaliers sur mesure d\'AZ Consult ont sublimé notre espace. La qualité des matériaux et la finesse des détails sont remarquables.',
    author: {
      name: 'Jean-Luc P.',
      handle: 'Architecte d\'Intérieur',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Un partenaire fiable pour tous nos projets métalliques. Leur expertise en prototypage nous a permis de gagner un temps précieux.',
    author: {
      name: 'Sophie L.',
      handle: 'Chef de Projet Innovation',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1507003211169-e695c6edd655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-az-blue">Témoignages</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4 sm:text-left">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`\"${testimonial.body}\"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    {/* <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" /> */}
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}