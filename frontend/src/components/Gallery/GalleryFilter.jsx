import useLanguage from "../../hooks/useLanguage";

const categories = [

    {
        value: "All",
        label: "all",
    },

    {
        value: "Modern",
        label: "modern",
    },

    {
        value: "Marble",
        label: "marble",
    },

    {
        value: "Stone",
        label: "stone",
    },

    {
        value: "Outdoor",
        label: "outdoor",
    },

    {
        value: "TV Wall",
        label: "tvwall",
    },

];

function GalleryFilter({

                           selectedCategory,
                           setSelectedCategory,

                       }) {

    const { t } = useLanguage();

    return (

        <section className="gallery-filter">

            {categories.map((category) => (

                <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={
                        selectedCategory === category.value
                            ? "active"
                            : ""
                    }
                >
                    {t(`gallery.filter.${category.label}`)}
                </button>

            ))}

        </section>

    );

}

export default GalleryFilter;