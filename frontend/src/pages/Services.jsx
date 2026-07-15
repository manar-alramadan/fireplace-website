import ServicesHero from "../components/Services/ServicesHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import WorkProcess from "../components/Services/WorkProcess";
import CTA from "../components/Common/CTA";
import "../components/Services/Services.css";

function Services() {

    return (

        <>
            <ServicesHero />

            <ServicesGrid />

            <WorkProcess />

            <CTA />
        </>

    );

}

export default Services;