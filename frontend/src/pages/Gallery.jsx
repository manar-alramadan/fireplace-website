import { useState } from "react";

import GalleryHeader from "../components/Gallery/GalleryHeader";
import GalleryFilter from "../components/Gallery/GalleryFilter";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryLightbox from "../components/Gallery/GalleryLightbox";

import "../components/Gallery/Gallery.css";


function Gallery() {


    const [selectedCategory,setSelectedCategory]
        =
        useState("All");


    const [selectedImage,setSelectedImage]
        =
        useState(null);



    return (

        <>


            <GalleryHeader />


            <GalleryFilter

                selectedCategory={selectedCategory}

                setSelectedCategory={setSelectedCategory}

            />



            <GalleryGrid

                selectedCategory={selectedCategory}

                onImageClick={setSelectedImage}

            />



            <GalleryLightbox

                image={selectedImage}

                onClose={()=>setSelectedImage(null)}

            />


        </>

    );

}


export default Gallery;