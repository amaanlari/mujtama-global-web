import './App.css'
import Home from "./pages/home.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import TermAndConditions from "./pages/term-and-conditions.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/privacy-policy"} element={<PrivacyPolicy/>}/>
                <Route path={"/terms-and-conditions"} element={<TermAndConditions/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
