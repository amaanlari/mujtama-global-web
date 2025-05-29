function MasjidDetailScreenOverview(){
    return (
        <div>
            <div className="w-[1512px] h-[661px] px-[116px] py-[60px] inline-flex justify-start items-center">
                <img
                    className="w-[690px] h-[541px]"
                    src="/assets/images/masjid-detail-screen-overview-image.png"
                    alt={"masjid detail screen overview"}
                />
                <div className="w-[590px] inline-flex flex-col justify-start items-center gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div
                            className="self-stretch justify-center text-black text-4xl font-semibold font-['Montserrat'] leading-[50.40px] tracking-wide">Masjid
                            Detail Screen Overview
                        </div>
                        <div
                            className="self-stretch justify-center text-black text-lg font-normal font-['Montserrat'] leading-[25.20px] tracking-wide">Stay
                            connected to your local mosque with all the essential details in one place. This screen
                            helps you track prayer times, find directions, and manage your mosque preferences with ease.
                        </div>
                    </div>
                    <div className="w-[538px] flex flex-col justify-start items-start gap-3">
                        <div
                            className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                            <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                <div
                                    className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Live
                                    Prayer Countdown
                                </div>
                                <div
                                    className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">At
                                    the top, see how much time is left until the next prayer. This real-time countdown
                                    helps you stay on track throughout the day.
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                            <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                <div
                                    className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Masjid
                                    Information
                                </div>
                                <div
                                    className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Get
                                    full details of the mosque including name, address, and distance from your current
                                    location. Tap “Direction” to navigate or “Following” to keep it in your favorites.
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                            <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                <div
                                    className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Daily
                                    Prayer Timings
                                </div>
                                <div
                                    className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Check
                                    all five daily prayer times along with Jummah. The currently active or next prayer
                                    is clearly highlighted for quick reference.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasjidDetailScreenOverview;