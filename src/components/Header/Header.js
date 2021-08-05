import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
	return (
		<header className="header">
			<img className="header__logo" src={logo} alt="logo" />
			<Navigation />
		</header>
	);
}

export default Header;
