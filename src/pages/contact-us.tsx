import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

function ContactUsPage() {
    return (
        <>
            <header className={"sticky top-0 left-0 z-50"}>
                <Navbar showBottomNav={true}/>
            </header>
            <div className={"hidden lg:block"}>
                <div className="w-full px-[116px] py-[38px] inline-flex justify-between items-center font-primary">
                    <div className="w-full inline-flex flex-col justify-start items-start gap-4">
                        <div
                            className="self-stretch justify-center text-[#626262] text-[56px] font-bold font-['Montserrat'] leading-[69.72px]">Contact
                            Us
                        </div>
                        <div
                            className="w-full opacity-80 justify-start text-[#626262] text-base font-medium font-['Montserrat'] leading-[27px] tracking-tight">Email
                            or complete the form to learn how Mujtama <p className={"block"}> can solve your messaging
                                problem</p>
                        </div>
                        <div
                            className="self-stretch opacity-80 justify-start text-[#626262] text-base font-medium font-['Montserrat'] leading-[27px] tracking-tight">Mujtamaglobal@gmail.com
                        </div>
                    </div>
                    <div
                        className="w-1/2 h-fit px-12 py-6 border-t border-gray-200 bg-white rounded-3xl shadow-[0px_2px_8px_0px_rgba(40,41,61,0.02)] shadow-[0px_16px_24px_0px_rgba(96,97,112,0.12)] inline-flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div
                                className="self-stretch justify-center text-black text-[40px] font-bold font-['Montserrat'] leading-[49.80px]">Get
                                in Touch
                            </div>
                            <div
                                className="self-stretch opacity-80 justify-start text-black text-base font-medium font-['Montserrat'] leading-[27px] tracking-tight">You
                                can reach us anytime
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center">
                            <div
                                className="w-1/2 px-5 py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                                <div
                                    className="opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">First
                                    name
                                </div>
                            </div>
                            <div
                                className="w-[185px] h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                                <div
                                    className="opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">Last
                                    name
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex flex-col justify-start items-start gap-2.5">
                            <div className="size- inline-flex justify-start items-center gap-2.5">
                                <div className="w-[21px] h-[19px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"
                                         fill="none">
                                        <path
                                            d="M10 9L2 4V14H11V16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V9H18V4L10 9ZM10 7L18 2H2L10 7ZM17 19L15.6 17.6L17.175 16H13V14H17.175L15.575 12.4L17 11L21 15L17 19ZM2 4V15V9V9.075V2V4Z"
                                            fill="#636363"/>
                                    </svg>
                                </div>
                                <div
                                    className="w-[180px] opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">Your
                                    email
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] inline-flex justify-start items-center gap-2.5">
                            <div
                                className="opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">Phone
                                number
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[155px] p-[15px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] inline-flex justify-start items-start gap-2.5">
                            <div
                                className="opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">How
                                can we help?
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[132px] py-[11px] bg-[#06402b] rounded-[30px] inline-flex justify-center items-center gap-2.5">
                            <div
                                className="opacity-80 text-center justify-start text-white text-base font-bold font-['Montserrat'] leading-[27px] tracking-tight">Submit
                            </div>
                        </div>
                        <div className="size- px-2.5 inline-flex justify-center items-center gap-2.5">
                            <div className="w-[309px] opacity-80 text-center justify-start"><span
                                className="text-[#626262] text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">By contacting us, you agree to our </span><span
                                className="text-[#06402b] text-sm font-bold font-['Montserrat'] leading-[27px] tracking-tight">Terms of service</span><span
                                className="text-[#626262] text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight"> and </span><span
                                className="text-[#06402b] text-sm font-bold font-['Montserrat'] leading-[27px] tracking-tight">Privacy Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
            <div className={"lg:hidden"}>
                <div className="w-[393px] px-[25px] py-5 inline-flex flex-col justify-start items-center gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-[17px]">
                        <div
                            className="self-stretch justify-center text-black text-xl font-bold font-['Montserrat'] leading-[24.90px]">Contact
                            Us
                        </div>
                        <div
                            className="self-stretch opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">Email
                            or complete the form to learn how Mutama can solve your messaging problem
                        </div>
                        <div
                            className="self-stretch opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">Mujtamaglobal@gmail.com
                        </div>
                    </div>
                    <div
                        className="w-[343px] p-[30px] bg-white rounded-[30px] shadow-[0px_2px_8px_0px_rgba(40,41,61,0.02)] shadow-[0px_16px_24px_0px_rgba(96,97,112,0.12)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div
                                className="self-stretch justify-center text-black text-lg font-bold font-['Montserrat'] leading-snug">Get
                                in Touch
                            </div>
                            <div
                                className="self-stretch opacity-80 justify-start text-black text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">You
                                can reach us anytime
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
                            <div
                                className="w-[283px] h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                                <div
                                    className="opacity-80 justify-start text-[#626262] text-xs font-medium font-['Montserrat'] leading-[27px] tracking-tight">First
                                    name
                                </div>
                            </div>
                            <div
                                className="w-[283px] h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                                <div
                                    className="opacity-80 justify-start text-[#626262] text-xs font-medium font-['Montserrat'] leading-[27px] tracking-tight">Last
                                    name
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex flex-col justify-start items-start gap-2.5">
                            <div className="size- inline-flex justify-start items-center gap-2.5">
                                <div className="w-[21px] h-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"
                                         fill="none">
                                        <path
                                            d="M10 9L2 4V14H11V16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V9H18V4L10 9ZM10 7L18 2H2L10 7ZM17 19L15.6 17.6L17.175 16H13V14H17.175L15.575 12.4L17 11L21 15L17 19ZM2 4V15V9V9.075V2V4Z"
                                            fill="#636363"/>
                                    </svg>
                                </div>
                                <div
                                    className="w-[180px] opacity-80 justify-start text-[#626262] text-xs font-medium font-['Montserrat'] leading-[27px] tracking-tight">Your
                                    email
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[15px] py-[11px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] inline-flex justify-start items-center gap-2.5">
                            <div
                                className="opacity-80 justify-start text-[#626262] text-xs font-medium font-['Montserrat'] leading-[27px] tracking-tight">Phone
                                number
                            </div>
                        </div>
                        <div
                            className="self-stretch h-20 p-[15px] rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#d6d6d6] inline-flex justify-start items-start gap-2.5">
                            <div
                                className="opacity-80 justify-start text-[#626262] text-xs font-medium font-['Montserrat'] leading-[27px] tracking-tight">How
                                can we help?
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[50px] px-[132px] py-[11px] bg-[#06402b] rounded-[30px] inline-flex justify-center items-center gap-2.5">
                            <div
                                className="opacity-80 text-center justify-start text-white text-base font-bold font-['Montserrat'] leading-[27px] tracking-tight">Submit
                            </div>
                        </div>
                        <div className="size- px-2.5 inline-flex justify-center items-center gap-2.5">
                            <div className="w-[309px] opacity-80 text-center justify-start"><span
                                className="text-[#626262] text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight">By contacting us, you agree to our </span><span
                                className="text-[#06402b] text-sm font-bold font-['Montserrat'] leading-[27px] tracking-tight">Terms of service</span><span
                                className="text-[#626262] text-sm font-medium font-['Montserrat'] leading-[27px] tracking-tight"> and </span><span
                                className="text-[#06402b] text-sm font-bold font-['Montserrat'] leading-[27px] tracking-tight">Privacy Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[393px] px-[25px] py-2.5 inline-flex flex-col justify-start items-center gap-[25px]">
                    <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                        <div
                            className="self-stretch text-center justify-center text-[#06402b] text-xl font-semibold font-['Montserrat'] leading-7">Faith
                            meets convenience
                        </div>
                        <div
                            className="self-stretch opacity-80 text-center justify-center text-[#06402b] text-sm font-medium font-['Montserrat'] leading-tight tracking-wide">Stay
                            connected to your faith wherever you are, whenever you need
                        </div>
                    </div>
                    <div className="w-[179px] h-[45px] px-2.5 flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch h-[45px] rounded-lg"/>
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )
}

export default ContactUsPage;