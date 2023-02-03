import React from 'react';
import s from './index.module.css';
import { IoStatsChartOutline } from 'react-icons/io5';
import { SlTag } from 'react-icons/sl';
import { BsPercent } from 'react-icons/bs';
import { HiOutlineScale } from 'react-icons/hi';
import { SlHome } from 'react-icons/sl';

export default function Services() {
	return (
		<section className={s.services_section}>
			<div className={['wrapper', s.services_block].join(' ')}>
				<h2>
					<span className={s.accent}>R & F Investmets</span> in Bulgarien
				</h2>
			</div>

			<div className={s.services_icon_container}>
				<div>
					<IoStatsChartOutline className={s.services_icon} />
					<p>
						Unsere Unternehmen arbeitet nur mit Marktführende Bauträger im
						Bulgarien
					</p>
				</div>

				<div>
					<SlTag className={s.services_icon} />
					<p>
						Günstiger Preis direkt vom Bauträger ohne Aufpreis und Provisionen
					</p>
				</div>

				<div>
					<BsPercent className={s.services_icon} />
					<p>Zinsfreier Teilzahlungsplan für den Erwerb von Wohnraum</p>
				</div>
			</div>

			<div className={s.services_icon_container}>
				<div>
					<HiOutlineScale className={s.services_icon} />
					<p>
						Kostenlose Rechtsberatung durch unsere Vertragsanwälte bei der
						Transaktionsabwicklung
					</p>
				</div>

				<div>
					<SlHome className={s.services_icon} />
					<p>
						Unterstützung bei der Vermietung der Immobilien. Technische und
						Kaufmännische Verwaltung
					</p>
				</div>
			</div>
		</section>
	);
}
