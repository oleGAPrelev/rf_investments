import React from 'react';
import ConsultationForm from '../ConsultationForm';
import s from './index.module.css';

export default function Consultation() {
	
	
	return (
		<section className={s.beratung_container} id="consultant">
			<div className={['wrapper', s.beratung_block].join(' ')}>
				<div>
					<h2>Brauchen Sie eine Beratung?</h2>
					<p>Kontaktieren Sie uns und wir helfen Ihnen</p>
				</div>

				<div>
					<ConsultationForm />
				</div>
			</div>
		</section>
	);
}
