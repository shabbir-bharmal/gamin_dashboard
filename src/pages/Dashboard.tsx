import { Bell, Settings } from "lucide-react";
import { Avatar } from "../components/ui/avatar";
import Sidebar from "../components/Sidebar";
import LeaderBoard from "../components/LeaderBoard";
import TopProductsApps from "../components/TopProductsApps";
import FinanceCharts from "../components/FinanceCharts";
import StatsRow from "../components/StatsRow";

const Dashboard: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Scrollable Content */}
            <div className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-br from-gray-900 to-purple-900 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-white text-2xl font-semibold">General Statistics</h1>
                    <div className="flex items-center gap-4">
                        <Bell className="text-white" />
                        <Settings className="text-white" />
                        <Avatar className="w-10 h-10" />
                    </div>
                </div>

                {/* Stats Row */}
                <StatsRow />

                {/* LeaderBoard */}
                <LeaderBoard />

                {/* Financial Overview & Spending Pattern */}
                <FinanceCharts />

                {/* Top Products & Apps */}
                <TopProductsApps />
            </div>
        </div>
    );
};

export default Dashboard;
