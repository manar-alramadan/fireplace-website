import useLanguage from "../../hooks/useLanguage";

function ServicesPreview() {
    const { t } = useLanguage();
    const services = [

        {
            title: t("home.servicesPreview.cards.design.title"),
            description: t("home.servicesPreview.cards.design.description")
        },

        {
            title: t("home.servicesPreview.cards.installation.title"),
            description: t("home.servicesPreview.cards.installation.description")
        },

        {
            title: t("home.servicesPreview.cards.decoration.title"),
            description: t("home.servicesPreview.cards.decoration.description")
        }


    ];


    return (

        <section className="services-preview">


            <h1>{t("home.servicesPreview.title")}</h1>


            <div className="services-container">


                {services.map((service, index)=>(

                    <div
                        className="service-card"
                        key={index}
                    >

                        <h3>
                             {service.title}
                        </h3>


                        <p>
                            {service.description}
                        </p>


                    </div>



                ))}


            </div>


        </section>

    );

}


export default ServicesPreview;