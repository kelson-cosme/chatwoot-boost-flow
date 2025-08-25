import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Bot, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      // Entrance animations
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      }, "-=0.8");

      // Floating animation for icons
      gsap.to(floatingRef.current?.children || [], {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Chatwoot +{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IA Automação
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed"
            >
              Transforme seu atendimento com agentes inteligentes que trabalham 24/7. 
              Automatize conversas, qualifique leads e aumente suas vendas.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Começar Agora
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Ver Demo
              </Button>
            </div>

            {/* Floating icons */}
            <div ref={floatingRef} className="flex gap-6 pt-8">
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/50">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Chat Inteligente</span>
              </div>
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/50">
                <Bot className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium">Agentes IA</span>
              </div>
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/50">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Automação</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              ref={imageRef}
              src={heroImage}
              alt="Chatwoot IA Automation"
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;