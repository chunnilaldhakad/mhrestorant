import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Daily Meal', path: '/daily-meal' },
  { name: 'Banquet', path: '/banquet' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-lg font-bold">S</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg font-semibold text-foreground leading-tight">
              Shree Govindam,
            </h1>
            <p className="text-xs text-muted-foreground">Masala House</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors link-underline py-1',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9784776778" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>9784776778</span>
          </a>
          <Button className="btn-gold rounded-full" asChild>
            <a href="https://wa.me/919784776778" target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-base font-medium py-2 transition-colors',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="tel:9784776778"
              className="flex items-center gap-2 text-foreground/80"
            >
              <Phone className="w-4 h-4" />
              <span>9784776778</span>
            </a>
            <Button className="btn-gold w-full" asChild>
              <a href="https://wa.me/919784776778" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
