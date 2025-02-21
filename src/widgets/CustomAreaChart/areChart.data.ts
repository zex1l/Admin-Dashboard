

export const monthlySalesData:DataAreaChartType[] = [
	{ name: "Jan", value: 4000 },
	{ name: "Feb", value: 3000 },
	{ name: "Mar", value: 5000 },
	{ name: "Apr", value: 4500 },
	{ name: "May", value: 6000 },
	{ name: "Jun", value: 5500 },
	{ name: "Jul", value: 7000 },
];


export type DataAreaChartType = {
  name: string;
  [key: string]: number | string;
}