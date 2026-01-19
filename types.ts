
export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioImage {
  id: string;
  url: string;
  category: 'Bridal' | 'Party' | 'Celebrity';
  title?: string;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  order: number;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  event_date: string;
  created_at: string;
}

export interface SiteSettings {
  about_text: string;
  cta_text: string;
  phone: string;
  whatsapp: string;
  instagram: string;
}
