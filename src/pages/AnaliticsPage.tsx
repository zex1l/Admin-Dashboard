
import { revenueData, channelData, productPerformanceData, userRetentionData, customerSegmentationData, dataAIPowered } from '../shared/constants/mock/analiticsPage.data';
import AIPowered from '../widgets/AIPoweverd/AIPowered';
import AnaliticsCard from '../widgets/AnaliticsCard/AnaliticsCard';
import CustomAreaChart from '../widgets/CustomAreaChart/CustomAreaChart';
import CustomHeatmapChart from '../widgets/CustomHeatmapChart/CustomHeatmapChart';
import CustomLineChart from '../widgets/CustomLineChart/SalesChart';
import CustomPieChart from '../widgets/CustomPieChart/CustomPieChart';
import CustomSegmentChart from '../widgets/CustomSegmentChart/CustomSegmentChart';
import Header from '../widgets/Header/Header';



const AnaliticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Analitics" />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <AnaliticsCard />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <CustomAreaChart data={revenueData} title="Revenue Analitics" wFull />
          <CustomPieChart data={channelData} title='Channel Performance'/>
          <CustomHeatmapChart data={productPerformanceData} title='Sales by Channel' variousCol/>
          <CustomLineChart data={userRetentionData} title='User Retention' />
          <CustomSegmentChart data={customerSegmentationData} title='Customer Segmentation'/>
        </div>
        <AIPowered data={dataAIPowered}/>
      </main>
    </div>
  );
};

export default AnaliticsPage;
