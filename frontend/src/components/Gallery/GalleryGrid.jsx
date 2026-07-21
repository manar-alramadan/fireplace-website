import useLanguage from "../../hooks/useLanguage";
import galleryData from "../../data/galleryData";

function GalleryGrid({
                         selectedCategory,
                         onImageClick
                     }) {

    const { t } = useLanguage();

    const filteredGallery =
        selectedCategory === "All"
            ? galleryData
            : galleryData.filter(
                item => item.category === selectedCategory
            );

    return (

        <section className="gallery-grid">

            {filteredGallery.map((item) => (

                <div
                    className="gallery-card"
                    key={item.id}
                    onClick={() => onImageClick(item)}
                >

                    <img
                        src={item.image}
                        alt={t(`gallery.cards.${item.titleKey}`)}
                    />

                    <div className="gallery-info">

                        <h3>
                            {t(`gallery.cards.${item.titleKey}`)}
                        </h3>

                        <span>
                            {t(`gallery.filter.${item.category.toLowerCase().replace(" ", "")}`)}
                        </span>

                    </div>

                </div>

            ))}

        </section>

    );

}

export default GalleryGrid;