import Logo from '../../UI/Logo';
import Address from './FooterComponents/Address';
import Map from './FooterComponents/Map';
import Socials from '../../UI/Socials';
import PhoneContacts from './FooterComponents/PhoneContacts';
import FooterNav from './FooterComponents/FooterNav';
import s from './index.module.css';

export default function DesktopView({ setModal }) {
  return (
    <div>
      <div className={s.footer_container}>
        <div className={s.footer_map_wrapper}>
          <Map />
        </div>

        <div className={s.footer_desktop_content_wrapper}>
          <div className={s.footer_logo_address_wrapper}>
            <Logo />
            <Address />
          </div>

          <div className={s.footer_socials_phones_wrapper}>
            <Socials placement='footer' />
            <PhoneContacts />
          </div>
        </div>
      </div>
      <FooterNav setModal={setModal} />
    </div>
  );
}
