function downloadSection() {
    return (
        <div>
            <div>
                <div>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div
                            className={"flex flex-col w-full items-center justify-center font-primary text-ForestGreen"}>
                            <h1 className={"lg:text-5xl text-xl font-semibold"}>Faith meets convenience</h1>
                            <span className={"lg:text-xl text-sm md:px-0 px-2 py-2 text-center"}>
                                Stay connected to your faith wherever you are, whenever you need
                            </span>
                        </div>
                        <div className={"lg:py-12 py-4"}>
                            <img
                                src={"/assets/images/google-play-btn.png"}
                                className={"w-40"}
                                alt={"Google Play"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default downloadSection;