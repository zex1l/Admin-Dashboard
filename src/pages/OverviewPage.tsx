import { motion } from 'framer-motion';
import Header from '../widgets/Header/Header';
import StatCard from '../shared/ui/StatCard/StatCard';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import CustomLineChart from '../widgets/CustomLineChart/SalesChart';
import CustomBarChart from '../widgets/CustomBarChart/CustomBarChart';
import { SaleChartData } from '../widgets/CustomLineChart/salesChart.data';
import CustomPieChart from '../widgets/CustomPieChart/CustomPieChart';
import { PieChartData } from '../widgets/CustomPieChart/pieChart.data';

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$1,788.56"
            color="#6366f1"
          />

          <StatCard
            name="Total Sales"
            icon={Users}
            value="1,234"
            color="#8b5cf6"
          />

          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="529"
            color="#ec4899"
          />

          <StatCard
            name="Total Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10b981"
          />
        </motion.div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 '>
          <CustomLineChart data={SaleChartData } title='Sales overview'/>
          <CustomPieChart data={PieChartData} title='Category Distribution'/>
          <CustomBarChart data={PieChartData} wFull title='Sales by Channel'/>
        </div>

      </main>
    </div>
  );
};

export default OverviewPage;
