const stats = [
    {
        number: "10+",
        title: "Years Experience"
    },

    {
        number: "100+",
        title: "Completed Projects"
    },

    {
        number: "50+",
        title: "Happy Clients"
    },

    {
        number: "20+",
        title: "Design Styles"
    }
];


function AboutStats(){

    return (

        <section className="about-stats">


            {
                stats.map((stat)=>(

                    <div
                        className="stat-card"
                        key={stat.title}
                    >

                        <h2>
                            {stat.number}
                        </h2>


                        <p>
                            {stat.title}
                        </p>


                    </div>

                ))
            }


        </section>

    );

}


export default AboutStats;