import React from 'react';
import s from './index.module.css';
import Socials from '../../UI/Socials';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <section className={s.header_container}>
      <div className={['wrapper', s.header_block].join(' ')}>
        <div className={s.contacts}>
          <FaPhoneAlt className={s.phone} />
          <p>Anton Fuchs +49 176 10175414</p>
          <FaPhoneAlt className={s.phone} />
          <p>Artur Runge +49 176 24672123</p>
        </div>

        <Socials placement='header' />
      </div>
    </section>
  );
}
