function downloadSection() {
    return (

        <div>
            <div className={"flex flex-col items-center justify-center"}>
                <div
                    className={"flex flex-col w-full items-center justify-center font-primary text-ForestGreen"}>
                    <h1 className={"lg:text-5xl text-xl font-semibold"}>Faith meets convenience</h1>
                    <span className={"lg:text-xl text-sm md:px-0 px-2 py-2 text-center"}>
                                Stay connected to your faith wherever you are, whenever you need
                            </span>
                </div>
                <div className={"lg:py-12 py-4 lg:pt-2"}>
                    <a href={"https://play.google.com/store/apps/details?id=com.mujtamaglobal.app"}>
                        <img
                            src="/assets/images/GetItOnGooglePlay_Badge_Web_color.png"
                            alt="Get it on Google Play"
                            width={230}
                            height={80}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default downloadSection;