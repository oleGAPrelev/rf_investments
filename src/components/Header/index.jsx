import React from 'react';
import s from './index.module.css';
import Socials from '../../UI/Socials';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={['container', s.header_container].join(' ')}>
        <div className={s.contacts}>
          <div className={s.contacts_item_wrapper}>
            <FaPhoneAlt className={s.phone} />
            <p>
              Anton Fuchs <br className={s.break} /> +49 176 10175414
            </p>
          </div>
          <div className={s.contacts_item_wrapper}>
            <FaPhoneAlt className={s.phone} />
            <p>
              Artur Runge <br className={s.break} />
              +49 176 24672123
            </p>
          </div>
        </div>

        <Socials placement='header' />
      </div>
    </header>
  );
}
