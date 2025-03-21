import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Coins, Settings, LogOut, HelpCircle } from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
    { name: "Users", icon: 
        <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path d="M13.75 6.17647C13.75 4.47053 13.05 2.92641 11.92 1.80971C10.7888 0.691765 9.22625 0 7.5 0C5.77375 0 4.21125 0.691765 3.08 1.80971C1.95 2.92641 1.25 4.47053 1.25 6.17647C1.25 7.88241 1.95 9.42653 3.08 10.5432C4.21125 11.6612 5.77375 12.3529 7.5 12.3529C9.22625 12.3529 10.7888 11.6612 11.92 10.5432C12.5013 9.97054 12.9622 9.28989 13.2763 8.54046C13.5904 7.79104 13.7514 6.98763 13.75 6.17647ZM0 18.5294C0 19.7647 2.8125 21 7.5 21C11.8975 21 15 19.7647 15 18.5294C15 16.0588 12.0575 13.5882 7.5 13.5882C2.8125 13.5882 0 16.0588 0 18.5294Z"  />
        </svg>
        , path: "/users" },
    { name: "Ocoins", icon: <Coins />, path: "/ocoins" },
    { name: "Assets", icon: 
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52628 0L19.0526 5.49999V16.5L9.52628 22L0 16.5V5.49999L9.52628 0ZM6.3508 10.2665L6.35085 17.7223L8.46782 18.9446V11.4887L6.3508 10.2665ZM2.11697 7.82212V15.2778L4.23389 16.5001V9.04431L2.11697 7.82212ZM13.6936 4.85041L7.4629 8.46425L9.52628 9.65553L15.7713 6.04998L13.6936 4.85041ZM9.52628 2.44443L3.28126 6.05003L5.34836 7.2434L11.5791 3.62961L9.52628 2.44443Z"  />
        </svg>
        , path: "/assets" },
    { name: "Apps", icon: 
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path d="M19 8.48524V5.64793C19 5.14204 18.7893 4.65688 18.4142 4.29916C18.0391 3.94145 17.5304 3.74049 17 3.74049H11V2.48921C11.305 2.22789 11.5 1.85212 11.5 1.43058C11.5 1.05117 11.342 0.687293 11.0607 0.419007C10.7794 0.150721 10.3978 0 10 0C9.60218 0 9.22064 0.150721 8.93934 0.419007C8.65804 0.687293 8.5 1.05117 8.5 1.43058C8.5 1.85212 8.695 2.22789 9 2.48921V3.74049H3C2.46957 3.74049 1.96086 3.94145 1.58579 4.29916C1.21071 4.65688 1 5.14204 1 5.64793V8.50718L0.928 8.51195C0.675973 8.5293 0.440176 8.637 0.268018 8.8134C0.0958586 8.9898 0.000102245 9.22182 0 9.4628V11.3702C0 11.6232 0.105357 11.8658 0.292893 12.0446C0.48043 12.2235 0.734784 12.324 1 12.324V17.0926C1 17.5984 1.21071 18.0836 1.58579 18.4413C1.96086 18.799 2.46957 19 3 19H17C17.5304 19 18.0391 18.799 18.4142 18.4413C18.7893 18.0836 19 17.5984 19 17.0926V12.324C19.2652 12.324 19.5196 12.2235 19.7071 12.0446C19.8946 11.8658 20 11.6232 20 11.3702V9.52194C20.0117 9.37391 19.9871 9.22533 19.928 9.08799C19.726 8.62258 19.293 8.51099 19 8.48524ZM5 9.4628C5 8.4099 5.672 7.55537 6.5 7.55537C7.328 7.55537 8 8.4099 8 9.4628C8 10.5157 7.328 11.3702 6.5 11.3702C5.672 11.3702 5 10.5157 5 9.4628ZM13.998 15.1851C12.997 15.1823 6 15.1851 6 15.1851V13.2777C6 13.2777 13.001 13.2758 14.002 13.2777L13.998 15.1851ZM13.5 11.3702C12.672 11.3702 12 10.5157 12 9.4628C12 8.4099 12.672 7.55537 13.5 7.55537C14.328 7.55537 15 8.4099 15 9.4628C15 10.5157 14.328 11.3702 13.5 11.3702Z"  />
        </svg>
        , path: "/apps" },
    { name: "Alerts", icon: 
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path d="M9.40859 0C7.45437 0 5.58018 0.776313 4.19833 2.15816C2.81648 3.54001 2.04017 5.41419 2.04017 7.36842V11.0821C2.04032 11.2454 2.00248 11.4065 1.92964 11.5526L0.122277 15.1663C0.0339887 15.3429 -0.00770014 15.539 0.00116978 15.7362C0.0100397 15.9334 0.0691737 16.1251 0.172956 16.293C0.276737 16.4609 0.421721 16.5995 0.594137 16.6956C0.766552 16.7917 0.960674 16.8421 1.15807 16.8421H17.6591C17.8565 16.8421 18.0506 16.7917 18.223 16.6956C18.3955 16.5995 18.5404 16.4609 18.6442 16.293C18.748 16.1251 18.8071 15.9334 18.816 15.7362C18.8249 15.539 18.7832 15.3429 18.6949 15.1663L16.8886 11.5526C16.8154 11.4066 16.7772 11.2455 16.777 11.0821V7.36842C16.777 5.41419 16.0007 3.54001 14.6189 2.15816C13.237 0.776313 11.3628 0 9.40859 0ZM9.40859 20C8.75527 20.0003 8.11793 19.798 7.5844 19.421C7.05087 19.0439 6.64742 18.5107 6.42964 17.8947H12.3875C12.1698 18.5107 11.7663 19.0439 11.2328 19.421C10.6993 19.798 10.0619 20.0003 9.40859 20Z"  />
        </svg>
        , path: "/alerts" },
    { name: "Resources", icon: 
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path d="M17.5477 7.48513L17.2894 8.0794C17.249 8.17617 17.181 8.25883 17.0937 8.31697C17.0064 8.37512 16.9039 8.40614 16.7991 8.40614C16.6942 8.40614 16.5917 8.37512 16.5045 8.31697C16.4172 8.25883 16.3491 8.17617 16.3088 8.0794L16.0505 7.48513C15.5964 6.43385 14.7647 5.59095 13.7196 5.12276L12.9227 4.76683C12.826 4.72235 12.7441 4.65109 12.6867 4.56149C12.6293 4.47188 12.5988 4.3677 12.5988 4.26128C12.5988 4.15486 12.6293 4.05067 12.6867 3.96107C12.7441 3.87147 12.826 3.8002 12.9227 3.75573L13.6755 3.4208C14.7469 2.93927 15.5928 2.0652 16.0389 0.978632L16.3046 0.337117C16.3436 0.237744 16.4116 0.15243 16.4998 0.0922964C16.5881 0.0321631 16.6923 0 16.7991 0C16.9058 0 17.0101 0.0321631 17.0983 0.0922964C17.1866 0.15243 17.2546 0.237744 17.2936 0.337117L17.5593 0.977582C18.0049 2.06435 18.8505 2.93881 19.9216 3.4208L20.6755 3.75678C20.7719 3.80138 20.8535 3.87263 20.9107 3.96212C20.9679 4.05161 20.9983 4.1556 20.9983 4.2618C20.9983 4.36801 20.9679 4.472 20.9107 4.56149C20.8535 4.65097 20.7719 4.72223 20.6755 4.76683L19.8775 5.12171C18.8326 5.59037 18.0014 6.43364 17.5477 7.48513ZM16.7991 10.5006C17.5143 10.5013 18.2244 10.3802 18.899 10.1425V19.9574C18.8987 20.2338 18.7888 20.4989 18.5933 20.6943C18.3978 20.8898 18.1328 20.9997 17.8564 21H1.04259C0.766081 21 0.500893 20.8902 0.305369 20.6946C0.109844 20.4991 0 20.2339 0 19.9574V3.14362C0 2.56825 0.467225 2.10102 1.04259 2.10102H10.8575C10.5215 3.05139 10.4184 4.0685 10.557 5.06695C10.6956 6.06539 11.0717 7.016 11.6538 7.83894C12.236 8.66187 13.0071 9.3331 13.9024 9.79625C14.7977 10.2594 15.7911 10.5009 16.7991 10.5006ZM8.00267 7.78646C7.93948 7.7443 7.86604 7.72007 7.79016 7.71635C7.71429 7.71263 7.63883 7.72955 7.57182 7.76532C7.5048 7.80109 7.44875 7.85436 7.40962 7.91947C7.37048 7.98458 7.34974 8.05908 7.3496 8.13505V14.966C7.34974 15.0419 7.37048 15.1164 7.40962 15.1815C7.44875 15.2467 7.5048 15.2999 7.57182 15.3357C7.63883 15.3715 7.71429 15.3884 7.79016 15.3847C7.86604 15.3809 7.93948 15.3567 8.00267 15.3146L13.1253 11.9001C13.1829 11.8618 13.2302 11.8098 13.2629 11.7488C13.2955 11.6878 13.3126 11.6197 13.3126 11.5505C13.3126 11.4813 13.2955 11.4132 13.2629 11.3522C13.2302 11.2912 13.1829 11.2392 13.1253 11.2009L8.00267 7.78646Z"  />
        </svg>
        , path: "/resources" },
    { name: "Roles", icon: 
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-white">
        <path d="M14.3478 20.087H12.4348C11.9274 20.087 11.4408 19.8854 11.0821 19.5266C10.7233 19.1679 10.5217 18.6813 10.5217 18.1739C10.5217 17.6665 10.7233 17.18 11.0821 16.8212C11.4408 16.4624 11.9274 16.2609 12.4348 16.2609H14.3478V14.3478H12.4348C11.42 14.3478 10.4469 14.7509 9.72933 15.4685C9.0118 16.186 8.6087 17.1592 8.6087 18.1739C8.6087 19.1887 9.0118 20.1618 9.72933 20.8794C10.4469 21.5969 11.42 22 12.4348 22H14.3478V20.087ZM22 18.1739C22 19.1887 21.5969 20.1618 20.8794 20.8794C20.1618 21.5969 19.1887 22 18.1739 22H16.2609V20.087H18.1739C18.6813 20.087 19.1679 19.8854 19.5266 19.5266C19.8854 19.1679 20.087 18.6813 20.087 18.1739C20.087 17.6665 19.8854 17.18 19.5266 16.8212C19.1679 16.4624 18.6813 16.2609 18.1739 16.2609H16.2609V14.3478H18.1739C19.1887 14.3478 20.1618 14.7509 20.8794 15.4685C21.5969 16.186 22 17.1592 22 18.1739Z"  />
        <path d="M13.3913 17.2176H17.2174V19.1306H13.3913V17.2176ZM6.69565 18.1741C6.69757 17.8534 6.72637 17.5335 6.78174 17.2176H2.86957V15.8785C2.86957 13.9654 6.69565 12.9132 8.6087 12.9132C9.04161 12.919 9.47338 12.959 9.9 13.0328C10.6874 12.6403 11.555 12.4357 12.4348 12.435H17.2174V3.82628C17.2159 3.31938 17.0138 2.83366 16.6554 2.47523C16.297 2.11679 15.8113 1.91475 15.3043 1.91324H11.3061C11.1102 1.35409 10.7454 0.869631 10.2622 0.526872C9.77897 0.184114 9.20115 0 8.6087 0C8.01624 0 7.43843 0.184114 6.95518 0.526872C6.47194 0.869631 6.10716 1.35409 5.9113 1.91324H1.91304C1.40614 1.91475 0.920427 2.11679 0.56199 2.47523C0.203552 2.83366 0.00151391 3.31938 0 3.82628V17.2176C0.00151391 17.7245 0.203552 18.2102 0.56199 18.5686C0.920427 18.9271 1.40614 19.1291 1.91304 19.1306H6.78174C6.72637 18.8148 6.69757 18.4948 6.69565 18.1741ZM8.6087 1.91324C8.79788 1.91324 8.98281 1.96934 9.14011 2.07444C9.29741 2.17954 9.42001 2.32893 9.49241 2.50371C9.5648 2.6785 9.58375 2.87082 9.54684 3.05637C9.50993 3.24191 9.41883 3.41235 9.28506 3.54612C9.15129 3.67989 8.98085 3.77099 8.7953 3.8079C8.60976 3.84481 8.41743 3.82587 8.24265 3.75347C8.06787 3.68107 7.91848 3.55847 7.81338 3.40117C7.70827 3.24387 7.65217 3.05894 7.65217 2.86976C7.65293 2.61631 7.75395 2.37345 7.93317 2.19423C8.11239 2.01501 8.35524 1.91399 8.6087 1.91324ZM8.6087 5.73932C9.17624 5.73932 9.73104 5.90762 10.2029 6.22293C10.6748 6.53825 11.0426 6.98641 11.2598 7.51075C11.477 8.0351 11.5338 8.61207 11.4231 9.16871C11.3124 9.72535 11.0391 10.2367 10.6378 10.638C10.2365 11.0393 9.72516 11.3126 9.16852 11.4233C8.61188 11.534 8.03491 11.4772 7.51056 11.26C6.98622 11.0428 6.53805 10.675 6.22274 10.2031C5.90743 9.73124 5.73913 9.17644 5.73913 8.60889C5.73863 8.23191 5.81251 7.85854 5.95654 7.51016C6.10057 7.16178 6.31192 6.84524 6.57848 6.57868C6.84505 6.31211 7.16159 6.10076 7.50996 5.95673C7.85834 5.8127 8.23172 5.73882 8.6087 5.73932Z" fill="white" />
        </svg>
        , path: "/roles" },
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
                        className={`group flex items-center gap-4 text-white px-4 py-3 rounded-full duration-500 transition-all ${location.pathname === item.path ? "bg-gradient-to-r from-[#523c85] to-[#4f5392] border-2 border-white shadow-lg" : "hover:bg-gradient-to-r from-[#523c85] to-[#4f5392]"
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
