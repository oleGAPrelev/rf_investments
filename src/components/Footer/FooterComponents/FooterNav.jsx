import s from '../index.module.css';

export default function FooterNav({ setModal, setModalContent }) {
  return (
    <div className={s.nav_menu_wrap}>
      <span>
        &copy;&nbsp;Copyright&nbsp;2023&nbsp;/&nbsp;R&F&nbsp;Invesmens
      </span>
      <ul className={s.nav_menu}>
        <li
          onClick={() => {
            setModal(true);
            setModalContent('datenschutz');
          }}
        >
          Datenschutz
        </li>
        <li
          onClick={() => {
            setModal(true);
            setModalContent('impressum');
          }}
        >
          Impressum
        </li>
        <li
          onClick={() => {
            setModal(true);
          }}
        >
          Cookie-Einstellungen
        </li>
      </ul>
    </div>
  );
}
