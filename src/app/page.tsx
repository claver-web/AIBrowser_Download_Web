import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import DemoSection from '@/components/sections/DemoSection';
import DownloadSection from '@/components/sections/DownloadSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WaitlistSection from '@/components/sections/WaitlistSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <DemoSection />
        <DownloadSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
