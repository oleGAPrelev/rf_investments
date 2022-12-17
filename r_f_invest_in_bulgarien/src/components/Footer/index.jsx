import React from 'react';
import s from './index.module.css';

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div className={['wrapper', s.footer_container].join(' ')}>
				<p>© Copyright 2021 / R&F INVEST</p>

				<ul className={s.nav_menu}>
					<li>Datenschutz</li>
					<li>Impressum</li>
					<li>Cookie-Einstellungen</li>
				</ul>
			</div>
		</footer>
	);
}
