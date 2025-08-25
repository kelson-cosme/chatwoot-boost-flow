import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ana Silva",
    company: "CEO da InovaTech",
    quote: "A automação com IA transformou nosso atendimento. Aumentamos as vendas em 40% em apenas 3 meses!",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "João Pereira",
    company: "Diretor de Vendas da Soluções Criativas",
    quote: "O Chatwoot integrado com os agentes IA é simplesmente incrível. Nossa equipe está mais produtiva e os clientes mais felizes.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Maria Oliveira",
    company: "Gerente de Marketing da DigitalNow",
    quote: "Nunca imaginei que poderíamos qualificar leads 24/7 de forma tão eficiente. Recomendo a todos!",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que nossos{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clientes
            </span>{' '}
            dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como estamos ajudando empresas a alcançarem resultados incríveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 shadow-card hover:shadow-glow/20 flex flex-col"
            >
              <CardContent className="p-6 flex-grow flex flex-col">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary/50" />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;