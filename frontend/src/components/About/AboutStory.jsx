import storyImage from "../../assets/u.jpg";
import useLanguage from "../../hooks/useLanguage";

function AboutStory() {

    const { t } = useLanguage();

    return (

        <section className="about-story">

            <div className="about-story-image">

                <img
                    src={storyImage}
                    alt={t("about.story.imageAlt")}
                />

            </div>

            <div className="about-story-content">

                <h2>
                    {t("about.story.title")}
                </h2>

                <p>
                    {t("about.story.paragraph1")}
                </p>

                <p>
                    {t("about.story.paragraph2")}
                </p>

            </div>

        </section>

    );

}

export default AboutStory;