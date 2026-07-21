

import useLanguage from "../../hooks/useLanguage";

function ServicesHero() {
    const { t } = useLanguage();

    return (
        <section className="services-hero">

            <div className="services-overlay">

       <span className="services-tag">

</span>

                <h1>
                    {t("services.hero.title")
                        .split("\n")
                        .map((line, index) => (
                            <span key={index}>
                {line}
                                <br />
            </span>
                        ))}
                </h1>

                <p>
                    {t("services.hero.description")}
                </p>
            </div>

        </section>
    );
}

export default ServicesHero;