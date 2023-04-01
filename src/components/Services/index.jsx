import React from 'react';
import s from './index.module.css';
import { IoStatsChartOutline } from 'react-icons/io5';
import { SlTag } from 'react-icons/sl';
import { BsPercent } from 'react-icons/bs';
import { HiOutlineScale } from 'react-icons/hi';
import { SlHome } from 'react-icons/sl';

export default function Services() {
	return (
		<section className="section">
			<div className={['container', s.services_container].join(' ')}>
				<h2>
					<span className={s.accent}>R & F Investments</span> in&nbsp;Bulgarien
				</h2>

				<div className={s.services_content_container}>
					<div className={s.services_item_container}>
						<IoStatsChartOutline className={s.services_icon} />
						<p>
							Unser Unternehmen arbeitet nur mit marktführenden Bauträgern in
							Bulgarien
						</p>
					</div>

					<div className={s.services_item_container}>
						<SlTag className={s.services_icon} />
						<p>
							Günstiger Preis direkt vom Bauträger ohne Aufpreis und Provisionen
						</p>
					</div>

					<div className={s.services_item_container}>
						<BsPercent className={s.services_icon} />
						<p>Zinsfreier Teilzahlungsplan für den Erwerb von Wohnräumen</p>
					</div>

					<div className={s.services_item_container}>
						<HiOutlineScale className={s.services_icon} />
						<p>
							Kostenlose Rechtsberatung durch unsere Vertragsanwälte bei der
							Transaktionsabwicklung
						</p>
					</div>

					<div className={s.services_item_container}>
						<SlHome className={s.services_icon} />
						<p>
							Unterstützung bei der Vermietung der Immobilien. Technische und
							Kaufmännische Verwaltung
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
