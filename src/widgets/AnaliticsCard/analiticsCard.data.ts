import { DollarSign, Eye, LucideProps, ShoppingBag,  Users, } from 'lucide-react';

export const metricsData: AnaliticsCardType[] = [
  { name: 'Revenue', value: 1234567, change: 12.5,icon: DollarSign },
  { name: 'Users', value: 45678, change: 8.3,icon: Users },
  { name: 'Orders', value: 9876, change: -3.2,icon: ShoppingBag },
  { name: 'Page Views', value: 1234567, change: 15.7, icon: Eye },
];

export type AnaliticsCardType = {
  name: string;
  value: string | number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  change: number;
};
