import React from 'react';
import s from './index.module.css';
import { categories } from '../../data/categories';
import Categories from '../Categories';

export default function AllCatigoriesContainer() {
	return (
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<h2>Категории</h2>
			<div className={s.categories_container}>
				{categories.map((el) => (
					<Categories key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}
