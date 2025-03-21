import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";
import OcoinChart from "./OcoinChart";

const pieData = [
    { name: "Total Income", value: 50000, color: "#d13cff" },
    { name: "Subscriptions", value: 20000, color: "#36a2eb" },
    { name: "Ocoin Purchases", value: 30000, color: "#ffce56" },
];

const FinanceCharts = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Financial Overview</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        This Month
                    </Button>
                </div>
                <p className="text-sm text-gray-300">You can track all users data here</p>
                <div className="flex justify-between items-center mt-6">
                    <div className="space-y-3">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                                <p className="text-sm">
                                    <span className="font-bold text-lg">${item.value.toLocaleString()}</span>
                                    <span className="block text-gray-400">{item.name}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <ResponsiveContainer width={140} height={140}>
                        <PieChart>
                            <Tooltip />
                            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
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
