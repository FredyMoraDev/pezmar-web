import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: '',
  });

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo lo antes posible.',
    });

    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      servicio: '',
      mensaje: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      content: 'Estado de México',
      href: 'https://share.google/Gbo9VcIAYbLoFDqUv',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      content: '55 3668 5187',
      href: 'tel:+525536685187',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '55 3668 5187',
      href: 'https://wa.me/525536685187',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'pezmarcot@gmail.com',
      href: 'mailto:pezmarcot@gmail.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horario',
      content: 'Atención 24/7',
    },
  ];

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 md:py-32 bg-pezmar-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Solicita tu cotización gratuita. Estamos listos para apoyarte en
            maniobras industriales y renta de grúas.
          </p>
          <div className="w-24 h-1 bg-pezmar-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label>Nombre *</Label>
                <Input name="nombre" value={formData.nombre} onChange={handleChange} required />
              </div>
              <div>
                <Label>Empresa</Label>
                <Input name="empresa" value={formData.empresa} onChange={handleChange} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label>Teléfono *</Label>
                <Input name="telefono" value={formData.telefono} onChange={handleChange} required />
              </div>
              <div>
                <Label>Email *</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <Label>Servicio *</Label>
              <Select
                value={formData.servicio}
                onValueChange={(value) => setFormData({ ...formData, servicio: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gruas">Renta de Grúas</SelectItem>
                  <SelectItem value="maniobras">Maniobras Industriales</SelectItem>
                  <SelectItem value="transporte">Transporte Especializado</SelectItem>
                  <SelectItem value="emergencia">Emergencia 24/7</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Mensaje *</Label>
              <Textarea
                name="mensaje"
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full btn-primary">
              {isSubmitting ? 'Enviando...' : <><Send className="w-5 h-5 mr-2" /> Enviar</>}
            </Button>
          </form>

          {/* INFO + MAPA */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-pezmar-gray-dark p-4 rounded-lg hover:border-pezmar-gold border transition"
                >
                  <div className="text-pezmar-gold">{info.icon}</div>
                  <div>
                    <div className="text-xs text-gray-400">{info.title}</div>
                    <div className="text-white">{info.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
<div className="rounded-lg overflow-hidden border-2 border-pezmar-gold h-64 md:h-80 bg-black">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5616891855416!2d-99.57120432532945!3d19.30141804485829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7190579d04ede5d%3A0xd1d37877f2fcc737!2sManiobras%20Industriales%20Pezmar!5e0!3m2!1ses-419!2sus!4v1770181966613!5m2!1ses-419!2sus"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Maniobras Industriales Pezmar"
  />
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
