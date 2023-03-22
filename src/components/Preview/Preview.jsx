import React from "react";
import Arrows from "../Arrows/Arrows";

import "./Preview.css";

const Preview = ({ previewImage, isFirstImage, isLastImage, selectImage }) => {
  return (
    <div className="preview">
      <img src={previewImage.download_url} />
      <Arrows
        isFirstImage={isFirstImage}
        isLastImage={isLastImage}
        selectImage={selectImage}
      />
    </div>
  );
};

export default Preview;
