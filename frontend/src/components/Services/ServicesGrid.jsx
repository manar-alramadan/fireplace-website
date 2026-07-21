import ww from "../../assets/ww.jpg";
import m from "../../assets/m.jpg";
import w from "../../assets/w.jpg";
import u from "../../assets/u.jpg";
import j from "../../assets/j.jpg";
import d from "../../assets/d.jpg";
import useLanguage from "../../hooks/useLanguage";

function ServicesGrid() {

    const { t } = useLanguage();

    const services = [

        {
            key: "modern",
            icon: j,
        },

        {
            key: "marble",
            icon: m,
        },

        {
            key: "outdoor",
            icon: u,
        },

        {
            key: "tvwall",
            icon: w,
        },

        {
            key: "custom",
            icon: d,
        },

        {
            key: "maintenance",
            icon: ww,
        },

    ];

    return (

        <section className="services-grid-section">

            <h2>
                {t("services.grid.title")}
            </h2>

            <p className="services-subtitle">
                {t("services.grid.subtitle")}
            </p>

            <div className="services-grid">

                {services.map((service) => (

                    <div
                        className="service-card"
                        key={service.key}
                    >

                        <div>

                            <img
                                src={service.icon}
                                alt={t(`services.grid.cards.${service.key}.title`)}
                                className="service-icon"
                            />

                        </div>

                        <h3>
                            {t(`services.grid.cards.${service.key}.title`)}
                        </h3>

                        <p>
                            {t(`services.grid.cards.${service.key}.description`)}
                        </p>

                        <button>
                            {t("services.grid.button")}
                        </button>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default ServicesGrid;