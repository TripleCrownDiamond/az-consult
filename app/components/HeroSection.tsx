import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/img/hero-bg.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Découpe Laser de Précision
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-200">
          AZ Consult transforme vos idées en créations uniques. Rapidité, qualité et innovation pour vos projets, du prototype à la production.
        </p>
        <div className="mt-10">
          <Link
            href="/demande-de-devis"
            className="inline-block rounded-xl bg-gradient-to-r from-az-blue to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-glow transition-all duration-300 ease-in-out hover:scale-105"
          >
            Demandez un Devis Gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}
