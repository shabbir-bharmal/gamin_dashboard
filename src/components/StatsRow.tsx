import { Card } from "../components/ui/card";
import { JSX } from "react";

interface Stat {
    label: string;
    value: string;
    icon: JSX.Element;
}

const stats: Stat[] = [
    {
        label: "Online Users", value: "6522", icon:
            <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6368 8.86062C18.6368 6.63548 17.7345 4.62141 16.278 3.16484C14.8198 1.70665 12.8057 0.804352 10.5806 0.804352C8.35543 0.804352 6.34137 1.70665 4.88318 3.16484C3.42661 4.62141 2.52431 6.63548 2.52431 8.86062C2.52431 11.0858 3.42661 13.0998 4.88318 14.5564C6.34137 16.0146 8.35543 16.9169 10.5806 16.9169C12.8057 16.9169 14.8198 16.0146 16.278 14.5564C17.0273 13.8094 17.6214 12.9216 18.0262 11.9441C18.4311 10.9666 18.6386 9.91864 18.6368 8.86062ZM0.913055 24.9731C0.913055 26.5844 4.53837 28.1957 10.5806 28.1957C16.249 28.1957 20.2481 26.5844 20.2481 24.9731C20.2481 21.7506 16.4552 18.5281 10.5806 18.5281C4.53837 18.5281 0.913055 21.7506 0.913055 24.9731Z" fill="white" />
            </svg>
    },
    {
        label: "New Signups", value: "685", icon:
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4594 0.17392C6.10431 0.17392 0.859489 4.97699 0.173828 11.1318H9.71124V7.02312L16.5816 12.5014L9.71124 17.9796V13.8709H0.175202C0.862237 20.0244 6.10568 24.8261 12.4594 24.8261C19.2789 24.8261 24.826 19.2972 24.826 12.5C24.826 5.70285 19.2789 0.17392 12.4594 0.17392Z" fill="white" />
            </svg>
    },
    {
        label: "New Subscribers", value: "474", icon:
            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0013 0.91304H4.02573C3.00414 0.91304 2.0244 1.31886 1.30202 2.04124C0.579652 2.76361 0.173828 3.74335 0.173828 4.76494V17.6046C0.173828 18.6262 0.579652 19.606 1.30202 20.3283C2.0244 21.0507 3.00414 21.4565 4.02573 21.4565H22.0013C23.0229 21.4565 24.0026 21.0507 24.725 20.3283C25.4474 19.606 25.8532 18.6262 25.8532 17.6046V4.76494C25.8532 3.74335 25.4474 2.76361 24.725 2.04124C24.0026 1.31886 23.0229 0.91304 22.0013 0.91304ZM22.0013 3.48097L13.6555 9.22031C13.4603 9.333 13.2389 9.39233 13.0135 9.39233C12.7881 9.39233 12.5667 9.333 12.3715 9.22031L4.02573 3.48097H22.0013Z" fill="white" />
            </svg>
    },
    {
        label: "Unsubscribes", value: "8", icon:
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62999 9.2126L12.4546 15.353L22.2793 9.2126L12.4546 3.07219L2.62999 9.2126ZM24.7355 9.2126V21.4934C24.7355 22.1448 24.4767 22.7696 24.0161 23.2302C23.5554 23.6908 22.9307 23.9496 22.2793 23.9496H2.62999C1.97858 23.9496 1.35384 23.6908 0.893221 23.2302C0.432602 22.7696 0.173828 22.1448 0.173828 21.4934V9.2126C0.173828 8.3161 0.65278 7.54241 1.36507 7.11258L12.4546 0.17392L23.5442 7.11258C24.2565 7.54241 24.7355 8.3161 24.7355 9.2126Z" fill="white" />
            </svg>
    },
];

const StatsRow = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => (
                <Card
                    key={i}
                    className="p-6 bg-gradient-to-b from-purple-800 to-gray-900 text-white rounded-3xl border-0 cards-4">
                    <div className="flex gap-10">
                        {/* Left Icon */}
                        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-[#e50ed6]/50 bg-transparent">
                            {stat.icon}
                        </div>

                        {/* Stat Info */}
                        <div className="text-left">
                            <h3 className="text-[26px] font-bold">{stat.value}</h3>
                            <p className="text-base text-gray-300">{stat.label}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default StatsRow;
