import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ scroll, isLoggedIn }) {
	return (
		<header className={`header ${scroll > 0 ? `header__scrolled` : ``}`}>
			<Link to="/">
				<img className="header__logo" src={logo} alt="logo" />
			</Link>
			<Navigation isLoggedIn={isLoggedIn} />
		</header>
	);
}

export default Header;
