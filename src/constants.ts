import { MenuItem, RestaurantInfo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Rollitos de Primavera',
    description: 'Vegetales frescos envueltos en masa crujiente, servidos con salsa agridulce.',
    price: 6.50,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Dumplings de Cerdo',
    description: 'Hechos a mano, al vapor o fritos, rellenos de cerdo y cebollín.',
    price: 8.00,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Pollo Kung Pao',
    description: 'Pollo salteado con cacahuetes, pimientos y chiles secos en salsa picante.',
    price: 14.50,
    category: 'principales',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Arroz Frito Especial',
    description: 'Arroz salteado con camarones, pollo, cerdo y vegetales frescos.',
    price: 12.00,
    category: 'principales',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Té de Jazmín',
    description: 'Té verde aromático con flores de jazmín.',
    price: 3.50,
    category: 'bebidas'
  },
  {
    id: '6',
    name: 'Limonada de Jengibre',
    description: 'Refrescante limonada natural con un toque de jengibre fresco.',
    price: 4.50,
    category: 'bebidas'
  }
];

export const RESTAURANT_INFO: RestaurantInfo = {
  name: 'Panda House',
  address: 'Calle 50, Ciudad de Panamá, Panamá',
  phone: '+507 123-4567',
  whatsapp: 'https://wa.me/5071234567',
  hours: {
    'Lunes - Jueves': '11:30 AM - 10:00 PM',
    'Viernes - Sábado': '11:30 AM - 11:00 PM',
    'Domingo': '12:00 PM - 9:00 PM'
  },
  social: {
    instagram: 'https://instagram.com/pandahousepa',
    facebook: 'https://facebook.com/pandahousepa'
  }
};
