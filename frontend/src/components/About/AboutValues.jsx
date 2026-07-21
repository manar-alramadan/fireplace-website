import useLanguage from "../../hooks/useLanguage";

function AboutValues() {

    const { t } = useLanguage();

    const values = [

        {
            icon: "🔥",
            key: "quality",
        },

        {
            icon: "🏠",
            key: "custom",
        },

        {
            icon: "⭐",
            key: "experience",
        },

    ];

    return (

        <section className="about-values">

            <div className="values-title">

                <h2>
                    {t("about.values.title")}
                </h2>

                <p>
                    {t("about.values.subtitle")}
                </p>

            </div>

            <div className="values-grid">

                {values.map((value) => (

                    <div
                        className="value-card"
                        key={value.key}
                    >

                        <div className="value-icon">
                            {value.icon}
                        </div>

                        <h3>
                            {t(`about.values.cards.${value.key}.title`)}
                        </h3>

                        <p>
                            {t(`about.values.cards.${value.key}.description`)}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default AboutValues;