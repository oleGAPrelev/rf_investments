import React from 'react';
import ConsultationForm from '../ConsultationForm';
import s from './index.module.css';
import video from './Video/video_bg.mp4';

export default function Consultation() {
  return (
    <section
      className={['section', s.consultation_section].join(' ')}
      id='consultant'
    >
      <div className={['container', s.consultation_container].join(' ')}>
        <video src={video} autoPlay='start' muted loop></video>
        <div className={s.effect}>
          <div className={['wrapper', s.consultation_block].join(' ')}>
            <div className={s.consultation_text}>
              <h2>Brauchen Sie eine Beratung?</h2>
              <p>Kontaktieren Sie uns und wir helfen Ihnen</p>
            </div>

            <div>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
