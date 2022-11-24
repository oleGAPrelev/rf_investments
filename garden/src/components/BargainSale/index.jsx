import React from 'react';
import s from './index.module.css';
import { products } from '../../data/products';
import BargainSaleContainer from '../BargainSaleContainer';

export default function BargainSale() {
	return (
		<div className={['wrapper', s.bargain_block].join(' ')}>
			<h2>Акции</h2>
			<div className={s.info_bargain_block}>
				{products.map((el) => (
					<BargainSaleContainer key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}
