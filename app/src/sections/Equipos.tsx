import { useEffect, useRef, useState } from 'react';
import { Scale, Ruler, ArrowUp } from 'lucide-react';

interface EquipmentCardProps {
  image: string;
  name: string;
  capacity: string;
  reach: string;
  application: string;
  delay: number;
}

const EquipmentCard = ({ image, name, capacity, reach, application, delay }: EquipmentCardProps) => {
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
      className={`group bg-pezmar-gray-dark rounded-lg overflow-hidden border border-pezmar-gray-medium transition-all duration-500 hover:border-pezmar-gold hover:shadow-industrial-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pezmar-gray-dark to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-pezmar-gold text-pezmar-black text-xs font-oswald font-bold uppercase px-3 py-1 rounded">
            {capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-oswald font-semibold text-white uppercase mb-4 group-hover:text-pezmar-gold transition-colors">
          {name}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Scale className="w-4 h-4 text-pezmar-gold mr-3" />
            <span className="text-gray-400">Capacidad:</span>
            <span className="text-white ml-2 font-medium">{capacity}</span>
          </div>
          <div className="flex items-center text-sm">
            <ArrowUp className="w-4 h-4 text-pezmar-gold mr-3" />
            <span className="text-gray-400">Alcance:</span>
            <span className="text-white ml-2 font-medium">{reach}</span>
          </div>
          <div className="flex items-center text-sm">
            <Ruler className="w-4 h-4 text-pezmar-gold mr-3" />
            <span className="text-gray-400">Aplicación:</span>
            <span className="text-white ml-2 font-medium">{application}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Equipos = () => {
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

  const equipments = [
    {
      image: '/images/grua-telescopica.jpg',
      name: 'Grúa Telescópica 25T',
      capacity: '25 Toneladas',
      reach: '40 Metros',
      application: 'Maniobras generales',
    },
    {
      image: '/images/grua-titan.jpg',
      name: 'Grúa Telescópica 50T',
      capacity: '50 Toneladas',
      reach: '52 Metros',
      application: 'Proyectos medianos',
    },
    {
      image: '/images/grua-titan.jpg',
      name: 'Grúa Titan 40T',
      capacity: '40 Toneladas',
      reach: '35 Metros',
      application: 'Espacios reducidos',
    },
    {
      image: '/images/grua-hiab.jpg',
      name: 'Grúa HIAB 12T',
      capacity: '12 Toneladas',
      reach: '18 Metros',
      application: 'Carga/descarga',
    },
    {
      image: '/images/lowboy.jpg',
      name: 'Lowboy 40T',
      capacity: '40 Toneladas',
      reach: 'N/A',
      application: 'Transporte pesado',
    },
    {
      image: '/images/montacargas.jpg',
      name: 'Montacargas 5T',
      capacity: '5 Toneladas',
      reach: '6 Metros',
      application: 'Maniobras interiores',
    },
  ];

  return (
    <section id="equipos" className="py-20 md:py-32 bg-pezmar-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Nuestra Flota</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Equipos certificados y mantenidos al más alto estándar. 
            Todos nuestros equipos cuentan con documentación en regla y seguro de responsabilidad civil.
          </p>
          <div className="w-24 h-1 bg-pezmar-gold mx-auto mt-6" />
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((equipment, index) => (
            <EquipmentCard
              key={equipment.name}
              image={equipment.image}
              name={equipment.name}
              capacity={equipment.capacity}
              reach={equipment.reach}
              application={equipment.application}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Nuestros equipos cuentan con:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Certificación EMA', 'Certificación STPS', 'Seguro de Responsabilidad Civil', 'Placas Federales'].map((cert) => (
              <span
                key={cert}
                className="bg-pezmar-gray-dark border border-pezmar-gray-medium text-gray-300 text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipos;
