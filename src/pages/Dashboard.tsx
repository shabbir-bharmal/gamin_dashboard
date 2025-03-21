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
                        <div className="relative w-14 h-14 border border-[#2a7384] rounded-full flex items-center justify-center">

                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.40859 0C7.45437 0 5.58018 0.776313 4.19833 2.15816C2.81648 3.54001 2.04017 5.41419 2.04017 7.36842V11.0821C2.04032 11.2454 2.00248 11.4065 1.92964 11.5526L0.122277 15.1663C0.0339887 15.3429 -0.00770014 15.539 0.00116978 15.7362C0.0100397 15.9334 0.0691737 16.1251 0.172956 16.293C0.276737 16.4609 0.421721 16.5995 0.594137 16.6956C0.766552 16.7917 0.960674 16.8421 1.15807 16.8421H17.6591C17.8565 16.8421 18.0506 16.7917 18.223 16.6956C18.3955 16.5995 18.5404 16.4609 18.6442 16.293C18.748 16.1251 18.8071 15.9334 18.816 15.7362C18.8249 15.539 18.7832 15.3429 18.6949 15.1663L16.8886 11.5526C16.8154 11.4066 16.7772 11.2455 16.777 11.0821V7.36842C16.777 5.41419 16.0007 3.54001 14.6189 2.15816C13.237 0.776313 11.3628 0 9.40859 0ZM9.40859 20C8.75527 20.0003 8.11793 19.798 7.5844 19.421C7.05087 19.0439 6.64742 18.5107 6.42964 17.8947H12.3875C12.1698 18.5107 11.7663 19.0439 11.2328 19.421C10.6993 19.798 10.0619 20.0003 9.40859 20Z" fill="white" />
                            </svg>

                            <span className="absolute top-0 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </div>

                        {/* Admin Profile */}
                        <div className="flex items-center bg-opacity-10 bg-transparent rounded-full border border-[#2a7384] pl-8 pr-20 py-2 h-14 relative">
                            <div className="text-white text-sm">
                                <p className="font-bold">Admin Name</p>
                                <p className="text-xs opacity-70">@adminname</p>
                            </div>
                            <img
                                src="/images/profile.png"
                                alt="Admin Avatar"
                                className="rounded-full ml-2 absolute right-[-22px]"
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
