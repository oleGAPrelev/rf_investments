import React from 'react';
import {Link} from 'react-scroll';
import Button from '../../UI/Button';
import s from './index.module.css';
import Logo from '../../UI/Logo';

export default function Nav() {
  return (
    <section className={s.nav} style={{backgroundColor: 'yellow'}}>
      <div id={'test'} style={{backgroundColor: 'red', minHeight: '100%'}}>
        <div className={'container'} style={{backgroundColor: 'green', height: '100%'}}>
          <div className={[s.nav_contacts, s.headlines].join(' ')}>
            <Logo/>
            <h1>Träumen Sie von einer Immobilie am Meer?</h1>
            <p className={s.header_description}>
              Wenden Sie sich an uns und unsere Qualifizierten Mitarbeiter werden
              eine Lösung für Sie finden.
            </p>
            <div className={s.contact_button_wrapper}>
              <Link
                to="consultant"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button>Kontaktiere uns</Button>
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
