import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import Products from '../Products';

export default function index() {
	const { products } = useContext(Context);
	return (
		<div>
			{id}
			{products.map((product) => (
				<Products key={product.id} {...product} />
			))}
		</div>
	);
}
