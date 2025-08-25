import HeroSection from '@/components/HeroSection';
import HorizontalScrollSection from '@/components/HorizontalScrollSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HorizontalScrollSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </main>
  );
};

export default Index;
