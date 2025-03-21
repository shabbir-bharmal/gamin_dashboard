import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar } from "lucide-react";

const barData = [
    { name: "Remixes", value: 320000 },
    { name: "Downloads", value: 400000 },
    { name: "App 1", value: 100000 },
    { name: "App 2", value: 250000 },
    { name: "App 3", value: 200000 },
    { name: "App 4", value: 310000 },
    { name: "App 5", value: 90000 },
];

const CustomLabel = ({ x, y, width }: any) => (
    <image
        href="/images/coin.svg"
        x={x + width / 2 - 10}
        y={y - 25}
        width="30"
        height="30"
    />
);

const formatYAxis = (tick: number) => `${tick / 1000}K`;

export default function OcoinChart() {
    return (
        <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Ocoin Spending Pattern</h3>
                <Button variant="ghost" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                    <Calendar size={16} />
                    This Month
                </Button>
            </div>
            <p className="text-sm text-gray-300">You can track all Ocoin spending data here</p>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                    <XAxis
                        dataKey="name"
                        stroke="white"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        stroke="white"
                        domain={[0, 400000]}
                        tickFormatter={formatYAxis}
                        tick={{ fontSize: 12, fill: "white" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                        contentStyle={{ backgroundColor: "#2D1A4C", borderRadius: "8px", color: "white" }}
                    />
                    <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={40} label={<CustomLabel />}>
                        {barData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill="url(#gradient)" />
                        ))}
                    </Bar>
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFC300" />
                            <stop offset="100%" stopColor="#FF5733" />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
}
