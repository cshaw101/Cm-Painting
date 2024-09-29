import React, { useState } from "react";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="slider-container">
      {/* After Image */}
      <img
        src="https://via.placeholder.com/600x400/ff7f7f/333333?text=AFTER"
        className="image after-image"
        alt="After"
      />
      {/* Before Image */}
      <img
        src="https://via.placeholder.com/600x400/7f7fff/333333?text=BEFORE"
        className="image before-image"
        alt="Before"
        style={{ width: `${sliderValue}%` }}
      />
      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default BeforeAfterSlider;
