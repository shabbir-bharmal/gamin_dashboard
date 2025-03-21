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
        x={x + width / 3 - 10}
        y={y - 35}
        width="30"
        height="30"
    />
);


const formatYAxis = (tick: number) => (tick === 0 ? "0" : `${tick / 1000}K`);

export default function OcoinChart() {
    return (
        <Card className="p-6  text-white rounded-3xl border-0 card-one">
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Ocoin Spending Pattern</h3>
                    <Button variant="ghost" className="font-bold text-sm group month-dropdown">
                        <Calendar size={16} />
                        This Month

                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-black">
                            <path d="M13.2335 0.636214C13.0455 0.448743 12.7905 0.343427 12.5247 0.343427C12.2588 0.343427 12.0038 0.448743 11.8158 0.636214L6.8527 5.58621L1.88961 0.636213C1.70051 0.454055 1.44724 0.35326 1.18435 0.355539C0.921455 0.357817 0.669979 0.462986 0.48408 0.648394C0.298181 0.833802 0.192735 1.08461 0.190451 1.34681C0.188166 1.60901 0.289227 1.86161 0.471867 2.05021L6.14383 7.70721C6.33186 7.89468 6.58684 8 6.8527 8C7.11857 8 7.37355 7.89468 7.56157 7.70721L13.2335 2.05021C13.4215 1.86269 13.5271 1.60838 13.5271 1.34321C13.5271 1.07805 13.4215 0.823741 13.2335 0.636214Z" fill="" />
                        </svg>

                    </Button>
                </div>
                <p className="text-sm text-gray-300">You can track all Ocoin spending data here</p>
            </div>
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
                        domain={[0, 450000]}
                        tickFormatter={formatYAxis}
                        tick={{ fontSize: 12, fill: "white" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(211, 195, 195, 0.1)" }}
                        contentStyle={{
                            backgroundColor: "#2D1A4C",
                            borderRadius: "8px",
                            color: "white",
                            border: "none"
                        }}
                        itemStyle={{ color: "white" }}
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
