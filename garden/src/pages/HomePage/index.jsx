import React from 'react';
import BargainSaleContainer from '../../components/BargainSaleContainer';
import CategoriesContainer from '../../components/CategoriesContainer';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';

export default function HomePage() {
	return (
		<div>
			<Sale />
			<CategoriesContainer />
			<Discount />
			<BargainSaleContainer />
		</div>
	);
}
