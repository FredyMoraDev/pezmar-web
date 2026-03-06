import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    servicios: [
      { name: 'Renta de Grúas', href: '#servicios' },
      { name: 'Maniobras Industriales', href: '#servicios' },
      { name: 'Transporte Especializado', href: '#servicios' },
      { name: 'Montaje Industrial', href: '#servicios' },
      { name: 'Emergencias 24/7', href: '#servicios' },
    ],
    empresa: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Nuestros Equipos', href: '#equipos' },
      { name: 'Proyectos', href: '#proyectos' },
      { name: 'Contacto', href: '#contacto' },
    ],
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/maniobraspezmar/',
      label: 'Facebook',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/maniobrasindustrialespezmar/',
      label: 'Instagram',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'https://wa.me/525536685187',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-black border-t-4 border-pezmar-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* LOGO Y DESCRIPCIÓN */}
          <div>
            <img
              src="/images/logo-pezmar.jpg"
              alt="Pezmar Maniobras Industriales"
              className="h-16 w-auto rounded mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Maniobras Industriales y Renta de Grúas en Toluca y Estado de México.
              Más de 15 años de experiencia brindando soluciones seguras y eficientes.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-pezmar-gray-dark border border-pezmar-gray-medium rounded-full flex items-center justify-center text-gray-400 hover:bg-pezmar-gold hover:text-pezmar-black hover:border-pezmar-gold transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="text-white font-oswald font-semibold uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-pezmar-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-white font-oswald font-semibold uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-pezmar-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-oswald font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://share.google/Gbo9VcIAYbLoFDqUv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pezmar-gold transition-colors flex items-start gap-2"
                >
                  <MapPin className="w-4 h-4 mt-1 text-pezmar-gold" />
                  Toluca, Estado de México
                </a>
              </li>

              <li>
                <a
                  href="tel:+525536685187"
                  className="hover:text-pezmar-gold transition-colors"
                >
                  <span className="block text-pezmar-gold">Teléfono:</span>
                  55 3668 5187
                </a>
              </li>

              <li>
                <a
                  href="mailto:pezmarcot@gmail.com"
                  className="hover:text-pezmar-gold transition-colors"
                >
                  <span className="block text-pezmar-gold">Email:</span>
                  pezmarcot@gmail.com
                </a>
              </li>

              <li>
                <span className="block text-pezmar-gold">Horario:</span>
                Atención 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-12 pt-8 border-t border-pezmar-gray-dark">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Pezmar Maniobras Industriales. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* SEO OCULTO */}
      <div className="sr-only">
        grúas Toluca, renta de grúas Toluca, maniobras industriales Toluca,
        grúas Estado de México, transporte maquinaria pesada Toluca,
        maniobras industriales Estado de México, grúas Metepec, grúas Lerma
      </div>
    </footer>
  );
};

export default Footer;
