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
            <Card className="p-6 text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Most Remixed Products</h3>
                    <a href="#" className="view-all bg-black/10 px-3 py-1 rounded-full text-sm font-bold">View all</a>
                </div>
                <div className="space-y-4">
                    {products.map((product, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <img className="w-[100px] h-[115px] rounded-[20px]" src={product.image} />
                            <div className="flex-1">
                                <p className="text-base font-bold">{product.name}</p>
                                <p className="text-sm text-gray-400">{product.date}</p>
                            </div>
                            <div className="flex items-start gap-8">
                                 <div className="flex items-start gap-2">
                                 <img className="relative top-0.5" src="/images/time.png" />
                                <span className="flex items-start flex-col">
                                <div className="text-base font-bold">{product.remixed}</div>
                                 <div className="text-sm text-gray-400">Time Remixed</div>
                                </span>
                                </div>

                                <div className="flex items-start gap-2">
                                <img className="relative top-0.5" src="/images/download.png" />
                                <span className="flex items-start flex-col">
                                <div className="text-base font-bold">{product.downloads}</div>
                                 <div className="text-sm text-gray-400">Download</div>
                                </span>
                                </div>

                                <div className="flex items-start gap-2">
                                <img className="relative top-1.5" src="/images/views.png" />
                                <span className="flex items-start flex-col">
                                <div className="text-base font-bold">{product.views}</div>
                                 <div className="text-sm text-gray-400">Views</div>
                                </span>
                                </div>

                                
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Top Used Apps */}
            <Card className="p-6  text-white rounded-3xl border-0 card-one">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Top Used Apps</h3>
                    <a href="#" className="view-all bg-black/10 px-3 py-1 rounded-full text-sm font-bold">View all</a>
                </div>
                <div className="space-y-4">
                    {apps.map((app, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-black/20 rounded-full flex items-center justify-center overflow-hidden user-block">
                            <Avatar className="w-[30px] h-[30px] rounded-full bg-[#F58F55]" />
                                </div>
                               

                                <div>
                                    <p className="text-base font-bold">{app.name}</p>
                                    <p className="text-sm text-gray-400">{app.date}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <img className="relative top-0.5" src="/images/time-used.png" />
                                <span className="flex items-start flex-col">
                                <div className="text-base font-bold">{app.timeUsed}</div>
                                 <div className="text-sm text-gray-400">Time Used</div>
                                </span>
                                </div>
                            
                           
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default TopProductsApps;
