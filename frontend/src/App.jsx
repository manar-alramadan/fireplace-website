import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from './ScrollToTop'; // تأكد من صحة المسار
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import DesignRequest from "./pages/DesignRequest";
function App() {

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/services" element={<Services />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/design-request" element={<DesignRequest />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;