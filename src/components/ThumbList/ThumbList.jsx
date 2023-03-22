import React from "react";
import "./ThumbList.css";

const ThumbList = ({
  images,
  selectedImage,
  selectImage,
  imageIndex,
}) => {
  return (
    <div>
      <div className="images">
        {images.map((image, index) => (
          <img
            className={index === selectedImage ? "active" : ""}
            onClick={() => {
              selectImage(index);
            }}
            key={image.id}
            src={image.download_url}
            alt={image.author}
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbList;
