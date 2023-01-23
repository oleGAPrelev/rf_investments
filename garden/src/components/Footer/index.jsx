import React from 'react';
import s from './index.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className={['wrapper', s.footer].join(' ')}>
			<div className={s.contacts}>
				<h2>Контакты</h2>
				<p>+7 999 999 99 99</p>
				<div className={s.networcs}>
					<a href="#">
						<AiOutlineInstagram className={s.icons} />
						<p>instagram</p>
					</a>
					<a href="#">
						<AiOutlineWhatsApp className={s.icons} />
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
		</footer>
	);
}
