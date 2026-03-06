import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Animate counter
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={itemRef}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-pezmar-gold mb-2">
        {count}
        <span className="text-pezmar-gold-light">{suffix}</span>
      </div>
      <div className="text-gray-400 font-oswald uppercase tracking-wider text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};

const Estadisticas = () => {
  const stats = [
    { value: 20, suffix: '+', label: 'Años de Experiencia' },
    { value: 300, suffix: '+', label: 'Proyectos Completados' },
    { value: 10, suffix: '+', label: 'Equipos en Flota' },
    { value: 100, suffix: '%', label: 'Clientes Satisfechos' },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-pezmar-gray-dark to-pezmar-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(212, 175, 55, 0.1) 10px,
              rgba(212, 175, 55, 0.1) 20px
            )`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="hidden lg:block absolute top-1/2 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-pezmar-gold/30 to-transparent transform -translate-y-1/2" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-pezmar-gold/30 to-transparent transform -translate-y-1/2" />
      <div className="hidden lg:block absolute top-1/2 left-3/4 w-px h-24 bg-gradient-to-b from-transparent via-pezmar-gold/30 to-transparent transform -translate-y-1/2" />
    </section>
  );
};

export default Estadisticas;
