import Navbar from "../components/navbar.tsx";
import Hero from "../sections/hero.tsx";
import DownloadSection from "../sections/download-section.tsx";
import KeyFeatures from "../sections/key-features.tsx";
import HomeScreenOverview from "../sections/home-screen-overview.tsx";
import MasjidDetailScreenOverview from "../sections/masjid-detail-screen-overview.tsx";
import SalahTrackerScreenOverview from "../sections/salah-tracker-screen-overview.tsx";
import MyMosqueScreenOverview from "../sections/my-mosque-screen-overview.tsx";
import ChooseUsCta from "../sections/choose-us-cta.tsx";
import UpcomingFeatures from "../sections/upcoming-features.tsx";

function Home() {
    return (
        <>
            <header className={"sticky top-0 left-0"}>
                <Navbar showBottomNav={true}>

                </Navbar>
            </header>
            <Hero/>
            <DownloadSection/>
            <KeyFeatures/>
            <HomeScreenOverview/>
            <MasjidDetailScreenOverview/>
            <SalahTrackerScreenOverview/>
            <MyMosqueScreenOverview/>
            <UpcomingFeatures/>
            <ChooseUsCta/>
            <DownloadSection/>
        </>
    )
}

export default Home;