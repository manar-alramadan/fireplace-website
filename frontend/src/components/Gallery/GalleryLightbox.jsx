function GalleryLightbox({ image, onClose }) {

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
                alt={image.title}
            />


            <div className="lightbox-info">

                <h2>{image.title}</h2>

                <p>{image.category}</p>

            </div>


        </div>
    );
}

export default GalleryLightbox;