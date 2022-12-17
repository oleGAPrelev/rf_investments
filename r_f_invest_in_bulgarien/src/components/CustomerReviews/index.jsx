import React from 'react';
import s from './index.module.css';

export default function CustomerReviews() {
	return (
		<div className={['wrapper', s.customer_container].join(' ')}>
			<h2>Was unsere Kunden sagen über uns</h2>
		</div>
	);
}
