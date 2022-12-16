import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import touren from './media/touren_img.png';

export default function Touren() {
	return (
		<div className={s.touren_container}>
			<div className={['wrapper', s.touren_h].join(' ')}>
				<h2>Aktuelle Touren</h2>

				<div className={s.touren_block}>
					<div>
						<img src={touren} alt="" />
					</div>

					<div>
						<h3>
							Bulgarien kennenlernen für <span className={s.accent}> 199 </span>
							EUR
						</h3>
						<p>
							Unser erfahrenes Personal organisiert Ihre gesamte Reise von Ihren
							Ankunft in Bulgarien bis zu Ihrer Abreise für nur 199 -EUR
						</p>

						<Button>Mehr</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
