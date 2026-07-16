import galleryData from "../../data/galleryData";


function GalleryGrid({
                         selectedCategory,
                         onImageClick
                     }) {


    const filteredGallery =
        selectedCategory === "All"
            ? galleryData
            : galleryData.filter(
                item =>
                    item.category === selectedCategory
            );


    return (

        <section className="gallery-grid">


            {
                filteredGallery.map((item)=>(

                    <div
                        className="gallery-card"
                        key={item.id}
                        onClick={() => onImageClick(item)}
                    >


                        <img
                            src={item.image}
                            alt={item.title}
                        />


                        <div className="gallery-info">

                            <h3>{item.title}</h3>

                            <span>{item.category}</span>

                        </div>


                    </div>


                ))
            }


        </section>

    );

}

export default GalleryGrid;