import React from 'react';
import PropTypes from 'prop-types';

const Arrows = ({ prevSlide, nextSlide }) => (
  <>
    <button type="button" onClick={prevSlide}><span className="prev">&#10094;</span></button>
    <button type="button" onClick={nextSlide}><span className="next">&#10094;</span></button>
  </>
);

Arrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default Arrows;
