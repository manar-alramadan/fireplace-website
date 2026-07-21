import useLanguage from "../../hooks/useLanguage";

function BlogHero() {

    const { t } = useLanguage();

    return (

        <section className="blog-hero">

            <div className="blog-hero-content">

                <h1>
                    {t("blog.hero.title")}
                </h1>

                <p>
                    {t("blog.hero.description")}
                </p>

            </div>

        </section>

    );
}

export default BlogHero;