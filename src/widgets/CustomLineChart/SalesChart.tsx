import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import { ISalesChart} from './salesChart.data';
import { CurveType } from 'recharts/types/shape/Curve';

const CustomLineChart = ({data, withLegend, typeLine='monotone', title}:Props) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-medium text-gray-100 mb-4">{title}</h2>
      <div className="h-80">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Line
              type={typeLine}
              dataKey={'value'}
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            {withLegend && <Legend/>}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomLineChart;


type Props = {
  data: ISalesChart[]
  withLegend?: boolean
  typeLine?: CurveType
  title: string
}