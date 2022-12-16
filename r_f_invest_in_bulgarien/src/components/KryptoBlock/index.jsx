import React from 'react';
import Button from '../../UI/Button';
import bitcoin from './media/bitcoin.png';
import s from './index.module.css';

export default function KryptoBlock() {
	return (
		<section className={s.crypto_container}>
			<div className={['wrapper', s.crypto_block].join(' ')}>
				<div>
					<h2>Bezahlen Sie Ihre Wohnung mit Krypto </h2>
					<p>
						Bei uns haben Sie die Möglichkeit Ihre Wohnung mit Kryptowährungen
						zu kaufen! Interesse? Fragen Sie hier an!
					</p>
					<Button>Mehr</Button>
				</div>

				<div>
					<img src={bitcoin} alt="bitcoin" />
				</div>
			</div>
		</section>
	);
}
