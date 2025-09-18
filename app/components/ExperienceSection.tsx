const stats = [
  {
    id: 1,
    name: 'Années d&apos;expérience',
    value: '20+'
  },
  {
    id: 2,
    name: 'Projets réalisés',
    value: '300+'
  },
  {
    id: 3,
    name: 'Clients satisfaits',
    value: '150+'
  },
];

export default function ExperienceSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-az-blue">Notre Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            20 ans d&apos;expérience au service de vos projets
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Forts de deux décennies d&apos;expertise dans le domaine de la métallurgie et de la conception sur mesure, nous mettons notre savoir-faire unique à votre disposition pour des réalisations d&apos;exception.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}