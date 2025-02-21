import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  ShoppingBag,
  BarChart2,
  UserIcon,
  UserCheck,
  UserX,
  UserPlus,
} from 'lucide-react';
import StatCard from '../shared/ui/StatCard/StatCard';
import Header from '../widgets/Header/Header';
import UserTable from '../widgets/UserTable/UserTable';
import { usersData } from '../widgets/UserTable/userTable.data';
import CustomLineChart from '../widgets/CustomLineChart/SalesChart';
import { SaleChartData } from '../widgets/CustomLineChart/salesChart.data';
import CustomHeatmapChart from '../widgets/CustomHeatmapChart/CustomHeatmapChart';
import { userActivityData } from '../widgets/CustomHeatmapChart/heatmapChart.data';
import CustomPieChart from '../widgets/CustomPieChart/CustomPieChart';
import { userDemographicsData } from '../widgets/CustomPieChart/pieChart.data';

const userStats = {
  totalUsers: '152845',
  newUsersToday: '243',
  activeUsers: '98520',
  churnRate: '2.4%',
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UserIcon}
            value={userStats.activeUsers}
            color="#6366f1"
          />

          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#f59e0b"
          />

          <StatCard
            name="Churt Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#ec4899"
          />

          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
        </motion.div>

        <UserTable
          data={usersData}
          title="Users Table"
          colNames={['Image', 'Name', 'Email', 'Role', 'Status', 'Actions']}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <CustomLineChart data={SaleChartData} typeLine={'natural'} title='Users Grows'/>
          <CustomHeatmapChart data={userActivityData}/>
          <CustomPieChart data={userDemographicsData} wFull title='User Demographics'/>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
