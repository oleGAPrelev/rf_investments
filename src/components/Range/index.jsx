import React from 'react';
import s from './index.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slick } from '../../data/slick';

export default function Range() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className='section'>
      <div className='container'>
        <h2 className={s.range_title}>Unsere Angebote</h2>
        <div className={s.range_block}>
          {slick.map((wohnung, index) => {
            return (
              <div key={Date.now() + index} className={s.range_block_slick}>
                <Slider {...settings}>
                  {wohnung.images.map((image) => {
                    return (
                      <div key={image}>
                        <img
                          src={image}
                          alt={
                            wohnung.title +
                            ' ' +
                            image.slice(-5, -4).toUpperCase()
                          }
                        />
                      </div>
                    );
                  })}
                </Slider>
                <div className={s.range_block_price}>
                  <h2>{wohnung.title}</h2>
                  <p>{wohnung.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
