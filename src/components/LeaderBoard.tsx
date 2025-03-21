import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

interface User {
    name: string;
    date: string;
    points: number;
    role?: string;
    avatar: string;
    roleColor?: string;
}

const hallOfFamers: User[] = [
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user1.png" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user2.png" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user3.png" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user4.png" },
];

const allStars: User[] = [
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Explorer", avatar: "/avatars/user5.png", roleColor: "bg-blue-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Creator", avatar: "/avatars/user6.png", roleColor: "bg-yellow-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Designer", avatar: "/avatars/user7.png", roleColor: "bg-cyan-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Visionary", avatar: "/avatars/user8.png", roleColor: "bg-pink-400" },
];

const theBench: User[] = [...allStars];

const LeaderBoard = () => {
    return (
        <div className="grid grid-cols-3 gap-6 pb-6">
            {/* Hall of Famers */}
            <Card className="p-5 bg-purple-800 text-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Hall of famers - Top Remixers</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm">View all</Button>
                </div>
                <div className="space-y-4">
                    {hallOfFamers.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10" />
                                <div>
                                    <p className="text-sm font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                                🪙 {user.points}
                                <span className="text-gray-400 text-xs">Spent</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* All Stars */}
            <Card className="p-5 bg-purple-800 text-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">All Stars - Loyal Subscribers</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm">View all</Button>
                </div>
                <div className="space-y-4">
                    {allStars.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10" />
                                <div>
                                    <p className="text-sm font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 text-xs rounded-lg text-white ${user.roleColor}`}>{user.role}</span>
                                <span className="text-xs text-gray-300">🔥 {user.points} Active Strike</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* The Bench */}
            <Card className="p-5 bg-purple-800 text-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">The Bench - Unsubscribed Users</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm">View all</Button>
                </div>
                <div className="space-y-4">
                    {theBench.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10" />
                                <div>
                                    <p className="text-sm font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 text-xs rounded-lg text-white ${user.roleColor}`}>{user.role}</span>
                                <span className="text-xs text-gray-300">🔥 {user.points} Active Strike</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default LeaderBoard;
