import React from 'react';
import s from './index.module.css';
import { ReactComponent as GraphicsScaleIcon } from './media/graphics-scale.svg';
import { ReactComponent as MoneyPriceIcon } from './media/money_price_icon.svg';
import { ReactComponent as PercentIcon } from './media/discount_percent_icon.svg';
import { ReactComponent as LawIcon } from './media/law_icon.svg';
import { ReactComponent as HouseIcon } from './media/house_icon.svg';

export default function Services() {
  return (
    <section className='section'>
      <div className={['container', s.services_container].join(' ')}>
        <h2>
          <span className={s.accent}>R & F Investments</span> in&nbsp;Bulgarien
        </h2>

        <div className={s.services_content_container}>
          <div className={s.services_item_container}>
            <GraphicsScaleIcon className={s.services_icon} />
            <p>
              Unser Unternehmen arbeitet nur mit marktführenden Bauträgern in
              Bulgarien
            </p>
          </div>

          <div className={s.services_item_container}>
            <MoneyPriceIcon className={s.services_icon} />
            <p>
              Günstiger Preis direkt vom Bauträger ohne Aufpreis und Provisionen
            </p>
          </div>

          <div className={s.services_item_container}>
            <PercentIcon className={s.services_icon} />
            <p>
              Zinsfreier Teilzahlungsplan für den Erwerb von 
              <br className={s.services_break} />
              Wohnräumen
            </p>
          </div>

          <div className={s.services_item_container}>
            <LawIcon className={s.services_icon} />
            <p>
              Kostenlose Rechtsberatung durch unsere Vertragsanwälte bei der
              Transaktionsabwicklung
            </p>
          </div>

          <div className={s.services_item_container}>
            <HouseIcon className={s.services_icon} />
            <p>
              Unterstützung bei der Vermietung der Immobilien. Technische und
              Kaufmännische Verwaltung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
