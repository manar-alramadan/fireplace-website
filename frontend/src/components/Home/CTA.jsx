import {NavLink} from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
function CTA() {
    const { t } = useLanguage();
    return (

        <section className="cta-section">


            <div className="cta-content">


                <h2>
                    {t("home.cta.title")}
                </h2>


                <p>
                    {t("home.cta.description")}

                </p>
                <p>
                    {t("home.cta.location")}
                </p>

                <NavLink className="cta-button" to="/design-request">
                    {t("home.cta.button")}
                </NavLink>


            </div>


        </section>

    );

}


export default CTA;