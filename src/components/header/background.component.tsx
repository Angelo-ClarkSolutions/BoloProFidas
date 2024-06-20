import React, { useState, useEffect, useRef } from "react";
import image1 from "../../suenho.png";
import image2 from "../../boludo2.png";
import image3 from "../../canolli.png";
import "./background.component.css";

const images = [image1, image2, image3];
const delay = 2500;

const ImageSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>();
  const [isTransitioning, setIsTransitioning] = useState(true);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleTransitionEnd = () => {
    if (index === images.length) {
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  return (
    <div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: isTransitioning ? "transform 1000ms ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((backgroundImage, idx) => (
            <div
              className="slide"
              key={idx}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          ))}
          <div
            className="slide"
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
