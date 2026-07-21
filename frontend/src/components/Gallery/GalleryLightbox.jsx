import useLanguage from "../../hooks/useLanguage";

function GalleryLightbox({ image, onClose }) {

    const { t } = useLanguage();

    if (!image) return null;

    return (

        <div className="lightbox">

            <button
                className="lightbox-close"
                onClick={onClose}
            >
                ×
            </button>

            <img
                src={image.image}
                alt={t(`gallery.cards.${image.titleKey}`)}
            />

            <div className="lightbox-info">

                <h2>
                    {t(`gallery.cards.${image.titleKey}`)}
                </h2>

                <p>
                    {t(`gallery.filter.${image.category.toLowerCase().replace(" ", "")}`)}
                </p>

            </div>

        </div>

    );
}

export default GalleryLightbox;