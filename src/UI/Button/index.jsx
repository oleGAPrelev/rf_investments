import React from 'react';
import s from './index.module.css';

export default function Button({ children, ...props }) {
	return (
		<button className={s.button} {...props}>
			{children}
		</button>
	);
}
