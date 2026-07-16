const values = [
    {
        icon: "🔥",
        title: "Quality",
        description:
            "We use premium materials and professional execution to deliver high quality fireplaces."
    },

    {
        icon: "🏠",
        title: "Custom Design",
        description:
            "Every fireplace is designed according to customer needs and interior style."
    },

    {
        icon: "⭐",
        title: "Experience",
        description:
            "Creative solutions based on expertise in modern and traditional fireplace designs."
    }
];


function AboutValues(){

    return (

        <section className="about-values">


            <div className="values-title">

                <h2>
                    Our Values
                </h2>

                <p>
                    The principles that guide our work
                    and help us create exceptional designs.
                </p>

            </div>



            <div className="values-grid">


                {
                    values.map((value)=>(

                        <div
                            className="value-card"
                            key={value.title}
                        >

                            <div className="value-icon">
                                {value.icon}
                            </div>


                            <h3>
                                {value.title}
                            </h3>


                            <p>
                                {value.description}
                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}


export default AboutValues;