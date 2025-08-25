import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    period: "/mês",
    description: "Perfeito para pequenas empresas começando com automação",
    features: [
      "Até 1.000 conversas/mês",
      "2 agentes IA básicos",
      "Integração WhatsApp",
      "Dashboard básico",
      "Suporte por email"
    ],
    buttonText: "Começar Grátis",
    popular: false
  },
  {
    name: "Professional",
    price: "R$ 297",
    period: "/mês",
    description: "Ideal para empresas em crescimento que precisam de mais automação",
    features: [
      "Até 5.000 conversas/mês",
      "5 agentes IA avançados",
      "Todos os canais inclusos",
      "Analytics avançado",
      "Automações personalizadas",
      "Suporte prioritário",
      "Integração CRM"
    ],
    buttonText: "Iniciar Teste",
    popular: true
  },
  {
    name: "Enterprise",
    price: "R$ 697",
    period: "/mês",
    description: "Solução completa para grandes empresas e agências",
    features: [
      "Conversas ilimitadas",
      "Agentes IA ilimitados",
      "White label completo",
      "API customizada",
      "Gestor de conta dedicado",
      "SLA garantido",
      "Treinamento da equipe",
      "Suporte 24/7"
    ],
    buttonText: "Falar com Vendas",
    popular: false
  }
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 80,
          rotationX: 45
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planos que{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Cabem
            </span>{' '}
            no seu Bolso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a automatizar seu atendimento hoje mesmo. 
            Todos os planos incluem 14 dias de teste grátis.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 shadow-glow/30 scale-105' 
                  : 'shadow-card hover:shadow-glow/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Precisa de algo personalizado? {' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;