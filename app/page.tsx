import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ExperienceSection from './components/ExperienceSection';
import QuoteFormSection from './components/QuoteFormSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ExperienceSection />
      <QuoteFormSection />
    </main>
  );
}
