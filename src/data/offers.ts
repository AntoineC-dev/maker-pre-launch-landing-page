import { Offers } from '../types';
import iconFree from '../assets/icon-free.svg';
import iconPaid from '../assets/icon-paid.svg';

const OFFERS: Offers[] = [
  {
    title: 'Dip your toe',
    text: 'Just getting started? No problem at all! Our free plan will take you a long way.',
    icon: iconFree,
    items: ['Unlimited products', 'Basic analytics', 'Limited marketplace exposure', '10% fee per transaction'],
    variant: 'blue',
  },
  {
    title: 'Dive right in',
    text: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
    icon: iconPaid,
    items: ['Custom domain', 'Advanced analytics and reports', 'High marketplace visibility', '5% fee per transaction'],
    variant: 'green',
    price: 25,
  },
];

export default OFFERS;
