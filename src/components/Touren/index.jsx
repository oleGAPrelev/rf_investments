import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import touren from './media/touren_img.png';

export default function Touren({ setModal }) {
	return (
		<section className={s.touren_container}>
			<div className={['wrapper', s.touren_h].join(' ')}>
				<h1>Aktuelle Touren</h1>

				<div className={s.touren_block}>
					<div>
						<img src={touren} alt="touren" />
					</div>

					<div>
						<h2>
							Bulgarien kennenlernen für <span className={s.accent}> 250 </span>
							EUR
						</h2>
						<p>
							Unser erfahrenes Personal organisiert Ihre gesamte Reise von Ihren
							Ankunft in Bulgarien bis zu Ihrer Abreise für nur 250 -EUR
						</p>

						<Button onClick={() => setModal(true)}> Mehr</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
