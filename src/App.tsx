import './App.css'
import Home from "./pages/home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./pages/about-us.tsx";
import ContactUs from "./pages/contact-us.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact-us"} element={<ContactUs/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
