import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/ContactUs";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}
