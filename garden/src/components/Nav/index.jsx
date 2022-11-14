import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import logo from './media/garden_logo.png';
import bag from './media/bag_nav.png';

export default function Nav() {
	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo_btn}>
				<a href="a">
					<img src={logo} alt="logo" />
				</a>
				<Button>Каталог</Button>
			</div>

			<ul className={s.nav_menu}>
				<li>Категории</li>
				<li>Купон</li>
				<li>Акции</li>
				<li>Контакты</li>
				<img src={bag} alt="bag" />
			</ul>
		</nav>
	);
}
