import useLanguage from "../../hooks/useLanguage";

function GalleryHeader() {

    const { t } = useLanguage();

    return (

        <section className="gallery-header">

            <h1>
                {t("gallery.header.title")}
            </h1>

            <p>
                {t("gallery.header.description")}
            </p>

        </section>

    );
}

export default GalleryHeader;