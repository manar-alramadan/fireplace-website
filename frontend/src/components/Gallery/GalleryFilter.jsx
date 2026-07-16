const categories = [
    "All",
    "Modern",
    "Marble",
    "Stone",
    "Outdoor",
    "TV Wall",
];

function GalleryFilter({
                           selectedCategory,
                           setSelectedCategory,
                       }) {
    return (
        <section className="gallery-filter">

            {categories.map((category) => (

                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={
                        selectedCategory === category
                            ? "active"
                            : ""
                    }
                >
                    {category}
                </button>

            ))}

        </section>
    );
}

export default GalleryFilter;