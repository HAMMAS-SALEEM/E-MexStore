import React from 'react';
// import Carousel from './Components/Carousel/Carousel';
/* <Carousel /> */
import '../../stylesheets/carousel.css';

const Homepage = () => {
  const images = [
    { src: 'https://i.pinimg.com/originals/c2/8b/c9/c28bc99dafaeb107246f904f34bae16c.jpg' },
    { src: 'https://images.wallpaperscraft.com/image/single/space_galaxy_shine_137572_1280x720.jpg' },
    { src: 'https://cdn.wallpapersafari.com/74/30/v23HkS.jpg' },
    { src: 'https://wallpaperaccess.com/full/3971879.jpg' },
  ];
  return (
    <section className="carousel">
      <div className="carousel__track-container">
        <button className="carousel__button carousel__button--left" type="button"><span>&larr;</span></button>
        <ul className="carousel__track">
          {
            images.map((img, idx) => (
              <li key={img} className={idx === 0 ? 'carousel__slide current__slide' : 'carousel__slide'}>
                <img className="carousel__image" src={img.src} alt="carousel snap" />
              </li>
            ))
          }
        </ul>
        <button className="carousel__button carousel__button--right" type="button"><span>&rarr;</span></button>
      </div>
    </section>
  );
};

export default Homepage;
