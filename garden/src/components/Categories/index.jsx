import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import fertilizers from './media/fertilizers_catigoris.png';
import protection from './media/protection_septic_catigoris.png';
import planting from './media/planting_material_catigoris.png';
import tools from './media/tools_inventory_catigoris.png';

export default function Catigories() {
	return (
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<div className={s.catigori}>
				<h2>Категории</h2>
				<Button type="all_catigories">Все категории </Button>
			</div>
			<div className={s.catigories}>
				<label>
					<a href="#">
						<img src={fertilizers} alt="fertilizers" />
						<p>Удобрения</p>
					</a>
				</label>
				<label>
					<a href="#">
						<img src={protection} alt="Means of protection and septic tanks" />
						<p>Средства Защиты и септики</p>
					</a>
				</label>
				<label>
					<a href="#">
						<img src={planting} alt="planting material" />
						<p>Посадочный материал </p>
					</a>
				</label>
				<label>
					<a href="#">
						<img src={tools} alt="Tools and Inventory" />
						<p>Инструменты и Инвентарь</p>
					</a>
				</label>
			</div>
		</div>
	);
}
