function ServicesPreview() {

    const services = [
        {
            title: "Fireplace Design",
            description:
                "Custom fireplace designs created to match your home style."
        },

        {
            title: "Fireplace Installation",
            description:
                "Professional installation with high quality materials."
        },

        {
            title: "Interior Decoration",
            description:
                "Beautiful decoration ideas around your fireplace."
        },
        {
            title: "Fireplace Design",
            description:
                "Custom fireplace designs created to match your home style."
        },

        {
            title: "Fireplace Installation",
            description:
                "Professional installation with high quality materials."
        },

        {
            title: "Interior Decoration",
            description:
                "Beautiful decoration ideas around your fireplace."
        }
    ];


    return (

        <section className="services-preview">


            <h2>
                Our Services
            </h2>


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