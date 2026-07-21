import useLanguage from "../../hooks/useLanguage";

function AboutHero() {

    const { t } = useLanguage();

    return (

        <section className="about-hero">

            <div className="about-hero-content">

                <h1>
                    {t("about.hero.title")}
                </h1>

                <p>
                    {t("about.hero.description")}
                </p>

            </div>

        </section>

    );
}

export default AboutHero;
