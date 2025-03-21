import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";
import OcoinChart from "./OcoinChart";

const pieData = [
    { name: "Total Income", value: 50000, color: "#FF00EE", icon: "/images/doller.png" },
    { name: "Income from Subscriptions", value: 20000, color: "#11FFFF", icon: "/images/subs.png" },
    { name: "Income from Ocoin Purchases", value: 30000, color: "#FCC59B", icon: "/images/ocoin.png" },
];

const FinanceCharts = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Financial Overview</h3>
                        <Button variant="ghost" className="font-bold text-sm group month-dropdown">
                            <Calendar size={16} />
                            This Month

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-black">
                                <path d="M13.2335 0.636214C13.0455 0.448743 12.7905 0.343427 12.5247 0.343427C12.2588 0.343427 12.0038 0.448743 11.8158 0.636214L6.8527 5.58621L1.88961 0.636213C1.70051 0.454055 1.44724 0.35326 1.18435 0.355539C0.921455 0.357817 0.669979 0.462986 0.48408 0.648394C0.298181 0.833802 0.192735 1.08461 0.190451 1.34681C0.188166 1.60901 0.289227 1.86161 0.471867 2.05021L6.14383 7.70721C6.33186 7.89468 6.58684 8 6.8527 8C7.11857 8 7.37355 7.89468 7.56157 7.70721L13.2335 2.05021C13.4215 1.86269 13.5271 1.60838 13.5271 1.34321C13.5271 1.07805 13.4215 0.823741 13.2335 0.636214Z" fill="" />
                            </svg>

                        </Button>
                    </div>
                    <p className="text-sm text-gray-300">You can track all users data here</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <div className="space-y-3">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-black/20 rounded-full flex items-center justify-center overflow-hidden user-block" style={{ borderColor: item.color }}>
                                    <img className="" src={item.icon} />
                                </div>


                                <p className="text-sm">
                                    <span className="font-bold text-base">${item.value.toLocaleString()}</span>
                                    <span className="block text-gray-400 text-sm">{item.name}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <ResponsiveContainer width={200} height={200} className="glowing-chart">
                        <PieChart height={200} width={200}>
                            <Tooltip />
                            <Pie
                                data={pieData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                stroke="transparent"
                                className="glowing-pie"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <OcoinChart />
        </div>
    );
};

export default FinanceCharts;
