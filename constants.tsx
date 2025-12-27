
import React from 'react';
import { MenuCategory, MenuItem, BrewingMethod } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "ÇOK SEVİLENLER",
    items: [
      { name: "Caffè Latte", description: "Yumuşak içimli sütlü kahve", price: "₺240,00" },
      { name: "Iced Americano", description: "Ferahlatıcı soğuk espresso", price: "₺220,00" },
      { name: "Iced Latte", description: "Caramel, Mocha, Vanilla, Hazelnut seçenekleriyle (+30₺)", price: "₺240,00" },
      { name: "Iced Matcha Latte", description: "Seremoniyel kalite matcha ve soğuk süt", price: "₺330,00" },
      { name: "Hibiscus Sparkling", description: "Böğürtlen, Limon, Hibiscus, Buz, Tarçın tozu", price: "₺290,00" },
      { name: "Magnolia", description: "Ev yapımı taze krema ve meyveler", price: "₺300,00" },
      { name: "Brownie", description: "Yoğun çikolatalı ve nemli", price: "₺350,00" },
      { name: "Tiramisu", description: "Gerçek espresso ıslatmalı", price: "₺300,00" },
      { name: "Pine", description: "İmza karışım", price: "₺290,00" }
    ]
  },
  {
    title: "SICAK ESPRESSO BAZLI",
    items: [
      { name: "Single Espresso", description: "", price: "₺150,00" },
      { name: "Double Espresso", description: "", price: "₺170,00" },
      { name: "Lungo", description: "", price: "₺210,00" },
      { name: "Americano", description: "", price: "₺220,00" },
      { name: "Caffè Latte", description: "", price: "₺240,00" },
      { name: "Cappuccino", description: "", price: "₺240,00" },
      { name: "Flat White", description: "", price: "₺260,00" },
      { name: "Cortado", description: "", price: "₺200,00" },
      { name: "Aromalı Latte", description: "Caramel, Mocha, White Mocha, Vanilla, Hazelnut", price: "₺260,00" },
      { name: "Filtre Kahve", description: "", price: "₺200,00" }
    ]
  },
  {
    title: "SOĞUK ESPRESSO BAZLI",
    items: [
      { name: "Iced Americano", description: "", price: "₺220,00" },
      { name: "Iced Latte", description: "Aromalar +30₺", price: "₺240,00" },
      { name: "Iced Cappuccino", description: "", price: "₺240,00" },
      { name: "Iced Filtre Kahve", description: "", price: "₺200,00" },
      { name: "Ice Flat White", description: "", price: "₺250,00" }
    ]
  },
  {
    title: "DEMLEME KAHVE",
    items: [
      { name: "V60", description: "Colombia, Guatemala, Brazil", price: "₺270,00" },
      { name: "Aeropress", description: "Colombia, Guatemala, Brazil", price: "₺270,00" },
      { name: "Cold Brew", description: "", price: "₺270,00" },
      { name: "Chemex", description: "", price: "₺270,00" }
    ]
  },
  {
    title: "MATCHA BAR",
    items: [
      { name: "Iced Matcha Latte", description: "", price: "₺330,00" },
      { name: "Coco Matcha", description: "", price: "₺350,00" },
      { name: "Karpuzlu Matcha", description: "", price: "₺350,00" },
      { name: "Çilekli Matcha", description: "", price: "₺350,00" },
      { name: "Pink Matcha", description: "", price: "₺350,00" },
      { name: "Blue Matcha", description: "", price: "₺350,00" },
      { name: "Vanilla Matcha", description: "", price: "₺350,00" }
    ]
  },
  {
    title: "İMZA İÇECEKLER",
    items: [
      { name: "Hibiscus Sparkling", description: "Böğürtlen, Limon, Hibiscus, Buz, Tarçın tozu", price: "₺290,00" },
      { name: "Green Ro", description: "Elma, Lime, Limon, Soda, Buz", price: "₺290,00" },
      { name: "Mango Freeze", description: "Mango, Karpuz, Limon, Soda, Buz", price: "₺290,00" },
      { name: "Blue Moon", description: "Turunç, Raspberry, Limon, Limonata, Buz", price: "₺290,00" },
      { name: "Pine", description: "", price: "₺290,00" },
      { name: "Ro Garden", description: "", price: "₺290,00" }
    ]
  },
  {
    title: "SOFT İÇECEKLER",
    items: [
      { name: "Çay", description: "", price: "₺85,00" },
      { name: "Türk Kahvesi", description: "", price: "₺170,00" },
      { name: "Limonata", description: "", price: "₺200,00" },
      { name: "Churchill", description: "", price: "₺180,00" },
      { name: "Soda", description: "Sade", price: "₺150,00" },
      { name: "Su", description: "", price: "₺60,00" }
    ]
  },
  {
    title: "TATLILAR",
    items: [
      { name: "Magnolia", description: "", price: "₺300,00" },
      { name: "San Sebastian", description: "", price: "₺350,00" },
      { name: "Dubai Çikolata", description: "", price: "₺350,00" },
      { name: "Brownie", description: "", price: "₺350,00" },
      { name: "Tiramisu", description: "", price: "₺300,00" }
    ]
  }
];

