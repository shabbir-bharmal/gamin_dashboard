import { Card } from "../components/ui/card";
import { User, ArrowRight, Mail, Package } from "lucide-react";
import { JSX } from "react";

interface Stat {
    label: string;
    value: string;
    icon: JSX.Element;
}

const stats: Stat[] = [
    { label: "Online Users", value: "6522", icon: <User size={20} /> },
    { label: "New Signups", value: "685", icon: <ArrowRight size={20} /> },
    { label: "New Subscribers", value: "474", icon: <Mail size={20} /> },
    { label: "Unsubscribes", value: "8", icon: <Package size={20} /> },
];

const StatsRow = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => (
                <Card
                    key={i}
                    className="p-4 bg-gradient-to-b from-purple-800 to-gray-900 text-white flex items-center justify-between rounded-3xl border border-purple-500 shadow-md"
                >
                    {/* Left Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500 bg-transparent">
                        {stat.icon}
                    </div>

                    {/* Stat Info */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">{stat.value}</h3>
                        <p className="text-sm text-gray-300">{stat.label}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default StatsRow;
