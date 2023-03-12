import { FaPhoneAlt } from 'react-icons/fa';
import s from '../index.module.css';

export default function PhoneContacts() {
  return (
    <div>
      <div className={s.contacts}>
        <FaPhoneAlt className={s.phone} />
        <p>
          Anton Fuchs
          <a className={s.contact_item} href='tel:+4917610175414'>
            +49 176 10175414
          </a>
        </p>
      </div>

      <div className={s.contacts}>
        <FaPhoneAlt className={s.phone} />
        <p>
          Artur Runge{' '}
          <a className={s.contact_item} href='tel:+4917624672123'>
            +49 176 24672123{' '}
          </a>
        </p>
      </div>
    </div>
  );
}
