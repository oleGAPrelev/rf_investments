import { FaPhoneAlt } from 'react-icons/fa';
import s from '../index.module.css';

export default function PhoneContacts() {
  return (
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
  );
}
