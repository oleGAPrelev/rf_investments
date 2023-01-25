import React from 'react';
import s from './index.module.css';

export default function CategoriesCard({ image, title }) {
	image = '/category_img/[0]';
	console.log(image);
	return (
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<div>
				<img src={image} alt={title} />
				<p>{title}</p>
			</div>
		</div>
	);
}
