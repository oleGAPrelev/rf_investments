import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import flowers from './media/flowers_stock.png';

export default function Sale() {
	return (
		<section className={s.sale_container}>
			<div className={['wrapper', s.sale_block].join(' ')}>
				<div className={s.h_button_block}>
					<h2>
						Распродажа <span className={s.accent}>в честь нового сезона</span>
					</h2>
					<Button type="sale_btn_white_mode">Все акции</Button>
					<Button type="sale_btn_dark_mode">Подробнее</Button>
				</div>
				<img src={flowers} alt="flowers" />
			</div>
		</section>
	);
}
