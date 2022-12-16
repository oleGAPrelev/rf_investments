import React from 'react';
import s from './index.module.css';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Header() {
	return (
		<section className={s.header_container}>
			<div className={['wrapper', s.header_block].join(' ')}>
				<div className={s.contacts}>
					<FaPhoneAlt className={s.phone} />
					<p>Anton Fuchs +49 176 10175414</p>
					<FaPhoneAlt className={s.phone} />
					<p>Artur Runge +49 176 24672123</p>
				</div>

				<div className={s.icons_block}>
					<base target="_blank" />
					<a href="/">
						<FaFacebookF className={s.icons} />
					</a>
					<a href="https://www.youtube.com/watch?v=MeCWAFMu_XE">
						<CiYoutube className={s.icons} />
					</a>
					<a href="https://www.instagram.com/rf_investpro_eu/?igshid=YmMyMTA2M2Y%3D">
						<AiOutlineInstagram className={s.icons} />
					</a>
				</div>
			</div>
		</section>
	);
}
