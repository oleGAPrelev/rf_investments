import React from 'react';
import s from './index.module.css';
import instagram from './media/instagram.png';
import whats_app from './media/whats_app.png';

export default function Footer() {
	return (
		<div className={['wrapper', s.footer].join(' ')}>
			<div className={s.contacts}>
				<h2>Контакты</h2>
				<p>+7 999 999 99 99</p>
				<div className={s.networcs}>
					<a href="#">
						<img src={instagram} alt="instagram" />
						<p>instagram</p>
					</a>
					<a href="#">
						<img src={whats_app} alt="whats_app" />
						<p>WhatsApp</p>
					</a>
				</div>
			</div>
			<div className={s.address}>
				<h2>Адрес</h2>
				<p>
					г. Космонавтов <span>проезд Космонавтов, д.11</span>
				</p>
				<p>
					Режим работы <span className={s.accent}>Круглосуточно</span>
				</p>
			</div>
		</div>
	);
}
