import React from 'react';
import s from './index.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import InfoText from '../InfoText';
import Impressum from '../Impressum';
import Datenschutz from '../Datenschutz';
import Button from '../../UI/Button';

export default function Modal({ modal, setModal }) {
	return (
		<div className={[s.modal, modal ? s.active : ''].join(' ')}>
			<div className={s.modal_content}>
				<AiOutlineCloseCircle
					className={s.cross_icon}
					onClick={() => setModal(false)}
				/>

				<Routes>
					<Route path="/mehr_info" element={<InfoText />} />
					<Route path="/impressum" element={<Impressum />} />
					<Route path="/datenschutz" element={<Datenschutz />} />
				</Routes>

				<div className={s.modal_button}>
					<Button onClick={() => setModal(false)}>Schließen</Button>
				</div>
			</div>
		</div>
	);
}
