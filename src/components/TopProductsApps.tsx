import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Eye, Download, Layers } from "lucide-react";

interface Product {
    image: string;
    name: string;
    date: string;
    remixed: number;
    downloads: number;
    views: number;
}

interface App {
    icon: string;
    name: string;
    date: string;
    timeUsed: number;
}

const products: Product[] = [
    { image: "/products/product1.png", name: "Product Name", date: "12.10.2024", remixed: 675, downloads: 5670, views: 9860 },
    { image: "/products/product2.png", name: "Product Name", date: "12.10.2024", remixed: 675, downloads: 5670, views: 9860 },
    { image: "/products/product3.png", name: "Product Name", date: "12.10.2024", remixed: 675, downloads: 5670, views: 9860 },
];

const apps: App[] = [
    { icon: "/icons/app-icon.png", name: "App Name", date: "12.10.2024", timeUsed: 4500 },
    { icon: "/icons/app-icon.png", name: "App Name", date: "12.10.2024", timeUsed: 4500 },
    { icon: "/icons/app-icon.png", name: "App Name", date: "12.10.2024", timeUsed: 4500 },
    { icon: "/icons/app-icon.png", name: "App Name", date: "12.10.2024", timeUsed: 4500 },
    { icon: "/icons/app-icon.png", name: "App Name", date: "12.10.2024", timeUsed: 4500 },
];

const TopProductsApps = () => {
    return (
        <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Most Remixed Products */}
            <Card className="p-4 bg-purple-800 text-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Most Remixed Products</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm">View all</Button>
                </div>
                <div className="space-y-4">
                    {products.map((product, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <Avatar className="w-14 h-14 rounded-xl" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">{product.name}</p>
                                <p className="text-xs text-gray-400">{product.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-xs text-gray-300">
                                    <Layers size={14} /> {product.remixed}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-300">
                                    <Download size={14} /> {product.downloads}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-300">
                                    <Eye size={14} /> {product.views}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Top Used Apps */}
            <Card className="p-4 bg-purple-800 text-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Top Used Apps</h3>
                    <Button variant="ghost" className="text-gray-400 hover:text-white text-sm">View all</Button>
                </div>
                <div className="space-y-4">
                    {apps.map((app, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar className="w-10 h-10 rounded-full border-2 border-blue-400" />
                                <div>
                                    <p className="text-sm font-medium">{app.name}</p>
                                    <p className="text-xs text-gray-400">{app.date}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300">{app.timeUsed} hrs</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default TopProductsApps;
