export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'principales' | 'bebidas' | 'postres';
  image?: string;
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: {
    [key: string]: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
}
