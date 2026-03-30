/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from './constants';
import { MenuItem } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMenu = activeCategory === 'todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = ['todos', ...new Set(MENU_ITEMS.map(item => item.category))];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-panda-red">Panda House</span>
            <span className="text-xl">🐼</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#inicio" className="hover:text-panda-red transition-colors">Inicio</a>
            <a href="#menu" className="hover:text-panda-red transition-colors">Menú</a>
            <a href="#nosotros" className="hover:text-panda-red transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-panda-red transition-colors">Contacto</a>
            <a 
              href={RESTAURANT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-panda-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition-all"
            >
              Pedir Ahora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-panda-black" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-[70] p-8 shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6 text-xl font-medium">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menú</a>
                <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                <hr className="border-gray-100" />
                <a 
                  href={RESTAURANT_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-panda-red"
                >
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" 
            alt="Asian Food" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] text-panda-gold font-semibold mb-4 block">Sabor Auténtico en Panamá</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              Tradición que <br /> <span className="italic text-panda-gold">enamora</span> el paladar.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10">
              Descubre la verdadera esencia de la cocina asiática moderna. Ingredientes frescos, recetas milenarias y un ambiente inolvidable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu" 
                className="bg-panda-red text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-all text-center"
              >
                Ver Menú
              </a>
              <a 
                href="#contacto" 
                className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all text-center"
              >
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-px h-12 bg-white/30 mx-auto mb-2"></div>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-panda-red/10 rounded-full flex items-center justify-center mx-auto text-panda-red">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold">Servicio Rápido</h3>
            <p className="text-gray-600">Tu comida caliente y lista en menos de 20 minutos.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-panda-red/10 rounded-full flex items-center justify-center mx-auto text-panda-red">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold">Ubicación Central</h3>
            <p className="text-gray-600">En el corazón de la ciudad, fácil de llegar.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-panda-red/10 rounded-full flex items-center justify-center mx-auto text-panda-red">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold">Pedidos Online</h3>
            <p className="text-gray-600">Pide por WhatsApp y retira o recibe en casa.</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-panda-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Nuestras Especialidades</h2>
            <div className="w-24 h-1 bg-panda-red mx-auto mb-8"></div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                    activeCategory === cat 
                    ? 'bg-panda-red text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((item: MenuItem) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.image || 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-panda-red font-bold">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <button className="text-panda-red font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Añadir al pedido <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 text-center">
            <a 
              href={RESTAURANT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg"
            >
              <MessageCircle size={24} />
              Pedir Menú Completo por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="rounded-2xl shadow-lg mt-12"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Chef cooking" 
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-panda-red text-white p-8 rounded-2xl hidden md:block">
                <span className="text-4xl font-serif block mb-1">10+</span>
                <span className="text-sm uppercase tracking-widest">Años de Experiencia</span>
              </div>
            </div>
            <div>
              <span className="text-panda-red font-bold uppercase tracking-widest mb-4 block">Nuestra Historia</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">Pasión por la cocina <br /> asiática desde 2014.</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Panda House nació con un sueño simple: traer los sabores vibrantes y auténticos de las calles de Asia a la Ciudad de Panamá. Lo que comenzó como un pequeño puesto familiar se ha convertido en un referente de la gastronomía local.
                </p>
                <p>
                  Cada plato que servimos es un homenaje a nuestras raíces, utilizando técnicas tradicionales combinadas con ingredientes locales de la más alta calidad.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-panda-black font-bold mb-2">Ingredientes Frescos</h4>
                  <p className="text-sm text-gray-500">Seleccionamos cada vegetal y proteína diariamente.</p>
                </div>
                <div>
                  <h4 className="text-panda-black font-bold mb-2">Ambiente Familiar</h4>
                  <p className="text-sm text-gray-500">Un espacio diseñado para crear recuerdos inolvidables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contacto" className="py-24 bg-panda-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8">Visítanos</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Estamos ubicados en una de las zonas más vibrantes de la ciudad. Ven a disfrutar de una experiencia gastronómica única.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-panda-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Dirección</h4>
                    <p className="text-gray-400">{RESTAURANT_INFO.address}</p>
                    <a href="#" className="text-panda-gold text-sm flex items-center gap-1 mt-2 hover:underline">
                      Abrir en Google Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-panda-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Horarios</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-400">
                      {Object.entries(RESTAURANT_INFO.hours).map(([day, time]) => (
                        <div key={day} className="flex justify-between sm:block">
                          <span className="font-medium text-white sm:block">{day}:</span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-panda-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Contacto</h4>
                    <p className="text-gray-400">{RESTAURANT_INFO.phone}</p>
                    <p className="text-gray-400">info@pandahouse.pa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-serif mb-6">Reserva tu mesa</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Nombre</label>
                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-panda-gold transition-all" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Teléfono</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-panda-gold transition-all" placeholder="Tu teléfono" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Fecha</label>
                    <input type="date" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-panda-gold transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Personas</label>
                    <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-panda-gold transition-all">
                      <option className="bg-panda-black">2 Personas</option>
                      <option className="bg-panda-black">4 Personas</option>
                      <option className="bg-panda-black">6+ Personas</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Mensaje Especial</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-panda-gold transition-all" placeholder="Alergias, cumpleaños, etc."></textarea>
                </div>
                <button className="w-full bg-panda-gold text-panda-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all">
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-panda-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-panda-red">Panda House</span>
            <span className="text-xl">🐼</span>
          </div>
          
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex gap-4">
            <a href={RESTAURANT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-panda-red transition-all">
              <Instagram size={20} />
            </a>
            <a href={RESTAURANT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-panda-red transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Panda House Panamá. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={RESTAURANT_INFO.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-pulse"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
