import useLanguage from "../../hooks/useLanguage";


function GalleryPreview() {
    const { t } = useLanguage();

    const images = [
        "/images_gallery/1.jpg",
        "/images_gallery/2.jpg",
        "/images_gallery/3.jpg",
        "/images_gallery/4.jpg",
        "/images_gallery/5.jpg",
        "/images_gallery/6.jpg"
    ];


    return (

        <section className="gallery-preview"   >


            <h2>
                {t("home.galleryPreview.title")}
            </h2>

            <h3    style={{ marginBottom: "30px" }}>{t("home.galleryPreview.subtitle")}</h3>

            <div className="gallery-grid">


                {images.map((image,index)=>(

                    <div
                        className="gallery-card"
                        key={index}
                    >

                        <img
                            src={image}
                            alt="Fireplace design"
                        />

                    </div>

                ))}


            </div>



            <button className="gallery-button">

                {t("home.galleryPreview.button")}

            </button>


        </section>

    );

}


export default GalleryPreview;