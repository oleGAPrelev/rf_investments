import React from 'react';
import s from './index.module.css';

export default function BargainSaleContainer({ title, price, img }) {
	return (
		<a href="#" className={s.bargainContainer}>
			<img src={img} alt="img" />
			<p>{price}p</p>
			<p>{title}</p>
		</a>
	);
}
