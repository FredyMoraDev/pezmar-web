import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Phone, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* VIDEO DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div
          className={`inline-flex items-center bg-pezmar-gold/20 border border-pezmar-gold/50 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Clock className="w-4 h-4 text-pezmar-gold mr-2" />
          <span className="text-pezmar-gold font-oswald uppercase text-sm tracking-wider">
            Servicio 24/7 - Atención Inmediata
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-white uppercase tracking-wide mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Maniobras Industriales
          <span className="block text-gradient-gold mt-2">
            PEZMAR
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Renta de grúas y servicios de maniobras en Toluca y Estado de México
        </p>

        <p
          className={`text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Más de 20 años de experiencia en maniobras industriales, renta de grúas
          telescópicas, transporte de maquinaria pesada y montaje de estructuras.
          Equipos certificados y operadores altamente capacitados.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('#contacto')}
            className="btn-primary w-full sm:w-auto"
          >
            Solicitar Cotización
          </button>
          <button
            onClick={() => scrollToSection('#servicios')}
            className="btn-secondary w-full sm:w-auto"
          >
            Ver Servicios
          </button>
        </div>

        {/* TELÉFONO REAL */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
          }`}
        >
          <a
            href="tel:+525536685187"
            className="inline-flex items-center text-white hover:text-pezmar-gold transition-colors pointer-events-auto"
          >
            <Phone className="w-5 h-5 mr-2 animate-pulse-gold rounded-full" />
            <span className="font-oswald text-lg">
              Llámanos: 55 3668 5187
            </span>
          </a>
        </div>
      </div>

      {/* INDICADOR SCROLL */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#servicios')}
          className="text-white/50 hover:text-pezmar-gold transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* GRADIENTE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pezmar-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
