import React from 'react';
// import Logo from '../../UI/Logo';
// import Address from './FooterComponents/Address';
// import Map from './FooterComponents/Map';
// import Socials from '../../UI/Socials';
// import PhoneContacts from './FooterComponents/PhoneContacts';
// import FooterNav from './FooterComponents/FooterNav';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileTabletView from './MobileTabletView';
import DesktopView from './DesktopView';
import s from './index.module.css';

export default function Footer({ setModal }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <footer className={s.footer}>
      {isDesktop ? (
        <DesktopView setModal={setModal} />
      ) : (
        <MobileTabletView setModal={setModal} />
      )}

      {/* <div className={s.footer_logo_address_wrapper}>
          <Logo />
          <Address />
        </div>

        <div className={s.footer_map_wrapper}>
          <Map />
        </div>

        <div className={s.footer_socials_phones_wrapper}>
          <Socials placement='footer' />
          <PhoneContacts />
        </div>

        <FooterNav setModal={setModal} /> */}
    </footer>
  );
}
