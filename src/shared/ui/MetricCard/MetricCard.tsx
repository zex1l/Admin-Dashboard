import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { AnaliticsCardType } from '../../../widgets/AnaliticsCard/analiticsCard.data';

const MetricCard = ({ data: { change, icon: Icon, name, value } }: Props) => {


  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}

    >
      <div className="px-4 py-5 sm: p-6">
        <div className="flex items-center justify-between mb-3">

          <div>
            <span className="flex items-center text-sm font-medium text-gray-400">
              {name}
            </span>
            <p className="mt-1 text-xl font-semibold text-gray-100">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${change < 0 ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
            <Icon size={20} className={`${change < 0 ? 'text-red-500' : 'text-green-500'}`}/>
          </div>

        </div>
        <div className="flex items-center text-sm">

          {change < 0 ? <ArrowDownRight color='red'/> : <ArrowUpRight color='green'/>}
          <span className={`ml-1 ${change < 0 ? 'text-red-300' : 'text-green-300'}`}>{change}</span>
          <span className='ml-2 text-sm text-gray-400'>vs last period</span>

        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;

export type Props = {
  data: AnaliticsCardType;
};
