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
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Explorer", avatar: "/avatars/user4.jpg", roleColor: "bg-[#61D2FF]" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Creator", avatar: "/avatars/user5.jpg", roleColor: "bg-[#FFE175]" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Designer", avatar: "/avatars/user6.png", roleColor: "bg-[#00FFF0]" },
    { name: "@MikeReyes", date: "12.10.2024", points: 7500, role: "Visionary", avatar: "/avatars/user7.jpg", roleColor: "bg-[#FAADFF]" },
];

const theBench: User[] = [...allStars];

const LeaderBoard = () => {
    return (
        <div className="grid grid-cols-3 gap-6 pb-6">
            {/* Hall of Famers */}
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Hall of famers - Top Remixers</h3>
                    <a href="#" className="view-all bg-black/10 px-3 py-1 rounded-full text-sm font-bold">View all</a>
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
                            <div className="flex items-end flex-col">
                                <div className="text-white text-base font-bold">
                                    <div className="flex items-center"><img src="/images/coin.png" /> {user.points}</div>
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
                    <h3 className="text-xl font-bold">All Stars - Loyal Subscribers</h3>
                    <a href="#" className="view-all bg-black/10 px-3 py-1 rounded-full text-sm font-bold">View all</a>
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
                            <div className="flex items-center gap-4">
                                <span className={`px-2.5 py-1 text-sm font-bold rounded-full text-black ${user.roleColor}`}>{user.role}</span>
                                <div className="flex items-end flex-col">
                                <div className="text-white text-base font-bold">
                                <div className="flex items-center gap-1.5"><img src="/images/fire.png" /> {user.points}</div>
                                </div>
                                <span className="text-gray-400 text-sm"> Active Strike</span>
                            </div>
                              
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* The Bench */}
            <Card className="p-6 bg-purple-800 text-white rounded-3xl border-0 card-three">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">The Bench - Unsubscribed Users</h3>
                    <a href="#" className="view-all bg-black/10 px-3 py-1 rounded-full text-sm font-bold">View all</a>
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
                            <div className="flex items-center gap-4">
                                <span className={`px-2.5 py-1 text-sm font-bold rounded-full text-black ${user.roleColor}`}>{user.role}</span>
                                
                                <div className="flex items-end flex-col">
                                <div className="text-white text-base font-bold">
                                <div className="flex items-center gap-1.5"><img src="/images/fire.png" /> {user.points}</div>
                                </div>
                                <span className="text-gray-400 text-sm"> Active Strike</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default LeaderBoard;
