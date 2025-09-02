import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(contentRef.current?.children || [],
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-circle", {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
        stagger: 1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-circle absolute top-10 left-10 w-32 h-32 bg-primary/50 rounded-full blur-2xl"></div>
        <div className="floating-circle absolute top-40 right-20 w-24 h-24 bg-accent/40 rounded-full blur-xl"></div>
        <div className="floating-circle absolute bottom-20 left-1/4 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="floating-circle absolute bottom-10 right-10 w-28 h-28 bg-accent/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-light leading-tight">
            Pronto para{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Revolucionar
            </span>{' '}
            seu Atendimento?
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Junte-se a mais de 1.000 empresas que já automatizaram seu atendimento 
            e aumentaram suas vendas em até 300% com nossa solução.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6">
              <MessageSquare className="mr-3 w-5 h-5" />
              Começar Teste Grátis
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Agendar Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="text-3xl font-light text-primary mb-2">14 dias</div>
              <div className="text-muted-foreground">Teste grátis</div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="text-3xl font-light text-accent mb-2">5 min</div>
              <div className="text-muted-foreground">Para configurar</div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="text-3xl font-light text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte total</div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              🔒 Seus dados estão seguros | ⚡ Configuração instantânea | 💰 Sem taxas de setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;