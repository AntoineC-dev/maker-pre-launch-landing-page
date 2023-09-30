export interface Products {
  title: string;
  text: string;
  icon: string;
}

type OffersVariant = 'blue' | 'green';
export interface Offers {
  title: string;
  text: string;
  icon: string;
  items: string[];
  variant: OffersVariant;
  price?: number;
}
