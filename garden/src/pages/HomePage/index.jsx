import React from 'react';
import BargainSale from '../../components/BargainSale';
import Catigories from '../../components/Categories';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';

export default function HomePage() {
	return (
		<div>
			<Sale />
			<Catigories />
			<Discount />
			<BargainSale />
		</div>
	);
}
