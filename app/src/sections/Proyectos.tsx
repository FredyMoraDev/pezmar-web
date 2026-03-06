import { useEffect, useRef, useState } from 'react';
import { MapPin, Building2, Forklift } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  client: string;
  location: string;
  equipment: string;
  delay: number;
}

const ProjectCard = ({ image, title, client, location, equipment, delay }: ProjectCardProps) => {
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
      className={`group relative overflow-hidden rounded-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pezmar-black via-pezmar-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-pezmar-gold text-xs font-oswald uppercase tracking-wider mb-2 block">
              Proyecto Realizado
            </span>
            <h3 className="text-xl md:text-2xl font-oswald font-semibold text-white uppercase mb-3">
              {title}
            </h3>
            
            <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <div className="flex items-center text-sm">
                <Building2 className="w-4 h-4 text-pezmar-gold mr-2" />
                <span className="text-gray-300">{client}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 text-pezmar-gold mr-2" />
                <span className="text-gray-300">{location}</span>
              </div>
              <div className="flex items-center text-sm">
                <Forklift className="w-4 h-4 text-pezmar-gold mr-2" />
                <span className="text-gray-300">{equipment}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Proyectos = () => {
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

  const projects = [
    {
      image: '/images/proyecto-nave.jpg',
      title: 'Montaje de Nave Industrial',
      client: 'Industrial Toluca',
      location: 'Toluca, Edo. Méx.',
      equipment: 'Grúa 50T',
    },
    {
      image: '/images/proyecto-prensa.jpg',
      title: 'Traslado de Prensa Industrial',
      client: 'Automotriz Mexicana',
      location: 'Lerma, Edo. Méx.',
      equipment: 'Lowboy + Grúa 25T',
    },
    {
      image: '/images/proyecto-estructura.jpg',
      title: 'Izaje de Estructura Metálica',
      client: 'Constructora del Centro',
      location: 'Metepec, Edo. Méx.',
      equipment: 'Grúa Titan 40T',
    },
    {
      image: '/images/proyecto-transformador.jpg',
      title: 'Maniobra de Transformador',
      client: 'CFE Subestación',
      location: 'Zinacantepec, Edo. Méx.',
      equipment: 'Grúa 100T',
    },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-pezmar-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Proyectos Realizados</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Algunos de nuestros trabajos más destacados. Cada proyecto es un testimonio 
            de nuestro compromiso con la calidad y la seguridad.
          </p>
          <div className="w-24 h-1 bg-pezmar-gold mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              client={project.client}
              location={project.location}
              equipment={project.equipment}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
