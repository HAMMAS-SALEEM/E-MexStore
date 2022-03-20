/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const SliderContent = ({ activeIndex, imageSlider }) => (
  <section>
    {
              imageSlider.map((slide, index) => (
                <div key={slide.id} className={index === activeIndex ? 'slides active' : 'inactive'}>
                  <img src={slide.url} className="slide-image" alt="slide" />
                </div>
              ))
          }
  </section>
);

SliderContent.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  imageSlider: PropTypes.array.isRequired,
};

export default SliderContent;
