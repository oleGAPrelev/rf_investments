import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import logo from './media/garden_logo.png';
import bag from './media/bag_nav.png';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo_btn}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<Button>Каталог</Button>
			</div>

			<ul className={s.nav_menu}>
				<Link to="/categories">Категории</Link>
				<Link to="/coupon">Купон</Link>
				<Link to="/stock">Акции</Link>
				<Link to="/contacts">Контакты</Link>
				<Link to="">
					<img src={bag} alt="bag" />
				</Link>
			</ul>
		</nav>
	);
}
