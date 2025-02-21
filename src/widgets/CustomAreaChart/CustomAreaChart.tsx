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
import { DataAreaChartType } from './areChart.data';
import { useState, useEffect } from 'react';
import { COLOR } from '../../shared/constants/color';

const CustomAreaChart = ({ data, title, wFull }: Props) => {
  const [dataKeys, setDataKeys] = useState<string[]>([]);

  const getObjectKeys = (data: DataAreaChartType[]) => {
    const keys = Object.keys(data[0])
      .filter((key) => key !== 'name')
      .map((filteredKey) => filteredKey);

    setDataKeys(keys);
  };

  useEffect(() => {
    if (data.length > 0) getObjectKeys(data);
  }, []);

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
          <AreaChart data={data}>
            <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            {dataKeys.map((item, index) => (
              <Area
                type="monotone"
                dataKey={item}
                stroke={COLOR[index % COLOR.length]}
                fill={COLOR[index % COLOR.length]}
                fillOpacity={0.3}
                key={index}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomAreaChart;

type Props = {
  data: DataAreaChartType[];
  title: string;
  wFull?: boolean;
};
