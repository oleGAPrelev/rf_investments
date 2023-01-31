import React from 'react';
import s from './index.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {slick, apartments, room_2, room_3} from '../../data/slick';

export default function Range() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    pauseOnHover: false,
  };
  
  return (
    <div className={['wrapper', s.range_container].join(' ')}>
      <h1>Unsere Angebote</h1>
      <div className={s.block}>
        {slick.map((wohnung) => {
          return (
            <div className={s.slick}>
              <Slider {...settings}>
                {wohnung.images.map((image) => {
                  return (
                    <div>
                      <img src={image}/>
                    </div>
                  )
                })}
              </Slider>
            </div>
          )
        })}
      </div>
    </div>
  )
}
