import React from 'react';
import s from './index.module.css';
import BargainSale from '../BargainSale';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BargainSaleContainer() {
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: '#339933',
					borderRadius: '20%',
				}}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: '#339933',
					borderRadius: '20%',
				}}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className={['wrapper', s.bargain_block].join(' ')}>
			<h2>Акции</h2>
			<Slider {...settings} className={s.info_bargain_block}>
				{/* {products.map((el) => (
					<BargainSale key={el.id} {...el} />
				))} */}
			</Slider>
		</div>
	);
}
