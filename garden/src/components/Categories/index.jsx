import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Categories({ id, image, title }) {
	const img_style = image ?? '../../../media_products/not_images.png';
	return (
		<label className={s.catigories}>
			<Link key={id} to={`/products/${id}`}>
				<img src={img_style} alt="fertilizers" />

				<p>{title}</p>
			</Link>
		</label>
	);
}
