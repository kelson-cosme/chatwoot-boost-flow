import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from "@/assets/kemax.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Recursos', href: '#features' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <img className='max-w-[7em]' src={Logo} alt="" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Entrar</Button>
          <Button variant="hero">Começar Agora</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pb-8">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-4 mt-8">
            <Button variant="ghost" className="w-40">Entrar</Button>
            <Button variant="hero" className="w-40">Começar Agora</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;