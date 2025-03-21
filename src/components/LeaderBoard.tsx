import { Card } from "../components/ui/card";
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
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user1.jpg" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user2.jpg" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user3.jpg" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, avatar: "/avatars/user1.jpg" },
];

const allStars: User[] = [
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Explorer", avatar: "/avatars/user4.jpg", roleColor: "bg-blue-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Creator", avatar: "/avatars/user5.jpg", roleColor: "bg-yellow-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Designer", avatar: "/avatars/user6.png", roleColor: "bg-cyan-400" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Visionary", avatar: "/avatars/user7.jpg", roleColor: "bg-pink-400" },
];

const theBench: User[] = [...allStars];

const LeaderBoard = () => {
    return (
        <div className="grid grid-cols-3 gap-6 pb-6">
            {/* Hall of Famers */}
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Hall of famers - Top Remixers</h3>
                    <Button variant="ghost" className="">View all</Button>
                </div>
                <div className="space-y-4">
                    {hallOfFamers.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-black/20 rounded-full flex items-center justify-center overflow-hidden user-block">
                                    <img className="w-8 h-8 rounded-full" src={user.avatar} />
                                </div>
                                <div>
                                    <p className="text-base font-bold">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.date}</p>
                                </div>
                            </div>
                            <div className="flex items-end flex-col gap-1 text-yellow-400">
                                <div className="text-white text-base font-bold">
                                    <div className="flex items-center"><img src="http://localhost:5173/images/coin.png" /> {user.points}</div>
                                </div>
                                <span className="text-gray-400 text-sm">Spent</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* All Stars */}
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-two">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">All Stars - Loyal Subscribers</h3>
                    <Button variant="ghost" className="">View all</Button>
                </div>
                <div className="space-y-4">
                    {allStars.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-black/20 rounded-full flex items-center justify-center overflow-hidden user-block">
                                    <img className="w-8 h-8 rounded-full" src={user.avatar} />
                                </div>
                                <div>
                                    <p className="text-base font-bold">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.date}</p>
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
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-three">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">The Bench - Unsubscribed Users</h3>
                    <Button variant="ghost" className="">View all</Button>
                </div>
                <div className="space-y-4">
                    {theBench.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-black/20 rounded-full flex items-center justify-center overflow-hidden user-block">
                                    <img className="w-8 h-8 rounded-full" src={user.avatar} />
                                </div>
                                <div>
                                    <p className="text-base font-bold">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.date}</p>
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
