import React from "react";
import "./Arrows.css";

const Arrows = ({ isFirstImage, isLastImage, selectImage }) => {
  const goPrevious = () => {
    if (isFirstImage) {
      return;
    }

    selectImage((prev) => prev - 1);
  };

  const goNext = () => {
    if (isLastImage) {
      return;
    }

    selectImage((prev) => prev + 1);
  };

  return (
    <div className="arrows">
      <button
        disabled={isFirstImage}
        onClick={goPrevious}
        className="arrow left"
      >
        &lt;
      </button>
      <button disabled={isLastImage} onClick={goNext} className="arrow right">
        &gt;
      </button>
    </div>
  );
};

export default Arrows;
