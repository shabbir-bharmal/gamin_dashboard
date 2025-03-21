import { Bell } from "lucide-react";
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
            <div className="flex-1 flex flex-col overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-white text-2xl font-semibold">General Statistics</h1>
                    <div className="flex items-center gap-4">
                        {/* Notification Bell with Red Dot */}
                        <div className="relative">
                            <Bell className="text-white" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </div>

                        {/* Admin Profile */}
                        <div className="flex items-center bg-opacity-10 bg-transparent rounded-full px-3 py-1">
                            <div className="text-white text-sm">
                                <p className="font-semibold">Admin Name</p>
                                <p className="text-xs opacity-70">@adminname</p>
                            </div>
                            <img
                                src="/images/profile.png"
                                alt="Admin Avatar"
                                className="w-15 h-15 rounded-full ml-2"
                            />
                        </div>
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
