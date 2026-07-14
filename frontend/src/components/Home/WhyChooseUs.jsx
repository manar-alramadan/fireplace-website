function WhyChooseUs() {


    const features = [

        {
            title: "Custom Design",
            description:
                "Unique fireplace designs created especially for your home."
        },


        {
            title: "Premium Materials",
            description:
                "We use high quality stone, marble and modern materials."
        },


        {
            title: "Professional Team",
            description:
                "Experienced designers and installers delivering perfect results."
        },


        {
            title: "Quality Guarantee",
            description:
                "Attention to every detail with excellent finishing."
        }

    ];



    return (

        <section className="why-section">


            <h2>
                Why Choose PlaceFire?
            </h2>



            <div className="why-container">


                {
                    features.map((item,index)=>(

                        <div
                            className="why-card"
                            key={index}
                        >


                            <div className="why-icon">

                            </div>


                            <h3>
                                {item.title}
                            </h3>


                            <p>
                                {item.description}
                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}


export default WhyChooseUs;