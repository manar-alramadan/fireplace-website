import useLanguage from "../../hooks/useLanguage";

function ContactHero() {

    const { t } = useLanguage();

    return (

        <section className="contact-hero">

            <div className="contact-hero-content">

                <h1>
                    {t("contact.hero.title")}
                </h1>

                <p>
                    {t("contact.hero.description")}
                </p>

            </div>

        </section>

    );

}

export default ContactHero;