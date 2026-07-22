import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../ScrollToTop";


function PublicLayout({children}) {

    return (

        <>

            <Navbar />

            <ScrollToTop />

            {children}

            <Footer />

        </>

    );

}


export default PublicLayout;