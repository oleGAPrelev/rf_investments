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
		autoplaySpeed: 3000,
		pauseOnHover: true,
	};

	return (
		<div className={['wrapper', s.range_container].join(' ')}>
			<h1>Unsere Angebote</h1>
			<div className={s.block}>
				{slick.map((el) => (
					<div className={s.slick}>
						<Slider {...settings}>
							<div>
								<img src={el.image} alt={el.image} />
							</div>
							<div>
								<img src={el.image} alt={el.image} />
							</div>
							<div>
								<img src={el.image} alt={el.image} />
							</div>
						</Slider>
						<div className={s.price}>
							<h2>{el.title}</h2>
							<p>{el.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
