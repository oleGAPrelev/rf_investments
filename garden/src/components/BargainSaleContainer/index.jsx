import React from 'react';
import s from './index.module.css';

export default function BargainSaleContainer({
	title,
	price,
	img,
	discont_price,
}) {
	const img_style = img ?? '../../../media_products/not_images.png';

	return (
		<div>
			{discont_price === '' ? (
				''
			) : (
				<a href="#" className={s.bargainContainer}>
					<img src={img_style} alt="img" />
					<div className={s.price}>
						<p>{price}p</p>
						<p>{discont_price}</p>
						<p>{((price - discont_price) / price) * 100}%</p>
					</div>
					<p>{title}</p>
				</a>
			)}
		</div>
	);
}
