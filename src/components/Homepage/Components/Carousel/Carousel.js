import React, { useState } from 'react';
import imageSlider from './Components/imageSlider';
import SliderContent from './Components/SliderContent';
import Arrow from './Components/Arrow';
import Dots from './Components/Dots';
import '../../../../stylesheets/carousel.css';

const len = imageSlider.length - 1;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrow
        prevSlide={() => {
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
        }}
        nextSlide={() => {
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }}
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={((activeIndex) => setActiveIndex(activeIndex))}
      />
    </div>
  );
};

export default Carousel;
