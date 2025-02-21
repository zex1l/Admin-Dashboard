import { motion } from 'framer-motion';

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from 'recharts';
import { DataHeatmapChartType } from './heatmapChart.data';
import { useEffect, useState } from 'react';
import { COLOR } from '../../shared/constants/color';

const CustomHeatmapChart = ({ data, wFull }: Props) => {

  const [dataKeys, setDataKeys] = useState<string []>([])

  const getObjectKeys = (data:DataHeatmapChartType[]) => {
    const keys = Object.keys(data[0]).filter(key => key !== 'name').map(filteredKey => (
      filteredKey
    ))

    setDataKeys(keys)
  }

  useEffect(() => {
    if(data) getObjectKeys(data)
  }, [])


  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${
        wFull && 'lg:col-span-2'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-medium text-gray-100">Sales by Channel</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend />

            {
              dataKeys.map((key, index) => <Bar key={index} dataKey={key} stackId='a' fill={COLOR[index % COLOR.length]} />)
            }
						
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomHeatmapChart;

type Props = {
  data: DataHeatmapChartType[];
  wFull?: boolean
};
