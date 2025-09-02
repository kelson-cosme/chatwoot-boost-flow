import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Bot, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Unifique Todos os Canais",
    subtitle: "WhatsApp • Instagram • Facebook • Website",
    description: "Centralize todas as conversas em uma única plataforma. Seus clientes podem falar com você de qualquer canal e sua equipe responde de um só lugar.",
    features: ["WhatsApp Business API", "Instagram Direct", "Facebook Messenger", "Chat do Website", "Telegram"],
  },
  {
    id: 2,
    icon: Bot,
    title: "IA que Realmente Funciona",
    subtitle: "Agentes Inteligentes • Respostas Personalizadas",
    description: "Nossos agentes IA aprendem com cada conversa e oferecem respostas cada vez mais precisas. Eles qualificam leads, agendam reuniões e direcionam para o vendedor certo.",
    features: ["Processamento de Linguagem Natural", "Aprendizado Contínuo", "Integração com CRM", "Classificação Automática"],
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Analytics que Importam",
    subtitle: "Métricas Reais • Insights Acionáveis",
    description: "Veja exatamente como está a performance do seu atendimento. Tempo de resposta, satisfação do cliente, conversões e muito mais em dashboards intuitivos.",
    features: ["Dashboards em Tempo Real", "Relatórios Personalizados", "Análise de Sentimento", "ROI do Atendimento"],
  },
  {
    id: 4,
    icon: Users,
    title: "Gestão de Equipe Inteligente",
    subtitle: "Distribuição Automática • Performance em Tempo Real",
    description: "Distribua conversas automaticamente baseado na expertise de cada atendente. Monitore performance e otimize resultados constantemente.",
    features: ["Roteamento Inteligente", "Monitoramento de Performance", "Gamificação", "Treinamento Integrado"],
  },
  {
    id: 5,
    icon: Zap,
    title: "Automação Completa",
    subtitle: "Fluxos Inteligentes • Conversões Maximizadas",
    description: "Crie fluxos que funcionam 24/7, qualificando leads, agendando reuniões e convertendo visitantes em clientes pagantes automaticamente.",
    features: ["Fluxos Personalizáveis", "Triggers Inteligentes", "A/B Testing", "Otimização Contínua"],
  }
];

const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"
      }, (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };
        const slides = gsap.utils.toArray<HTMLElement>('.slide-item');

        if (isDesktop) {
          const totalWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);

          gsap.to(slidesContainerRef.current, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${totalWidth}`,
              invalidateOnRefresh: true
            }
          });
        } else {
          // No mobile, apenas animações de entrada vertical
          slides.forEach(slide => {
            gsap.from(slide, {
              opacity: 0,
              y: 50,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: slide,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative lg:h-screen lg:overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div 
        ref={slidesContainerRef}
        className="lg:flex lg:h-full lg:w-max" // w-max é importante para o container flex crescer
      >
        {slides.map((slide) => {
          const Icon = slide.icon;
          return (
            <div 
              key={slide.id}
              className="slide-item w-screen h-screen flex items-center justify-center p-8"
            >
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {slide.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-normal leading-tight">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 2 === 1 ? 'text-primary' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h2>
                  
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {slide.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 text-xs bg-card/30 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground font-extralight"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button variant="hero" className="group font-extralight">
                      Experimentar Grátis
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-glow/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <CardContent className="space-y-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="h-4 bg-muted/50 rounded-full" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="h-3 bg-muted/30 rounded-full" />
                          <div className="h-3 bg-muted/50 rounded-full w-3/4" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted/40 rounded-full w-5/6" />
                          <div className="h-3 bg-muted/30 rounded-full" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;