import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

const AIPowered = ({ data }: Props) => {
  return (
    <motion.div
      className="bg-gray-800/50  backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        AI-Powered Insights
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${item.color}/20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPowered;

type Props = {
  data: DataType[];
};

type DataType = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  text: string;
};
