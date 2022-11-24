import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import { categories } from '../../data/categories';
import CategoriesContainer from '../CategoriesContainer';

export default function Catigories() {
	return (
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<div className={s.catigori}>
				<h2>Категории</h2>
				<Button type="all_catigories">Все категории </Button>
			</div>
			<div className={s.categories_container}>
				{categories.map((el) => (
					<CategoriesContainer key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}
