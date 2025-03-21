import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar } from "lucide-react";

const pieData = [
    { name: "Total Income", value: 50000, color: "#d13cff" },
    { name: "Subscriptions", value: 20000, color: "#36a2eb" },
    { name: "Ocoin Purchases", value: 30000, color: "#ffce56" },
];

const barData = [
    { name: "Remixes", value: 300000 },
    { name: "Downloads", value: 400000 },
    { name: "App 1", value: 100000 },
    { name: "App 2", value: 250000 },
    { name: "App 3", value: 200000 },
    { name: "App 4", value: 300000 },
    { name: "App 5", value: 120000 },
];

const FinanceCharts = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* Financial Overview */}
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
                    {/* Financial Breakdown */}
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

                    {/* Pie Chart */}
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

            {/* Ocoin Spending Pattern */}
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Ocoin Spending Pattern</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        This Month
                    </Button>
                </div>
                <p className="text-sm text-gray-300">You can track all Ocoin spending data here</p>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                        <XAxis dataKey="name" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Bar dataKey="value">
                            {barData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill="url(#gradient)" />
                            ))}
                        </Bar>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ffb700" />
                                <stop offset="100%" stopColor="#ff3d00" />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );
};

export default FinanceCharts;
