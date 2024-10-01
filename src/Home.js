import React, { useState } from 'react';
import './Home.css'; // We'll define custom CSS for this carousel

function Home() {
  const images = [
    'https://via.placeholder.com/800x400.png?text=Slide+1',
    'https://via.placeholder.com/800x400.png?text=Slide+2',
    'https://via.placeholder.com/800x400.png?text=Slide+3',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2>Home</h2>
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-btn">
          &#10094;
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <button onClick={nextSlide} className="carousel-btn">
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Home;
