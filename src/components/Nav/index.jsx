import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../UI/Button';
import s from './index.module.css';
import Logo from '../../UI/Logo';

export default function Nav() {
  return (
    <section className={s.nav}>
      <div className='container'>
        <div className={s.nav_block}>
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
        <div className={s.nav_contacts}>
          <h1>Träumen Sie von eine Immobilie am Meer?</h1>
          <p>
            Wenden Sie sich an uns und unsere Qualifizierte Mitarbeiter finden
            für Sie eine Losung!
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
      </div>
    </section>
  );
}
