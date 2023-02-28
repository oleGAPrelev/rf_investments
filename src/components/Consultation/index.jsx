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
      <video className={s.background_video} autoPlay='start' muted loop>
        <source src={video} type='video/mp4'></source>
      </video>

      <div className={['container', s.consultation_container].join(' ')}>
        <div className={s.consultation_content}>
          <div className={s.consultation_text}>
            <h2>Brauchen Sie eine Beratung?</h2>
            <p>Kontaktieren Sie uns und wir helfen Ihnen</p>
          </div>

          <div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
