import useLanguage from "../../hooks/useLanguage";

function BlogCard({ article }) {

    const { t } = useLanguage();

    return (

        <div className="blog-card">

            <img
                src={article.image}
                alt={t(`blog.${article.titleKey}`)}
            />

            <div className="blog-card-content">

                <h3>
                    {t(`blog.${article.titleKey}`)}
                </h3>

                <p>
                    {t(`blog.${article.descriptionKey}`)}
                </p>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                >
                    {t("blog.card.readMore")}
                </a>

            </div>

        </div>

    );

}

export default BlogCard;