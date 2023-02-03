import React from 'react';
import s from './index.module.css';
import seher from './media/seher.png';
import runge from './media/runge.png';
import hofman from './media/hofman.png';

export default function CustomerReviews() {
	return (
		<div className={['wrapper', s.customer_container].join(' ')}>
			<h1>Was unsere Kunden sagen über uns</h1>

			<div className={s.images}>
				<img src={seher} alt="seher" />
				<img src={runge} alt="runge" />
				<img src={hofman} alt="hofman" />
			</div>
		</div>
	);
}
