import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      
      tl.fromTo(
        '.hero-title-part-1',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        '.hero-title-part-2',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        '.hero-buttons',
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        '.hero-social-proof',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col justify-center items-center"
    >
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="hero-title-part-1">Plataforma de Atendimento </span>
              <span className="hero-title-part-2 bg-gradient-primary bg-clip-text text-transparent inline-block">+ IA Automação</span>
            </h1>
            
            <p className="hero-subtitle text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mt-6 max-w-2xl mx-auto">
              Transforme seu atendimento com agentes inteligentes que trabalham 24/7. 
              Automatize conversas, qualifique leads e aumente suas vendas.
            </p>

            <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Começar Agora
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </div>

            <div className="hero-social-proof flex justify-center items-center gap-4 pt-8 mt-4">
                <div className="flex -space-x-2">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-background" src="https://i.pravatar.cc/150?img=1" alt="User 1"/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-background" src="https://i.pravatar.cc/150?img=2" alt="User 2"/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-background" src="https://i.pravatar.cc/150?img=3" alt="User 3"/>
                </div>
                <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 justify-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                    </div>
                    <p>+ de 1,000 empresas confiam na gente.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;