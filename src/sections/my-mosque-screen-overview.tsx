function MyMosqueScreenOverview() {
    return (
        <>
            <div className={"hidden lg:flex"}>
                <div className="w-[1512px] h-[701px] px-[116px] py-[60px] inline-flex justify-start items-center">
                    <img
                        className="w-[678px] h-[481px]"
                        src="/assets/images/my-mosque-screen-overview-image.png"
                    />
                    <div className="w-[602px] h-[481px] inline-flex flex-col justify-start items-center gap-5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                            <div
                                className="self-stretch justify-center text-black text-4xl font-semibold font-['Montserrat'] leading-[50.40px] tracking-wide">My
                                Mosques Screen Overview
                            </div>
                            <div
                                className="self-stretch justify-center text-black text-lg font-normal font-['Montserrat'] leading-[25.20px] tracking-wide">Easily
                                manage and access the mosques you follow for real-time Salah updates, directions, and
                                personalized prayer tracking.
                            </div>
                        </div>
                        <div className="w-[538px] flex flex-col justify-start items-start gap-3">
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Followed
                                        Mosques List
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">This
                                        screen shows all the mosques you’ve chosen to follow, helping you stay connected
                                        to
                                        your preferred locations.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">Mosque
                                        Info Cards
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Each
                                        mosque card displays the name, address, and distance from your current location
                                        for
                                        quick access to relevant details.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch py-2 rounded-[10px] inline-flex justify-start items-center gap-4 overflow-hidden">
                                <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                    <div
                                        className="w-[402px] justify-center text-black text-xl font-semibold font-['Montserrat'] leading-7 tracking-tight">One-Tap
                                        Actions
                                    </div>
                                    <div
                                        className="w-[538px] justify-center text-[#626262] text-base font-normal font-['Montserrat'] leading-snug tracking-wide">Use
                                        the “Following” button to manage your connection or navigate to detailed mosque
                                        pages for prayer timings and directions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyMosqueScreenOverview;