import React from 'react';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import s from './index.module.css';
import gnome from './media/discount_img.png';

export default function Discount() {
	return (
		<div className={s.discount_container}>
			<div className={['wrapper', s.discount_block].join(' ')}>
				<div className={s.img_block}>
					<img src={gnome} alt="gnome" />
				</div>
				<div className={s.input_button_block}>
					<h2>
						Скидка 5%
						<span className={s.accent}>на первый заказ</span>
					</h2>
					<Input type="tel" />
					<Button type="discount_button">Получить скидку</Button>
				</div>
			</div>
		</div>
	);
}
