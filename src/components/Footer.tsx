import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">kemax</h3>
            <p className="text-muted-foreground">Automação e IA para o seu negócio.</p>
            <div className="flex gap-2">
              <Input placeholder="Seu melhor e-mail" className="bg-background" />
              <Button>Inscrever</Button>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="md:ml-auto">
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Recursos</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Planos</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Depoimentos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sobre nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Carreiras</a></li>
            </ul>
          </div>

          {/* Coluna 4: Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Termos de Serviço</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} kemax. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary"><Github /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;