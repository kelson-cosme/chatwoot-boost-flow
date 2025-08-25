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

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Unifique Todos os Canais",
    subtitle: "WhatsApp • Instagram • Facebook • Website",
    description: "Centralize todas as conversas em uma única plataforma. Seus clientes podem falar com você de qualquer canal e sua equipe responde de um só lugar.",
    features: ["WhatsApp Business API", "Instagram Direct", "Facebook Messenger", "Chat do Website", "Telegram"],
    bgColor: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    icon: Bot,
    title: "IA que Realmente Funciona",
    subtitle: "Agentes Inteligentes • Respostas Personalizadas",
    description: "Nossos agentes IA aprendem com cada conversa e oferecem respostas cada vez mais precisas. Eles qualificam leads, agendam reuniões e direcionam para o vendedor certo.",
    features: ["Processamento de Linguagem Natural", "Aprendizado Contínuo", "Integração com CRM", "Classificação Automática"],
    bgColor: "bg-gradient-to-br from-green-500/20 to-blue-500/20"
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Analytics que Importam",
    subtitle: "Métricas Reais • Insights Acionáveis",
    description: "Veja exatamente como está a performance do seu atendimento. Tempo de resposta, satisfação do cliente, conversões e muito mais em dashboards intuitivos.",
    features: ["Dashboards em Tempo Real", "Relatórios Personalizados", "Análise de Sentimento", "ROI do Atendimento"],
    bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    icon: Users,
    title: "Gestão de Equipe Inteligente",
    subtitle: "Distribuição Automática • Performance em Tempo Real",
    description: "Distribua conversas automaticamente baseado na expertise de cada atendente. Monitore performance e otimize resultados constantemente.",
    features: ["Roteamento Inteligente", "Monitoramento de Performance", "Gamificação", "Treinamento Integrado"],
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  },
  {
    id: 5,
    icon: Zap,
    title: "Automação Completa",
    subtitle: "Fluxos Inteligentes • Conversões Maximizadas",
    description: "Crie fluxos que funcionam 24/7, qualificando leads, agendando reuniões e convertendo visitantes em clientes pagantes automaticamente.",
    features: ["Fluxos Personalizáveis", "Triggers Inteligentes", "A/B Testing", "Otimização Contínua"],
    bgColor: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20"
  }
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const slidesContainer = slidesRef.current;
    
    if (!container || !slidesContainer) return;

    const slides = slidesContainer.children;
    const slideWidth = container.offsetWidth;
    const totalWidth = slideWidth * slides.length;

    // Set up the horizontal scroll animation
    gsap.set(slidesContainer, { width: totalWidth });

    const scrollTween = gsap.to(slidesContainer, {
      x: -(totalWidth - slideWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth * 2}`, // Increased duration significantly
        scrub: 0.5, // Slower, smoother scrub
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate individual slides
    Array.from(slides).forEach((slide, index) => {
      gsap.fromTo(slide.querySelector('.slide-content'), 
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slide,
            start: "left 90%", // Start earlier
            end: "left 10%", // End later
            toggleActions: "play none none reverse",
            containerAnimation: scrollTween
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div 
        ref={slidesRef}
        className="flex h-full"
      >
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div 
              key={slide.id}
              className="flex-shrink-0 w-screen h-full flex items-center justify-center p-8 relative"
            >
              <div className="slide-content max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 === 1 ? 'text-primary' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </h2>
                    
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {slide.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-card/30 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button variant="hero" size="lg" className="group">
                      Experimentar Grátis
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                  <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-glow/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <CardContent className="space-y-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-4 bg-muted/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                            style={{ width: `${20 + (index * 15)}%` }}
                          />
                        </div>
                        
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
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div 
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-accent border-2 border-card"
                              />
                            ))}
                          </div>
                          <div className="px-3 py-1 bg-gradient-primary/20 rounded-full text-xs text-primary font-medium">
                            +{slide.id * 127} conversas hoje
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full opacity-60 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-primary rounded-full opacity-40 animate-pulse delay-1000" />
                  
                  {/* Connection line to next slide */}
                  {index < slides.length - 1 && (
                    <div className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div 
            key={index}
            className="w-2 h-2 rounded-full bg-muted/50 transition-all duration-300"
            style={{
              background: index === 0 ? 'hsl(var(--primary))' : undefined
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;