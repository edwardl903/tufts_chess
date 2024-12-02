import React, { useState } from 'react';
import './Slideshow.css';

function Slideshow() {
  const slides = [
    { image: "chess_gallery/chess7.jpg", text: "Tufts x Boston University!" },
    { image: "chess_gallery/chess18.jpg", text: "Tufts Chess Club Meetings!" },
    { image: "chess_gallery/chess5.jpg", text: "Tufts Chess Club Meetings!" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.text} style={{ width: "100%" }} />
          <div className="text">{slide.text}</div>
        </div>
      ))}
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;