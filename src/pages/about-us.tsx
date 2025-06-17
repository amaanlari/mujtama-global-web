import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import DownloadSection from "../sections/download-section.tsx";

function AboutUs() {
    return (
        <>
            <header className={"sticky top-0 left-0 z-50"}>
                <Navbar showBottomNav={true}/>
            </header>
            <div className={"bg-black"}>
                <div
                    className={"relative bg-[url('/assets/images/about-us-bg-pic.jpg')] bg-cover bg-center text-white lg:px-70 px-7 text-center font-primary py-6"}>
                    {/* Overlay to darken the background image */}
                    <div className={"absolute inset-0 bg-black opacity-50"}></div>

                    <div className={"relative z-10 flex flex-col justify-center items-center lg:py-25"}>
                        <h1 className={"lg:text-6xl text-3xl font-bold"}>About Us</h1>
                        <p className={"lg:text-lg  lg:mt-10 mt-4"}>
                            At Mujtama, our mission is to make it easier for Muslims to stay connected to their faith in
                            everyday life. We’ve created a simple, powerful app that brings together essential tools for
                            worship and spiritual growth—all in one place.
                        </p>
                        <p className={"lg:text-lg  lg:mt-10 mt-4"}>
                            With Mujtama, you can effortlessly locate the nearest mosque, keep up with your prayers
                            using
                            our Salah Tracker, and stay consistent with helpful reminders and insights. Dive into the
                            Quran
                            with beautifully rendered Uthmani and Indo-Pak scripts, complete with reliable translations
                            and
                            tafsir to enhance your understanding. Our curated Dua collection, including authentic
                            supplications from Hisn al-Muslim, is always at your fingertips.
                        </p>
                        <p className={"lg:text-lg  lg:mt-10 mt-4"}>
                            Mujtama is more than just an app—it’s a companion built to support your daily worship and
                            connect you with your community.
                        </p>
                    </div>
                    <div className={"pt-6"}>
                        <DownloadSection classes="text-white relative"/>
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default AboutUs;