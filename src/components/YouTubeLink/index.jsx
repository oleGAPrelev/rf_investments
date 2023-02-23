import React from 'react';
import s from './index.module.css';

export default function YouTubeLink() {
  return (
    <section className='section'>
      <div className={['container', s.video_block_container].join(' ')}>
        <div className={s.video_block_info_text}>
          <h2>Immobilien in Bulgarien</h2>
          <p>
            Sehen Sie sich unser Video an und gehen Sie mit uns auf die Suche
            nach Ihrem Traumhaus
          </p>
        </div>

        <iframe
          width='100%'
          height='360'
          src='https://www.youtube.com/embed/MeCWAFMu_XE'
          title='YouTube video player'
          // frameborder="0"
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          // allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
