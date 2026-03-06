import "./App.css";
import { Toaster } from "sonner";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Estadisticas from "./sections/Estadisticas";
import Equipos from "./sections/Equipos";
import Proyectos from "./sections/Proyectos";
import PorQueElegirnos from "./sections/PorQueElegirnos";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";
import Footer from "./sections/Footer";

import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <>
      <div className="min-h-screen bg-pezmar-black">
        <Navbar />
        <main>
          <Hero />
          <Servicios />
          <Estadisticas />
          <Equipos />
          <Proyectos />
          <PorQueElegirnos />
          <Testimonios />
          <Contacto />
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>

      {/* FUERA DEL LAYOUT */}
      <WhatsappFloat />
    </>
  );
}


export default App;