/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Dots = ({ activeIndex, onclick, imageSlider }) => (
  <div className="all-dots">
    {
        imageSlider.map((item, index) => (
          <div key={item.id}>
            <input
              type="button"
              onClick={() => onclick(index)}
              className={activeIndex === index ? 'dot active-dot' : 'dot'}
            />
          </div>
        ))
      }
  </div>
);

Dots.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
  imageSlider: PropTypes.array.isRequired,
};

export default Dots;
