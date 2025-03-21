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
        <aside className="h-screen p-4 w-64 flex flex-col">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
                <img src="/logo.svg" alt="Logo" className="w-14 h-14 rounded-full border border-purple-500 p-1" />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-3">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={"/"}
                        className={`flex items-center gap-4 text-white px-4 py-3 rounded-lg transition ${location.pathname === item.path ? "bg-purple-700 border border-purple-500 shadow-md" : "hover:bg-purple-800"
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
                        className="flex items-center gap-4 text-white px-4 py-3 rounded-lg transition hover:bg-purple-800"
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
