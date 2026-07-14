import Hero from "../components/Home/Hero";
import ServicesPreview from "../components/Home/ServicesPreview";
import GalleryPreview from "../components/Home/GalleryPreview";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CTA from "../components/Home/CTA";

import "../components/Home/Home.css";


function Home(){


    return(

        <>

            <Hero />

            <ServicesPreview />

            <GalleryPreview />

            <WhyChooseUs />

            <CTA />

        </>

    );

}


export default Home;