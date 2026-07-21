import "./CTA.css";
import { NavLink } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

function CTA() {

    const { t } = useLanguage();

    return (

        <section className="cta">

            <div className="cta-content">

                <h2>
                    {t("services.cta.title")}
                </h2>

                <p>
                    {t("services.cta.description")}
                </p>

                <button>

                    <NavLink
                        to="/design-request"
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        {t("services.cta.button")}
                    </NavLink>

                </button>

            </div>

        </section>

    );
}

export default CTA;