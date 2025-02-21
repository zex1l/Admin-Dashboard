import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

export const userRetentionData = [
  { name: 'Week 1', value: 100 },
  { name: 'Week 2', value: 75 },
  { name: 'Week 3', value: 60 },
  { name: 'Week 4', value: 50 },
  { name: 'Week 5', value: 45 },
  { name: 'Week 6', value: 40 },
  { name: 'Week 7', value: 38 },
  { name: 'Week 8', value: 35 },
];

export const revenueData = [
  { name: 'Jan', revenue: 4000, target: 3800 },
  { name: 'Feb', revenue: 3000, target: 3200 },
  { name: 'Mar', revenue: 5000, target: 4500 },
  { name: 'Apr', revenue: 4500, target: 4200 },
  { name: 'May', revenue: 6000, target: 5500 },
  { name: 'Jun', revenue: 5500, target: 5800 },
  { name: 'Jul', revenue: 7000, target: 6500 },
];

export const channelData = [
  { name: 'Organic Search', value: 4000 },
  { name: 'Paid Search', value: 3000 },
  { name: 'Direct', value: 2000 },
  { name: 'Social Media', value: 2780 },
  { name: 'Referral', value: 1890 },
  { name: 'Email', value: 2390 },
];

export const productPerformanceData = [
  { name: 'Product A', sales: 4000, revenue: 2400, profit: 2400 },
  { name: 'Product B', sales: 3000, revenue: 1398, profit: 2210 },
  { name: 'Product C', sales: 2000, revenue: 9800, profit: 2290 },
  { name: 'Product D', sales: 2780, revenue: 3908, profit: 2000 },
  { name: 'Product E', sales: 1890, revenue: 4800, profit: 2181 },
];

export const customerSegmentationData = [
  { name: 'Engagement', A: 120, B: 110 },
  { name: 'Loyalty', A: 98, B: 130 },
  { name: 'Satisfaction', A: 86, B: 130 },
  { name: 'Spend', A: 99, B: 100 },
  { name: 'Frequency', A: 85, B: 90 },
  { name: 'Recency', A: 65, B: 85 },
];

export const dataAIPowered = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		text: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		text: "Customer retention has improved by 8% following the launch of the new loyalty program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		text: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		text: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
	},
];
