import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      text: 'Excelente servicio, cumplieron con los tiempos de entrega y la maniobra se realizó con total seguridad. El equipo de Pezmar es altamente profesional y recomendable.',
      author: 'Ing. Carlos Martínez',
      company: 'Constructora del Centro',
      rating: 5,
    },
    {
      text: 'Profesionales en todo momento. El traslado de nuestra maquinaria se hizo sin contratiempos. Sin duda volveremos a contratar sus servicios para futuros proyectos.',
      author: 'Lic. Ana González',
      company: 'Industrial Toluca',
      rating: 5,
    },
    {
      text: 'Rápida respuesta en emergencia. En menos de 2 horas tenían el equipo en nuestra planta. Servicio de primera calidad y atención excepcional las 24 horas.',
      author: 'Mtro. Roberto Sánchez',
      company: 'Automotriz Mexicana',
      rating: 5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-pezmar-gray-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="w-96 h-96 text-pezmar-gold absolute -top-20 -left-20" />
        <Quote className="w-96 h-96 text-pezmar-gold absolute -bottom-20 -right-20 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor referido.
          </p>
          <div className="w-24 h-1 bg-pezmar-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto bg-pezmar-black border border-pezmar-gold/30 rounded-lg p-8 md:p-12 relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-pezmar-gold/20" />
                    
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-pezmar-gold fill-pezmar-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 text-lg md:text-xl italic text-center mb-8 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="text-center">
                      <div className="text-pezmar-gold font-oswald font-semibold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-pezmar-gold/20 hover:bg-pezmar-gold text-pezmar-gold hover:text-pezmar-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-pezmar-gold/20 hover:bg-pezmar-gold text-pezmar-gold hover:text-pezmar-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pezmar-gold w-8'
                    : 'bg-pezmar-gray-medium hover:bg-pezmar-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
