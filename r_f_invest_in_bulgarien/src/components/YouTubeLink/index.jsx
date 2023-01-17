import React from 'react';
import s from './index.module.css';

export default function YouTubeLink() {
	return (
		<div className={['wrapper', s.video_block].join(' ')}>
			<div className={s.info_text}>
				<h2>Immobilien in Bulgarien</h2>
				<p>
					Sehen Sie sich unser Video an und gehen Sie mit uns auf die Suche nach
					Ihrem Traumhaus
				</p>
			</div>

			<iframe
				width="670"
				height="420"
				src="https://www.youtube.com/embed/MeCWAFMu_XE"
				title="YouTube video player"
				// frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				// allowfullscreen
			></iframe>
		</div>
	);
}
