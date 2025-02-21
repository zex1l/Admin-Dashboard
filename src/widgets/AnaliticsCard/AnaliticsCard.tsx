import { motion } from 'framer-motion';
import MetricCard from '../../shared/ui/MetricCard/MetricCard';
import { metricsData } from './analiticsCard.data';

const AnaliticsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricsData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MetricCard key={index} data={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnaliticsCard;
