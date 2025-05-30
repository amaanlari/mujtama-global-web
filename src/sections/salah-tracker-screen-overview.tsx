function SalahTrackerScreenOverview() {
    return (
        <>
            <div className={"hidden lg:flex"}>
                <div className="w-[1512px] h-[706px] px-[116px] py-[60px] inline-flex justify-start items-center">
                    <div className="w-[590px] inline-flex flex-col justify-start items-center gap-[30px]">
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-4xl font-semibold font-['Montserrat'] leading-[50.40px] tracking-wide">Salah
                                Tracker Screen Overview
                            </div>
                            <div
                                className="self-stretch justify-center text-black text-lg font-normal font-['Montserrat'] leading-[25.20px] tracking-wide">Build
                                a consistent prayer habit by tracking your daily Salah in a simple and organized way.
                                This
                                screen helps you stay accountable with just a few taps.
                            </div>
                        </div>
                        <div className="w-[529px] flex flex-col justify-start items-start gap-3">
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Prayer
                                        Check-in Prompt
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">At
                                        the top, you’ll see a quick question like “Have you prayed Maghrib?” — tap ‘Yes’
                                        to
                                        instantly log your prayer.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Calendar
                                        View
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Scroll
                                        through the calendar to select any date and view or update your prayer history.
                                        It
                                        helps you track your progress over time.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Daily
                                        Salah Checklist
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Each
                                        day shows all five prayers. Tap to mark them as completed and visually track
                                        which
                                        ones you've prayed.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Current
                                        Day Highlight
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">The
                                        current date is highlighted so you always know which day you’re logging for.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="w-[690px]"
                        src="/assets/images/salah-tracker-overview-image.png"
                        alt={"salah tracker overview image"}
                    />
                </div>
            </div>
        </>
    )
}

export default SalahTrackerScreenOverview