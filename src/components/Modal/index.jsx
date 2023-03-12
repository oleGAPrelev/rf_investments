import React from 'react';
import s from './index.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import InfoText from '../InfoText';
import Impressum from '../Impressum';
import Datenschutz from '../Datenschutz';
import Button from '../../UI/Button';

export default function Modal({ modal, setModal, modalContent }) {
  return (
    <div className={['container', s.modal, modal ? s.active : ''].join(' ')}>
      <div className={s.modal_content}>
        <AiOutlineCloseCircle
          className={s.cross_icon}
          onClick={() => setModal(false)}
        />

        {modalContent === 'touren' && <InfoText />}
        {modalContent === 'impressum' && <Impressum />}
        {modalContent === 'datenschutz' && <Datenschutz />}
        {modalContent === 'cookie' && <Datenschutz />}

        <div className={s.modal_button}>
          <Button onClick={() => setModal(false)}>Schließen</Button>
        </div>
      </div>
    </div>
  );
}
