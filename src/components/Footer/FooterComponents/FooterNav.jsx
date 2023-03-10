import {Link} from 'react-router-dom';
import s from '../index.module.css';

export default function FooterNav({setModal}) {
  return (
    <div className={s.nav_menu_wrap}>
      <span>&copy;&nbsp;Copyright&nbsp;2023&nbsp;/&nbsp;R&F&nbsp;Invesmens</span>
      <ul className={s.nav_menu}>
        <Link to="datenschutz" onClick={() => setModal(true)}>
          Datenschutz
        </Link>
        <Link to="impressum" onClick={() => setModal(true)}>
          Impressum
        </Link>
        <Link to="cookie" onClick={() => setModal(true)}>
          Cookie-Einstellungen
        </Link>
      </ul>
    </div>
  );
}
