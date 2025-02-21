import { motion } from 'framer-motion';
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import StatCard from '../shared/ui/StatCard/StatCard';
import Header from '../widgets/Header/Header';
import ProductsTable from '../widgets/ProductsTable/ProductsTable';
import CustomLineChart from '../widgets/CustomLineChart/SalesChart';
import CustomPieChart from '../widgets/CustomPieChart/CustomPieChart';
import { PieChartData } from '../widgets/CustomPieChart/pieChart.data';
import { saleChartData } from '../widgets/CustomLineChart/salesChart.data';
import { productsData } from '../widgets/ProductsTable/productsTable.data';

const ProductsPage = () => {


  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="1234"
            color="#6366f1"
          />

          <StatCard
            name="Total Selling"
            icon={TrendingUp}
            value="89"
            color="#10b981"
          />

          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="23"
            color="#f59e0b"
          />

          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="543,210"
            color="#ef4444"
          />
        </motion.div>

        <ProductsTable data={productsData} title='Products List' colNames={['Name', 'Category', 'Price', 'Stock', 'Sales', 'Actions']}/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
            <CustomLineChart data={saleChartData.slice(0, 6)} withLegend typeLine='linear' title='Products overview'/>
            <CustomPieChart title='Products Overview' data={PieChartData} />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
