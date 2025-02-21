import {
  BarChart2,
  DollarSign,
  LucideProps,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
} from 'lucide-react';

export const SidebarItems: ISidebarItem[] = [
  {
    name: 'Overview',
    path: '/',
    icon: BarChart2,
    color: '#6366f1',
  },
  {
    name: 'Products',
    path: '/products',
    icon: ShoppingBag,
    color: '#8b5cf6',
  },
  {
    name: 'Users',
    path: '/users',
    icon: Users,
    color: '#ec4899',
  },
  {
    name: 'Sales',
    path: '/sales',
    icon: DollarSign,
    color: '#10b981',
  },
  {
    name: 'Analitics',
    path: '/analitics',
    icon: TrendingUp,
    color: '#3b82f6',
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    color: '#6ee7b7',
  },
];

export type ISidebarItem = {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
};
