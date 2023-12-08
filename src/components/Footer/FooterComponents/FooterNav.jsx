import s from '../index.module.css';

export default function FooterNav({ setModal, setModalContent }) {
  return (
    <div className={s.nav_menu_wrap}>
      <span>
        <span>&copy;&nbsp;Copyright&nbsp;2023&nbsp;</span>
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
        {/*<li*/}
        {/*  onClick={() => {*/}
        {/*    setModal(true);*/}
        {/*    setModalContent('cookie');*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Cookie-Erklärung*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}
