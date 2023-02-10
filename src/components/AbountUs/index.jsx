import React from 'react';
import s from './index.module.css';
import logo from './media/nav_logo.png';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";

const { REACT_APP_MAPBOX_USERNAME, REACT_APP_MAPBOX_STYLE_ID, REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default function AbountUs() {
	const position = [51.505, -0.09];

	return (
		<section className={s.about_us_section}>
			<div className="wrapper">
				<div className={s.about_us_logo}>
					<img src={logo} alt="logo" />
				</div>

				<div className={s.about_us_container}>
					<div>
						<p>
							<MapContainer
								center={position}
								zoom={4.5}
								scrollWheelZoom={true}
								style={{ minHeight: "400px", minWidth: "600px" }}
							>
								<TileLayer
									url='https://api.mapbox.com/styles/v1/rfinvest/cldxmgsjj004q01padn7qd7q3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmZpbnZlc3QiLCJhIjoiY2xkeG1hcDNiMGZ6cjNxb2FmbmR2OHc2ciJ9.EGri_5kPtzXOzl4O4_6zLw'
									attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
								/>
							</MapContainer>
						</p>
					</div>


					<div className={s.rf}>
						<p> R&F INVESTMENS OOD </p>
						<p> Harmony Suites 12 </p>
						<p> 8240 Nesebar, Bulgarien </p>
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
