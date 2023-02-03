import React from 'react';
import s from './index.module.css';

export default function Modal({ modal, setModal }) {
	return (
		<div className={[s.modal, modal ? s.active : ''].join(' ')}>
			<div className={s.modal_content}>
				<p className={s.cross_icon} onClick={() => setModal(false)}>
					X
				</p>
				<p className={s.info_text}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
					repellendus incidunt animi nemo error voluptatibus atque, adipisci,
					voluptates laudantium est sint aut facere impedit eos obcaecati
					explicabo aliquam cum ut.
				</p>
			</div>
		</div>
	);
}