export const BREW_QUIZ = {
  questions: [
    {
      id: 'vibe',
      text: "Nasıl hissediyorsun?",
      options: [
        { id: 'calm', text: 'Sakin ve Odaklanmış', icon: '🧘' },
        { id: 'energetic', text: 'Enerjik ve Sosyal', icon: '⚡' },
        { id: 'refresh', text: 'Ferahlık Lazım', icon: '🌊' }
      ]
    },
    {
      id: 'taste',
      text: "Tercih ettiğin tat profili?",
      options: [
        { id: 'sweet', text: 'Kremamsı ve Tatlı', icon: '🍦' },
        { id: 'bold', text: 'Yoğun ve Sert', icon: '☕' },
        { id: 'fruity', text: 'Meyvemsi ve Canlı', icon: '🍓' }
      ]
    }
  ],
  results: {
    'calm-sweet': { name: 'Caffè Latte', desc: 'İpeksi yumuşaklıkta ve hafif tatlı.' },
    'calm-bold': { name: 'Flat White', desc: 'Mikro köpükle dengelenmiş yoğun espresso.' },
    'calm-fruity': { name: 'V60 Pour Over', desc: 'Zihinsel berraklık için kompleks notalar.' },
    'energetic-sweet': { name: 'Iced Vanilla Latte', desc: 'Tatlı bir dokunuşla enerji patlaması.' },
    'energetic-bold': { name: 'Double Espresso', desc: 'Saf enerji, dikkat dağıtıcı yok.' },
    'energetic-fruity': { name: 'Hibiscus Sparkling', desc: 'Canlı, kabarcıklı ve hayat dolu.' },
    'refresh-sweet': { name: 'Iced Matcha Latte', desc: 'Serinletici, kremamsı ve dengeli.' },
    'refresh-bold': { name: 'Iced Americano', desc: 'Gevrek ve temiz bir soğuk kafein deneyimi.' },
    'refresh-fruity': { name: 'Mango Freeze', desc: 'Buz üzerinde tropikal bir lezzet patlaması.' },
  }
};

export const FEATURED_ITEMS: MenuItem[] = [
  { name: "Hibiscus Sparkling", description: "Böğürtlen, Limon, Hibiscus, Buz, Tarçın tozu", price: "₺290,00" },
  { name: "Iced Matcha Latte", description: "Premium seremoniyel matcha deneyimi", price: "₺330,00" },
  { name: "Magnolia", description: "Ev yapımı taze krema ve meyveler", price: "₺300,00" },
  { name: "San Sebastian", description: "Efsanevi yanık cheesecake", price: "₺350,00" }
];

export const BEAN_COLLECTION = [
  { 
    name: "Ro House Blend", 
    origin: "Etiyopya ve Kolombiya", 
    notes: "Çikolata, Narenciye, Dengeli", 
    price: "₺480,00",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    name: "Single Origin: Guatemala", 
    origin: "Antigua Bölgesi", 
    notes: "Karamel, Yeşil Elma, Çiçeksi", 
    price: "₺520,00",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    name: "Guest Roast: Kenya", 
    origin: "Nyeri Bölgesi", 
    notes: "Meyvemsi, Canlı, Şarabımsı", 
    price: "₺550,00",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1200&auto=format&fit=crop"
  },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524350303359-36632893d111?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
];

// Added BREWING_METHODS used in CoffeeLab.tsx
export const BREWING_METHODS: BrewingMethod[] = [
  { id: 'v60', name: 'V60 Pour Over', ratio: 15, grind: 'Orta-İnce', temp: '92°C' },
  { id: 'aeropress', name: 'Aeropress', ratio: 13, grind: 'İnce', temp: '85°C' },
  { id: 'chemex', name: 'Chemex', ratio: 15, grind: 'Orta-Kalın', temp: '93°C' },
  { id: 'frenchpress', name: 'French Press', ratio: 16, grind: 'Kalın', temp: '95°C' }
];

export const INSTAGRAM_URL = "https://www.instagram.com/rocofee/";
export const ADDRESS = "Barbaros, Mehmet Dündar bey ap No:13/B, 33200 Yenişehir/Mersin";
export const MAPS_URL = "https://maps.app.goo.gl/cndnGdmDJUFuBvgi8";
export const MENU_DIGITAL_URL = "https://rocoffee.framer.ai/";

export const RO_LOGO_SVG = (
  <svg width="40" height="40" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 280V120C90 75.8172 125.817 40 170 40H220V110H185C171.193 110 160 121.193 160 135V280H90Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M280 280C346.274 280 400 226.274 400 160C400 93.7258 346.274 40 280 40C213.726 40 160 93.7258 160 160C160 226.274 213.726 280 280 280ZM280 205C304.853 205 325 184.853 325 160C325 135.147 304.853 115 280 115C255.147 115 235 135.147 235 160C235 184.853 255.147 205 280 205Z" fill="currentColor"/>
  </svg>
);
