import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Radar,
  Tooltip,
} from 'recharts';
import { COLOR } from '../../shared/constants/color';

const CustomSegmentChart = ({ data, title, wFull }: Props) => {
  const [dataKeys, setDataKeys] = useState<string[]>([]);

  const getObjectKeys = (data: DataSegmentChartType[]) => {
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
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-medium text-gray-100 mb-5">{title}</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="name" stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af" />
            {dataKeys.map((item, index) => (
              <Radar
                name={item}
                key={index}
                dataKey={item}
                stroke={COLOR[index % COLOR.length]}
                fill={COLOR[index % COLOR.length]}
                fillOpacity={0.6}
              />
            ))}
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomSegmentChart;

type Props = {
  data: DataSegmentChartType[];
  wFull?: boolean;
  title: string;
};

export type DataSegmentChartType = {
  name: string;
  [key: string]: number | string;
};
