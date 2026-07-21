import useLanguage from "../../hooks/useLanguage";

function AboutStats() {

    const { t } = useLanguage();

    const stats = [

        {
            number: "10+",
            key: "experience",
        },

        {
            number: "100+",
            key: "projects",
        },

        {
            number: "50+",
            key: "clients",
        },

        {
            number: "20+",
            key: "styles",
        },

    ];

    return (

        <section className="about-stats">

            {stats.map((stat) => (

                <div
                    className="stat-card"
                    key={stat.key}
                >

                    <h2>
                        {stat.number}
                    </h2>

                    <p>
                        {t(`about.stats.${stat.key}`)}
                    </p>

                </div>

            ))}

        </section>

    );

}

export default AboutStats;