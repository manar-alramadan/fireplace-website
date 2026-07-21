
import useLanguage from "../../hooks/useLanguage";
function WhyChooseUs() {
    const { t } = useLanguage();

    const features = [

        {
            title: t("home.whyChooseUs.cards.design.title"),
            description: t("home.whyChooseUs.cards.design.description")
        },

        {
            title: t("home.whyChooseUs.cards.materials.title"),
            description: t("home.whyChooseUs.cards.materials.description")
        },

        {
            title: t("home.whyChooseUs.cards.team.title"),
            description: t("home.whyChooseUs.cards.team.description")
        },

        {
            title: t("home.whyChooseUs.cards.quality.title"),
            description: t("home.whyChooseUs.cards.quality.description")
        }

    ];



    return (

        <section className="why-section">


            <h2>
                {t("home.whyChooseUs.title")}
            </h2>



            <div className="why-container">


                {
                    features.map((item,index)=>(

                        <div
                            className="why-card"
                            key={index}
                        >


                            <div className="why-icon">

                            </div>


                            <h3>
                                {item.title}
                            </h3>


                            <p>
                                {item.description}
                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}


export default WhyChooseUs;