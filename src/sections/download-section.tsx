function downloadSection() {
    return (
        <div>
            <div className={"hidden lg:flex"}>
                <div className={"hidden lg:flex"}>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div
                            className={"flex flex-col w-full items-center justify-center font-primary text-ForestGreen"}>
                            <h1 className={"text-5xl font-semibold"}>Faith meets convenience</h1>
                            <span className={"text-xl py-2"}>
                    Stay connected to your faith wherever you are, whenever you need
                </span>
                        </div>
                        <div className={"py-12"}>
                            <img
                                src={"/assets/images/google-play-btn.png"}
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