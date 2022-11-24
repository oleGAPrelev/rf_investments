import React from 'react';
import s from './index.module.css';

export default function CategoriesContainer({ title, img }) {
	return (
		<label className={s.catigories}>
			<a href="#">
				<img src={img} alt="fertilizers" />
				<p>{title}</p>
			</a>
		</label>
	);
}
