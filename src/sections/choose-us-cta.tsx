function ChooseUsCta() {
    return (
        <>
            <div className={"hidden lg:flex"}>
                <div className="w-[1512px] px-[116px] py-[88px] inline-flex justify-between items-center">
                    <img
                        className="w-[592.16px] h-[597.02px] rounded-tl-[297.50px] rounded-tr-[297.50px] rounded-bl-[315.50px] rounded-br-[315.50px] shadow-[0px_20px_32px_0px_rgba(183,233,246,0.64)] shadow-[0px_2px_8px_0px_rgba(183,233,246,1.00)]"
                        src="/assets/images/chose-us-cta-image.png"
                        alt={"Choose Us CTA Image"}
                    />
                    <div
                        className="w-[586px] h-[453px] px-6 py-5 rounded-[10px] flex justify-start items-center gap-4 overflow-hidden">
                        <div className="h-[323px] inline-flex flex-col justify-start items-start gap-10">
                            <div
                                className="w-[413px] justify-center text-black text-4xl font-semibold font-['Montserrat'] leading-[50.40px] tracking-tight">Why
                                Choose Us
                            </div>
                            <div
                                className="w-[538px] h-[223px] justify-end text-[#626262] text-xl font-medium font-['Montserrat'] leading-7 tracking-wide">At
                                the heart of Mujtama is a vision to bridge tradition with innovation. Our team is
                                dedicated
                                to
                                integrating modern technology and AI to enhance the way Muslims around the world engage
                                with
                                their faith. From smarter mosque connectivity to intelligent spiritual tools, we aim to
                                build a
                                digital ecosystem that empowers individuals and strengthens communities—now and for the
                                future.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden font-primary">
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"text-xl font-semibold text-ForestGreen"}>
                        Why Choose Us
                    </div>
                    <div className={"text-center text-ForestGreen text-sm px-8 pb-6"}>
                        At the heart of Mujtama is a vision to bridge tradition with innovation. Our team is dedicated
                        to integrating modern technology and AI to enhance the way Muslims around the world engage with
                        their faith. From smarter mosque connectivity to intelligent spiritual tools, we aim to build a
                        digital ecosystem that empowers individuals and strengthens communities—now and for the future.
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUsCta;