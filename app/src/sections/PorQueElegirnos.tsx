import { useEffect, useRef, useState } from 'react';
import { Check, Shield, Award, Clock, MapPin, Phone, BadgeCheck, DollarSign } from 'lucide-react';

const PorQueElegirnos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: '20+ años de experiencia en maniobras industriales' },
    { icon: <Shield className="w-5 h-5" />, text: 'Equipos certificados EMA y STPS' },
    { icon: <BadgeCheck className="w-5 h-5" />, text: 'Operadores certificados DC-3' },
    { icon: <Shield className="w-5 h-5" />, text: 'Seguro de responsabilidad civil' },
    { icon: <Clock className="w-5 h-5" />, text: 'Servicio 24/7 los 365 días del año' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Cobertura en Toluca, Edo. Méx. y República Mexicana' },
    { icon: <Phone className="w-5 h-5" />, text: 'Atención personalizada y cotización gratuita' },
    { icon: <DollarSign className="w-5 h-5" />, text: 'Precios competitivos sin comprometer seguridad' },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-pezmar-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-pezmar-gold to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="section-title mb-6">
              ¿Por Qué Elegir <span className="text-gradient-gold">Pezmar?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Comprometidos con la excelencia en cada maniobra. Nuestra trayectoria 
              y profesionalismo nos distinguen en el mercado industrial.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-pezmar-gold/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-pezmar-gold" />
                  </div>
                  <span className="text-gray-300 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Solicitar Cotización Gratis
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Border Decoration */}
              <div className="absolute -inset-4 border-2 border-pezmar-gold/30 rounded-lg transform rotate-3" />
              
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden border-2 border-pezmar-gold">
                <img
                  src="/images/equipo-trabajadores.jpg"
                  alt="Equipo Pezmar Maniobras Industriales"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pezmar-black/50 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-pezmar-gold text-pezmar-black p-4 rounded-lg shadow-industrial-lg">
                <div className="text-3xl font-oswald font-bold">20+</div>
                <div className="text-sm font-oswald uppercase">Años de<br/>Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueElegirnos;
