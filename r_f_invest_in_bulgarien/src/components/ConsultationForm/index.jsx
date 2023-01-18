import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';

export default function ConsultationForm() {
	return (
		<form className={s.consultation_form}>
			<div className={s.daten_block}>
				<label>
					<p>Telefonnummer</p>
					<Input />
				</label>

				<label>
					<p>E-Mail-Adresse</p>
					<Input />
				</label>
			</div>

			<Button>Kontaktiere Uns</Button>
		</form>
	);
}
