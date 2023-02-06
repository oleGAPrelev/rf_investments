import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Footer({ setModal }) {
	return (
		<footer className={s.footer}>
			<div className={['wrapper', s.footer_container].join(' ')}>
				<div>
					<p>R&F INVESTMENS</p>
				</div>

				<div>
					<ul className={s.nav_menu}>
						<Link to="datenschutz" onClick={() => setModal(true)}>
							Datenschutz
						</Link>
						<Link to="impressum" onClick={() => setModal(true)}>
							Impressum
						</Link>
						<Link to="cookie" onClick={() => setModal(true)}>
							Cookie-Einstellungen
						</Link>
					</ul>
				</div>
			</div>
		</footer>
	);
}
