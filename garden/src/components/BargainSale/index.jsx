import React from 'react';
import s from './index.module.css';

export default function BargainSale({ title, price, discont_price, image }) {
	const img_style = image ?? '../../../media_products/not_images.png';

	return (
		<div>
			{discont_price === '' ? (
				''
			) : (
				<a href="#" className={s.bargainContainer}>
					<img src={img_style} alt="img" />
					<div className={s.price_block}>
						<p>{price} p</p>
						<p>{discont_price}</p>
						<p>{((price - discont_price) / price) * 100}%</p>
					</div>
					<div className={s.title_block}>
						<p>{title}</p>
					</div>
				</a>
			)}
		</div>
	);
}
