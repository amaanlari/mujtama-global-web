function Footer() {
    return (
        <div className={"lg:hidden"}>
            <div
                className="w-[393px] h-[100px] bg-[#06402b] inline-flex justify-center items-center flex-wrap content-center">
                <div className="size- p-2.5 flex justify-start items-center gap-[17px]">
                    <div
                        className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Privacy
                        Policy
                    </div>
                    <div
                        className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Terms
                        & Conditions
                    </div>
                    <div
                        className="text-center justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Contact
                        Us
                    </div>
                </div>
                <div className="size- p-2.5 flex justify-end items-end gap-2.5">
                    <div
                        className="text-right justify-end text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">©
                        2025 Mujtamaglobal.tech
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;