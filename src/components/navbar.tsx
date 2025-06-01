import {useState} from "react";

import {Link} from "react-router-dom";

type NavLink = {
    name: string;
    href: string;
};

type NavbarProps = {
    showBottomNav?: boolean; // default false if not provided
};

const navLinks: NavLink[] = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about-us'},
    {name: 'Contact Us', href: '/contact-us'},
];

export default function Navbar({ showBottomNav = false }: NavbarProps) {
    const [activeLink, setActiveLink] = useState<string>(window.location.pathname);

    return (
        <>
            <div
                className="hidden md:flex justify-between items-center bg-[#E2F6FC] drop-shadow-sm drop-shadow-accent-cyan px-28 pt-6 pb-4 rounded-t-2xl">
                <div className="flex justify-center items-center gap-[15px]">
                    <img
                        src='/assets/logo.svg'
                        alt="Mujtama Logo"
                        className="h-10 w-auto"
                    />
                    <span className="text-ForestGreen text-3xl font-bold font-primary text-center">Mujtama</span>
                </div>

                <nav className={"flex items-center font-primary"}>
                    <ul className="flex justify-center gap-x-20 ">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`transition-colors duration-300 ${
                                        activeLink === link.href
                                            ? 'text-ForestGreen font-bold' // Active link color
                                            : 'text-gray-500 hover:text-gray-800 font-medium' // Inactive link color and hover effect
                                    }`}
                                    onClick={() => setActiveLink(link.href)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                <a href={"play-store-link"}>
                    <div
                        className={"flex items-center justify-center py-2 px-3 rounded-2xl border-4 border-[#d6d6d6] bg-black gap-2"}>
                        <div>
                            <img
                                src="/assets/images/google-play-badge.png"
                                alt="Google Play Badge"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={"flex flex-col items-start p-0"}>
                            <span
                                className={"text-[0.5rem] leading-0 text-white uppercase font-bold font-Lato p-0 pt-1"}>Get it on</span>
                            <span className={"text-white font-bold font-Lato p-0"}>Google Play</span>
                        </div>
                    </div>
                </a>
            </div>


            {/*<div*/}
            {/*    className="sm:flex md:hidden fixed top-0 left-0 right-0 z-50">*/}
            {/*    /!* Top Bar *!/*/}
            {/*    <div className="flex justify-between items-center px-4 py-3 bg-[#E2F6FC] shadow-md rounded-b-2xl ">*/}
            {/*        <div className="flex items-center gap-2">*/}
            {/*            <img*/}
            {/*                src="/assets/logo.svg"*/}
            {/*                alt="Mujtama Logo"*/}
            {/*                className="h-8 w-auto"*/}
            {/*            />*/}
            {/*            <span className="text-ForestGreen text-xl font-bold font-primary">Mujtama</span>*/}
            {/*        </div>*/}

            {/*        /!* Menu Toggle Button *!/*/}
            {/*        <button*/}
            {/*            className="text-ForestGreen"*/}
            {/*            onClick={() => setMobileMenuOpen((prev) => !prev)}*/}
            {/*            aria-label="Toggle menu"*/}
            {/*        >*/}
            {/*            {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    /!* Mobile Menu Dropdown *!/*/}
            {/*    {mobileMenuOpen && (*/}
            {/*        <nav className="px-4 pb-4 pt-2">*/}
            {/*            <div className="bg-white rounded-ful drop-shadow-md/35 flex justify-around py-2 rounded-3xl">*/}
            {/*                {navLinks.map((link, index) => (*/}
            {/*                    <Link*/}
            {/*                        key={link.name}*/}
            {/*                        to={link.href}*/}
            {/*                        className={`text-sm font-medium px-4 py-1 rounded-full transition-colors duration-200 ${*/}
            {/*                            index === 0*/}
            {/*                                ? "text-green-900 font-semibold"*/}
            {/*                                : "text-gray-500 hover:text-ForestGreen"*/}
            {/*                        }`}*/}
            {/*                        onClick={() => setMobileMenuOpen(false)} // close menu on link click*/}
            {/*                    >*/}
            {/*                        {link.name}*/}
            {/*                    </Link>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </nav>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/* Bottom Nav (Mobile) */}
            <div className={"w-full flex p-4 items-stretch justify-between bg-[#E2F6FC] drop-shadow-sm drop-shadow-accent-cyan px-8 rounded-t-2xl md:hidden"}>
                <div className={"flex gap-2"}>
                    <img src="/assets/logo.svg" alt="Mujtama Logo" width={25} height={25} />
                    <span className={"text-ForestGreen font-primary font-bold"}>Mujtama</span>
                </div>
                <img
                    src="/assets/images/GP.png"
                    alt="Google Play Badge"
                    width={88}
                    height={25}
                    className={"rounded"}
                />
            </div>

            {showBottomNav && (
                <div className={"px-4 py-1 bg-white lg:hidden"}>
                    <div className={"z-50 flex p-2 px-6 gap-2 rounded-2xl shadow-lg/30 border-t border-gray-400 justify-between items-center"}>
                        <Link
                            to={"/"}
                        >Home</Link>
                        <Link to={"/about-us"}>
                            About Us
                        </Link>
                        <Link to={"/contact-us"}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}