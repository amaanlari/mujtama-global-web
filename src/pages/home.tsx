import Navbar from "../components/navbar.tsx";
import Hero from "../sections/hero.tsx";
import DownloadSection from "../sections/download-section.tsx";
import KeyFeatures from "../sections/key-features.tsx";
import HomeScreenOverview from "../sections/home-screen-overview.tsx";
import MasjidDetailScreenOverview from "../sections/masjid-detail-screen-overview.tsx";
import SalahTrackerScreenOverview from "../sections/salah-tracker-screen-overview.tsx";
import MyMosqueScreenOverview from "../sections/my-mosque-screen-overview.tsx";
import ChooseUsCta from "../sections/choose-us-cta.tsx";

function Home() {
    return (
        <>
            <header className={"sticky top-0"}>
                <Navbar/>
            </header>
            <Hero/>
            <DownloadSection/>
            <KeyFeatures/>
            <HomeScreenOverview/>
            <MasjidDetailScreenOverview/>
            <SalahTrackerScreenOverview/>
            <MyMosqueScreenOverview/>
            <ChooseUsCta/>
            <DownloadSection/>
        </>
    )
}

export default Home;