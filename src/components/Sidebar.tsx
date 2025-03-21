import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Coins, Box, AppWindow, Bell, Settings, LogOut, HelpCircle, Star, AlertTriangle } from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
    { name: "Users", icon: <Users />, path: "/users" },
    { name: "Ocoins", icon: <Coins />, path: "/ocoins" },
    { name: "Assets", icon: <Box />, path: "/assets" },
    { name: "Apps", icon: <AppWindow />, path: "/apps" },
    { name: "Alerts", icon: <Bell />, path: "/alerts" },
    { name: "Resources", icon: <Star />, path: "/resources" },
    { name: "Roles", icon: <AlertTriangle />, path: "/roles" },
];

const bottomMenu = [
    { name: "Help", icon: <HelpCircle />, path: "/help" },
    { name: "Setting", icon: <Settings />, path: "/settings" },
    { name: "Logout", icon: <LogOut />, path: "/logout" },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="h-screen p-8 w-64 flex flex-col">
            {/* Logo */}
            <div className="flex items-start justify-start mb-8">
                <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-full border border-purple-500 p-1" />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-3">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={"/"}
                        className={`flex items-center gap-4 text-white px-4 py-3 rounded-full duration-500 transition-all ${location.pathname === item.path ? "bg-gradient-to-r from-[#523c85] to-[#4f5392] border-2 border-white shadow-lg" : "hover:bg-gradient-to-r from-[#523c85] to-[#4f5392]"
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Bottom Menu */}
            <div className="mt-auto flex flex-col gap-3">
                {bottomMenu.map((item, index) => (
                    <Link
                        key={index}
                        to={"/"}
                        className="flex items-center gap-4 text-white px-4 py-3 rounded-full transition hover:bg-gradient-to-r from-[#523c85] to-[#4f5392]"
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
