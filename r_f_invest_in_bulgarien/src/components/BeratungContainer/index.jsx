import React from 'react';
import s from './index.module.css';

export default function BeratungContainer() {
	return (
		<section className={s.beratung_container}>
			<div className={['wrapper', s.beratung_block].join(' ')}>
				<div>
					<h2>Brauchen Sie eine Beratung?</h2>
					<p>Kontaktieren Sie uns und wir helfen Ihnen</p>
				</div>
			</div>
		</section>
	);
}
