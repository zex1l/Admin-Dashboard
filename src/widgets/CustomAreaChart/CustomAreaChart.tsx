import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ISalesChart } from '../CustomLineChart/salesChart.data';

const CustomAreaChart = ({ data, title, wFull }: Props) => {
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${
        wFull && 'lg:col-span-2'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-medium text-gray-100 mb-4">{title}</h2>
      <div className="h-80">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <AreaChart
            data={data}
          >
            <CartesianGrid  stroke='#374151' strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke='#9CA3AF'/>
            <YAxis stroke='#9CA3AF'/>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Area type='monotone' dataKey='value' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomAreaChart;

type Props = {
  data: ISalesChart[];
  title: string;
  wFull?: boolean;
};
