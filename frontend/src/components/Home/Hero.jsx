import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";




function Hero() {
    const { t } = useTranslation();
    return (

        <section className="hero">

            <div className="hero__content">

                <h1>{t("home.hero.title")}</h1>


                <p>{t("home.hero.subtitle")}</p>


                <button  >
                    <NavLink
                        to="/design-request"      style={{ textDecoration: 'none', color: 'white' }}
                    >
                        {t("home.hero.button")}
                    </NavLink>
                </button>

            </div>


        </section>

    );

}


export default Hero;