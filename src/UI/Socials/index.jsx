import React from 'react';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import { SlSocialYoutube } from 'react-icons/sl';
import s from './index.module.css';
export default function Socials({ placement }) {
	return (
		<div className={s.icons_block}>
			<base target="_blank" />
			<a href="https://wa.me/4917610175414?text=Hallo%2C+ich+befinde+mich+auf+dieser+Seite+%28%2F%29+und+habe+eine+Frage.">
				<AiOutlineWhatsApp
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
			<a href="https://www.youtube.com/watch?v=MeCWAFMu_XE">
				<SlSocialYoutube
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
			<a href="https://www.instagram.com/rf_investpro_eu/?igshid=YmMyMTA2M2Y%3D">
				<AiOutlineInstagram
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
		</div>
	);
}
