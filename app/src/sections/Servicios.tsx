import { useEffect, useRef, useState } from 'react';
import { Settings, Truck, Construction, Clock, ClipboardCheck, Forklift } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, badge, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`card-industrial group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-pezmar-gold group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="bg-pezmar-gold/20 text-pezmar-gold text-xs font-oswald uppercase tracking-wider px-3 py-1 rounded">
          {badge}
        </span>
      </div>
      <h3 className="text-xl font-oswald font-semibold text-white uppercase mb-3 group-hover:text-pezmar-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Servicios = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Forklift className="w-12 h-12" />,
      title: 'Renta de Grúas',
      description: 'Grúas telescópicas, Titan, HIAB y articuladas desde 7 hasta 100 toneladas. Equipos certificados y operadores capacitados para cualquier tipo de maniobra.',
      badge: '7T - 100T',
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Maniobras Industriales',
      description: 'Movimiento de maquinaria pesada, montaje de estructuras, izajes de precisión en espacios reducidos. Experiencia comprobada en proyectos complejos.',
      badge: '20+ años',
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Transporte Especializado',
      description: 'Traslado de maquinaria pesada con lowboy, plataformas y camiones especializados. Cobertura en toda la República Mexicana con seguro incluido.',
      badge: 'Nacional',
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: 'Montaje Industrial',
      description: 'Montaje y desmontaje de estructuras metálicas, espectaculares, naves industriales y más. Personal especializado en trabajos de altura.',
      badge: 'Especializado',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Emergencias 24/7',
      description: 'Servicio de emergencia las 24 horas, los 365 días del año. Respuesta inmediata en Toluca, Metepec, Lerma y área metropolitana.',
      badge: '24/7/365',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: 'Asesoría Técnica',
      description: 'Estudios de viabilidad, cálculo de izajes, planeación de maniobras complejas y supervisión especializada. Cotización sin compromiso.',
      badge: 'Gratuito',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-pezmar-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Soluciones integrales para tus proyectos industriales. Contamos con el equipo 
            y la experiencia necesaria para llevar a cabo cualquier tipo de maniobra.
          </p>
          <div className="w-24 h-1 bg-pezmar-gold mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
