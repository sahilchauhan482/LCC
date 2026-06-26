// Single source of business facts. Edit here; every section reads from this.
export const site = {
  name: 'Lakhdata Computer Care',
  shortName: 'LCC',
  tagline: 'Laptop & desktop repair, refurbished sales and rentals — done right.',
  description:
    'Premium laptop and desktop repair in Zirakpur, Punjab. Processor, motherboard, RAM, storage and keyboard repairs, plus refurbished laptops and rentals — genuine parts, fast turnaround, real warranty.',
  phoneDisplay: '098151 09816',
  phoneHref: '+919815109816',
  email: 'hello@lakhdatacomputercare.in',
  address: {
    line1: 'Shop No. 150, Deva Ji VIP Plaza Road',
    city: 'Zirakpur',
    region: 'Punjab',
    postal: '140603',
    country: 'India',
  },
  // Google Maps embed for the contact section (place query — no API key needed).
  mapEmbed:
    'https://www.google.com/maps?q=Lakhdata+Computer+Care,+Shop+No.+150,+Deva+Ji+VIP+Plaza+Road,+Zirakpur,+Punjab+140603&output=embed',
  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 5:00 PM' },
  ],
  // Replace '#' with real profile URLs when supplied (pending from user).
  socials: [
    { name: 'WhatsApp', href: 'https://wa.me/919815109816', icon: 'whatsapp' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Google', href: 'https://google.com', icon: 'google' },
  ],
  // Contact-form backend placeholder (Formspree-style). Swap for the real endpoint.
  formEndpoint: 'https://formspree.io/f/your-form-id',
} as const;

export interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string; }[];
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Process', href: '/process' },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Motherboard Repair', href: '/services/motherboard' },
      { label: 'Screen & Keyboard Fix', href: '/services/screen-keyboard' },
      { label: 'RAM & SSD Upgrades', href: '/services/upgrades' },
      { label: 'Printer Repair', href: '/services/printer' },
      { label: 'Data Recovery', href: '/services/recovery' },
      { label: 'Software & Virus Fix', href: '/services/software' },
      { label: 'Laptop Rentals', href: '/services/rentals' },
      { label: 'Refurbished Laptops', href: '/services/refurbished' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
