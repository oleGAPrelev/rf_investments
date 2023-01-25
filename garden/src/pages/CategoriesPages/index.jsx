import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../components/Categories';

import { load_categories } from '../../requests/categories_req';

export default function CategoriesPages() {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(load_categories);
	}, []);

	return (
		<div>
			{categories.map((el, index) => (
				<Categories key={index} {...el} />
			))}
		</div>
	);
}
