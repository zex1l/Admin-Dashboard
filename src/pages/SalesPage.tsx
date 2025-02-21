import { motion } from "framer-motion";
import {  TrendingUp, DollarSign, ShoppingCart, CreditCard } from "lucide-react";
import StatCard from "../shared/ui/StatCard/StatCard";
import Header from "../widgets/Header/Header";
import CustomAreaChart from "../widgets/CustomAreaChart/CustomAreaChart";
import { monthlySalesData } from "../widgets/CustomAreaChart/areChart.data";
import CustomPieChart from "../widgets/CustomPieChart/CustomPieChart";
import CustomBarChart from "../widgets/CustomBarChart/CustomBarChart";
import { userDemographicsData } from "../widgets/CustomPieChart/pieChart.data";


const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="$ 1,234,871"
            color="#6366f1"
          />

          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value="$ 90.1"
            color="#10b981"
          />

          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value="2.87%"
            color="#f59e0b"
          />

          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value="14.21%"
            color="#ef4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <CustomAreaChart title='Sales Overview' data={monthlySalesData} wFull/>
          <CustomPieChart title="Sales Pie" data={userDemographicsData} />
          <CustomBarChart data={userDemographicsData} title='Dayly Sales Trend'/>
        </div>
        
      </main>
    </div>
  );
};

export default SalesPage;