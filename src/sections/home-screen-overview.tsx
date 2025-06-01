function HomeScreenOverview() {
    return (
        <>
            <div className={"hidden lg:flex"}>
                <div className="w-[1512px] h-[681px] px-[116px] py-[60px] inline-flex justify-start items-center">
                    <div className="w-[590px] inline-flex flex-col justify-center items-center gap-[30px]">
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-4xl font-semibold font-['Montserrat'] leading-[50.40px] tracking-wide">Home
                                Screen Overview
                            </div>
                            <div
                                className="self-stretch justify-center text-black text-lg font-normal font-['Montserrat'] leading-[25.20px] tracking-wide">Welcome
                                to your personalized Islamic dashboard. Here’s what you’ll find
                            </div>
                        </div>
                        <div className="w-[538px] flex flex-col justify-start items-start gap-3">
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-medium font-['Montserrat'] leading-7 tracking-tight">Nearest
                                        Mosque & Salah Times
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Instantly
                                        view your closest mosque with real-time prayer timings. Follow your favorite
                                        masjid
                                        to stay updated on upcoming prayers.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-medium font-['Montserrat'] leading-7 tracking-tight">Islamic
                                        Tools at Your Fingertips
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Access
                                        core features like Quran, Duas, Hadith, Qibla direction, and a Zakat calculator
                                        —
                                        all from one place.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-medium font-['Montserrat'] leading-7 tracking-tight">Stories
                                        Section
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">A
                                        quick access carousel for engaging features like Salah Tracker, Fast Tracker,
                                        and
                                        more (visually highlighted for ease).
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-medium font-['Montserrat'] leading-7 tracking-tight">Nearby
                                        Mosques
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Explore
                                        and follow other nearby mosques with just a tap, including distance indicators
                                        for
                                        easy navigation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="w-[690px] h-[561px]"
                        src="/assets/images/home-screen-overview-image.png"
                        alt={"home-screen-overview-image"}
                    />
                </div>
            </div>

            <div className={"lg:hidden"}>
                <div
                    className="px-4 py-8 inline-flex flex-col justify-center items-center">
                    <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div
                            className="self-stretch justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-wide">Home
                            Screen Overview
                        </div>
                        <div
                            className="self-stretch justify-center text-black text-sm font-normal font-['Montserrat'] leading-tight tracking-wide">Welcome
                            to your personalized Islamic dashboard. Here’s what you’ll find
                        </div>
                    </div>
                    <div className="self-stretch h-[fit]">
                        <img
                            src="/assets/images/home-screen-overview-image.png"
                        />
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-base font-medium font-['Montserrat'] leading-snug tracking-tight">Nearest
                                Mosque & Salah Times
                            </div>
                            <div
                                className="self-stretch justify-center text-[#626262] text-sm font-normal font-['Montserrat'] leading-tight tracking-wide">Instantly
                                view your closest mosque with real-time prayer timings. Follow your favorite masjid to
                                stay updated on upcoming prayers.
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-base font-medium font-['Montserrat'] leading-snug tracking-tight">Islamic
                                Tools at Your Fingertips
                            </div>
                            <div
                                className="self-stretch justify-center text-[#626262] text-sm font-normal font-['Montserrat'] leading-tight tracking-wide">Access
                                core features like Quran, Duas, Hadith, Qibla direction, and a Zakat calculator — all
                                from one place.
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-base font-medium font-['Montserrat'] leading-snug tracking-tight">Stories
                                Section
                            </div>
                            <div
                                className="self-stretch justify-center text-[#626262] text-sm font-normal font-['Montserrat'] leading-tight tracking-wide">A
                                quick access carousel for engaging features like Salah Tracker, Fast Tracker, and more
                                (visually highlighted for ease).
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-base font-medium font-['Montserrat'] leading-snug tracking-tight">Nearby
                                Mosques
                            </div>
                            <div
                                className="self-stretch justify-center text-[#626262] text-sm font-normal font-['Montserrat'] leading-tight tracking-wide">Explore
                                and follow other nearby mosques with just a tap, including distance indicators for easy
                                navigation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreenOverview