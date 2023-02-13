import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../UI/Button';
import s from './index.module.css';
import Logo from '../Logo';

export default function Nav() {
  return (
    <nav className={s.nav_container}>
      <div className={['wrapper', s.nav_block].join(' ')}>
        <Logo />
        <ul className={s.nav_menu}>
          <Link
            to='consultant'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Kontakt
          </Link>
        </ul>
      </div>
      <div className={['wrapper', s.nav_contacts].join(' ')}>
        <h2>Träumen Sie von eine Immobilie am Meer?</h2>
        <p>
          Wenden Sie sich an uns und unsere Qualifizierte Mitarbeiter finden für
          Sie eine Losung!
        </p>
        <Link
          to='consultant'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Button> Kontaktiere Uns</Button>
        </Link>
      </div>
    </nav>
  );
}
