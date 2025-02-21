import { motion } from 'framer-motion';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ISalesChart } from '../CustomLineChart/salesChart.data';
import { COLOR } from '../../shared/constants/color';

const CustomPieChart = ({ data, wFull,title }: Props) => {
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${
        wFull && 'lg:col-span-2'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-medium text-gray-100">
        {title}
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChart>
            <Pie
              data={data}
              cx={'50%'}
              cy={'50%'}
              outerRadius={80}
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLOR[index % COLOR.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomPieChart;

type Props = {
  data: ISalesChart[];
  wFull?: boolean
  title: string
};
