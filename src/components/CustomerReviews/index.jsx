import React from 'react';
import s from './index.module.css';
import seher from './media/seher.png';
import runge from './media/runge.png';
import hofman from './media/hofman.png';

export default function CustomerReviews() {
	return (
		<section className="section">
			<div className={'container'}>
				<h2 className={s.reviews_title}>Was unsere Kunden über uns sagen</h2>

				<div className={s.reviews_images}>
					<img src={seher} alt="seher" />
					<img src={runge} alt="runge" />
					<img src={hofman} alt="hofman" />
				</div>
			</div>
		</section>
	);
}
