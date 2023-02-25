import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import s from './index.module.css';
import touren from './media/touren_img.png';

export default function Touren({ setModal }) {
  return (
    <section className={['section', s.touren_section].join(' ')}>
      <div className={'container'}>
        <h2 className={s.touren_title}>Aktuelle Touren</h2>

        <div className={s.touren_block}>
          <img src={touren} alt='touren' />

          <div className={s.touren_block_content}>
            <h3>
              Bulgarien kennenlernen für <span className={s.accent}> 250 </span>
              EUR
            </h3>
            <p>
              Unser erfahrenes Personal organisiert Ihre gesamte Reise von Ihren
              Ankunft in Bulgarien bis zu Ihrer Abreise für nur 250 -EUR
            </p>

            <Link to='mehr_info'>
              <Button onClick={() => setModal(true)}> Mehr</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
