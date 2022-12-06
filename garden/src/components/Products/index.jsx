import React from 'react';
import { Link } from 'react-router-dom';

export default function Products({ id }) {
	return (
		<div>
			<Link key={id} to={`/${id}`}>
				<p>{id}</p>
			</Link>
		</div>
	);
}
