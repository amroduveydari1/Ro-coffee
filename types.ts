
export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

// Interface for brewing methods used in the Coffee Lab calculator
export interface BrewingMethod {
  id: string;
  name: string;
  ratio: number;
  grind: string;
  temp: string;
}
