import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className={"lg:hidden"}>
                <div
                    className="w-full h-fit bg-[#06402b] inline-flex justify-center items-center flex-wrap content-center">
                    <div className="size- p-2.5 flex justify-start items-center gap-[17px]">
                        <Link
                            to={"/privacy-policy"}
                            className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">
                            Privacy Policy
                        </Link>
                        <Link
                            to={"/terms-and-conditions"}
                            className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">
                            Terms & Conditions
                        </Link>
                        <Link
                            to={"/contact-us"}
                            className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">
                            Contact Us
                        </Link>
                    </div>
                    <div className="size- p-2.5 flex justify-end items-end gap-2.5">
                        <div
                            className="text-right justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">©
                            2025 Mujtamaglobal.tech
                        </div>
                    </div>
                </div>
            </div>
            <div className={"hidden lg:flex"}>
                <div
                    className="px-20 py-8 pb-16  bg-[#06402b] inline-flex justify-center items-center gap-[454px]">
                    <div className="size- p-2.5 flex justify-start items-center gap-[50px]">
                        <Link
                            to={"/privacy-policy"}
                            className="text-center justify-end text-white text-xl font-medium font-['Montserrat'] leading-7 tracking-wide">Privacy
                            Policy
                        </Link>
                        <Link
                            to={"/terms-and-conditions"}
                            className="text-center justify-end text-white text-xl font-medium font-['Montserrat'] leading-7 tracking-wide">Terms
                            & Conditions
                        </Link>
                        <Link
                            to={"/contact-us"}
                            className="text-center justify-end text-white text-xl font-medium font-['Montserrat'] leading-7 tracking-wide">Contact
                            Us
                        </Link>
                    </div>
                    <div className="size- p-2.5 flex justify-end items-end gap-2.5">
                        <div
                            className="text-right justify-end text-white text-xl font-medium font-['Montserrat'] leading-7 tracking-wide">©
                            2025 Mujtamaglobal.tech
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;