import React from 'react';
import s from './index.module.css';

export default function Cookie() {
	return (
		<div className={s.cookie}>
			<script id="CookieDeclaration" src="https://consent.cookiebot.com/53dbd4c1-0d7c-4e37-a9dd-c6e5709b4430/cd.js" type="text/javascript" async></script>
		</div>
	);
}
