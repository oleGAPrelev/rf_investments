import React from 'react';
import s from './index.module.css';
import logo from './media/buh_one_logo.png';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function AbountUs() {
	return (
		<section className={s.about_us_section}>
			<div className="wrapper">
				<div className={s.about_us_logo}>
					<img src={logo} alt="logo" />
				</div>

				<div className={s.about_us_container}>
					<div>
						<p>
							Die RF Invest ist ein europaweit tätiger, auf die
							Wohnimmobilienwirtschaft spezialisierte Unternehmen. Der
							Tätigkeitsschwerpunkt liegt im Verkauf und Vermietung von
							Immobilienobjekten auf gefragten Urlaubsorten. Mit ihrem Angebot
							realisiert die RF Invest Potentiale sowohl für private
							Kapitalanleger als auch für Selbstnutzer. Unsere kompetente
							Mitarbeiter organisieren den Kauf und begleiten die ganzen
							Prozesse bis zum Schlüsselübergabe von ihrer Traumimmobilie.
						</p>
					</div>

					<div>
						<p>R&F INVEST Harmony Suites 12-14 8240 Nesebar, Bulgarien</p>
					</div>

					<div>
						<div className={s.icons_block}>
							<base target="_blank" />
							<a href="/">
								<FaFacebookF className={s.icons} />
							</a>
							<a href="https://www.youtube.com/watch?v=MeCWAFMu_XE">
								<CiYoutube className={s.icons} />
							</a>
							<a href="https://www.instagram.com/rf_investpro_eu/?igshid=YmMyMTA2M2Y%3D">
								<AiOutlineInstagram className={s.icons} />
							</a>
						</div>

						<div>
							<div className={s.contacts}>
								<FaPhoneAlt className={s.phone} />
								<p>Anton Fuchs +49 176 10175414</p>
							</div>

							<div className={s.contacts}>
								<FaPhoneAlt className={s.phone} />
								<p>Artur Runge +49 176 24672123</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
