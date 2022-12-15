import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import logo from './media/buh_one_logo.png';

export default function Nav() {
	return (
		<nav className={s.nav_container}>
			<div className={['wrapper', s.nav_block].join(' ')}>
				<img src={logo} alt="logo" />
				<ul className={s.nav_menu}>
					<li>Andere Ländern</li>
					<li>Tour reservieren</li>
					<li>Reservierung</li>
					<li>Kontakt</li>
				</ul>
			</div>
			<div className={['wrapper', s.nav_contacts].join(' ')}>
				<h2>Träumen Sie von eine Immobilie am Meer?</h2>
				<p>
					Wenden Sie sich an uns und unsere Qualifizierte Mitarbeiter finden für
					Sie eine Losung!
				</p>
				<Button>Kontaktiere Uns</Button>
			</div>
		</nav>
	);
}
