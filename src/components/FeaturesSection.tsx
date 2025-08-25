import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Bot, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Users, 
  Zap,
  Shield,
  Smartphone,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bot,
    title: "Agentes IA Avançados",
    description: "Bots inteligentes que aprendem com cada interação e oferecem respostas personalizadas para cada cliente."
  },
  {
    icon: MessageSquare,
    title: "Chat Multicanal",
    description: "Unifique WhatsApp, Instagram, Facebook, website e mais em uma única plataforma de atendimento."
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Dashboards completos com métricas de conversão, satisfação do cliente e performance dos agentes."
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Seus clientes são atendidos a qualquer hora, mesmo quando sua equipe não está disponível."
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description: "Distribua conversas automaticamente e monitore a performance de cada atendente em tempo real."
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Fluxos que qualificam leads, agendam reuniões e direcionam para o vendedor certo automaticamente."
  },
  {
    icon: Shield,
    title: "Segurança Empresarial",
    description: "Proteção de dados LGPD compliant com criptografia e controles de acesso avançados."
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Atenda seus clientes de qualquer lugar com nosso app nativo para iOS e Android."
  },
  {
    icon: Globe,
    title: "Integração Total",
    description: "Conecte com CRM, ERP, e-commerce e outras ferramentas que sua empresa já utiliza."
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 60,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1.2,
            from: "start"
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations
      Array.from(cards).forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recursos que{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Revolucionam
            </span>{' '}
            seu Atendimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combine o poder do Chatwoot com inteligência artificial avançada para criar 
            a melhor experiência de atendimento ao cliente do mercado.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 shadow-card hover:shadow-glow/20"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;