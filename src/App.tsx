import './App.css'
import Home from "./pages/home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./pages/about-us.tsx";
import ContactUs from "./pages/contact-us.tsx";
import TermAndConditions from "./pages/term-and-conditions.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact-us"} element={<ContactUs/>}/>
                <Route path={"/terms-and-conditions"} element={<TermAndConditions/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
