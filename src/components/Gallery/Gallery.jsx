import { useState, useEffect } from "react";
import ThumbList from "../ThumbList/ThumbList";
import Preview from "../Preview/Preview";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = (imageIndex) => {
    // console.log(imageIndex);
    setSelectedImage(imageIndex);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=6");
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
      setSelectedImage(0);
    }
  }, [images]);

  if (images.length === 0 || selectedImage === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <ThumbList
        selectImage={selectImage}
        images={images}
        selectedImage={selectedImage}
      />
      <Preview
        previewImage={images[selectedImage]}
        selectImage={setSelectedImage}
        isLastImage={images.length - 1 === selectedImage}
        isFirstImage={selectedImage === 0}
      />
    </div>
  );
};

export default Gallery;

// ostylowanie
// dodanie ramki
//strzalki - zmienic selectedImage z url na id
