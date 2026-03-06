import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-pezmar-black/95 backdrop-blur-md shadow-industrial'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center"
          >
            <img
              src="/images/logo-pezmar.jpg"
              alt="Pezmar Maniobras Industriales"
              className="h-14 w-auto rounded"
            />
          </a>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white font-oswald uppercase tracking-wider text-sm hover:text-pezmar-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+525536685187"
              className="flex items-center text-pezmar-gold hover:text-pezmar-gold-light transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-oswald text-sm">
                55 3668 5187
              </span>
            </a>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contacto');
              }}
              className="btn-primary text-sm py-3 px-6"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MENÚ MOBILE */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-pezmar-black/95 backdrop-blur-md border-t border-pezmar-gray-medium">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-white font-oswald uppercase tracking-wider text-lg hover:text-pezmar-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="tel:+525536685187"
                className="flex items-center justify-center gap-2 text-pezmar-gold mt-6"
              >
                <Phone className="w-5 h-5" />
                <span className="font-oswald text-lg">
                  55 3668 5187
                </span>
              </a>

              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="btn-primary text-center block mt-4"
              >
                Cotizar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
