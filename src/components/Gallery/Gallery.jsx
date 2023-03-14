import { useState, useEffect } from "react";
import ThumbList from "../ThumbList/ThumbList";
import Preview from "../Preview/Preview";
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImage, setActiveImage] = useState(false)

  const selectImage = (imageURL) => {
    // console.log(imageURL);
    setSelectedImage(imageURL);
  };

  const borderToActiveImage = () => {
    setActiveImage(activeImage => !activeImage)
  }

  const addActiveClass = () => {
    if (activeImage) {
    }
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=20");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (!images || images.length === 0) return;

    if (selectedImage === null) {
      // console.log(images);
      setSelectedImage(images[0].download_url);
    }
  }, [images]);

  return (
    <div className="gallery">
      <ThumbList borderToActiveImage={borderToActiveImage} selectImage={selectImage} images={images} />
      <Preview previewSource={selectedImage} />
    </div>
  );
};

export default Gallery;



// ostylowanie
// dodanie ramki
//strzalki - zmienic selectedImage z url na id
