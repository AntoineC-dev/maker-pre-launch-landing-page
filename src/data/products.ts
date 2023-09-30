import { Products } from '../types';
import iconPassions from '../assets/illustration-passions.svg';
import iconFinancialFreedom from '../assets/illustration-financial-freedom.svg';
import iconLifestyle from '../assets/illustration-lifestyle.svg';
import iconWorkAnywhere from '../assets/illustration-work-anywhere.svg';

const PRODUCTS: Products[] = [
  {
    title: 'Indulge your passions',
    text: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
    icon: iconPassions,
  },
  {
    title: 'Gain financial freedom',
    text: "Start making money work for you. There's nothing quite like earning while you sleep. ",
    icon: iconFinancialFreedom,
  },
  {
    title: 'Choose your lifestyle',
    text: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
    icon: iconLifestyle,
  },
  {
    title: 'Work from anywhere',
    text: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
    icon: iconWorkAnywhere,
  },
];

export default PRODUCTS;
