import Button from '../../UI/Button';
import s from './index.module.css';
import Categories from '../Categories';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';

export default function CategoriesContainer() {
	const { catigories } = useContext(Context);
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
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<div className={s.catigori}>
				<h2>Категории</h2>
				<Link to="/categories">
					<Button type="all_catigories">Все категории </Button>
				</Link>
			</div>

			<Slider {...settings} className={s.categories_container}>
				{catigories.map((el) => (
					<Categories key={el.id} {...el} />
				))}
			</Slider>
		</div>
	);
}
