import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({
	scroll,
	isLoggedIn,
	isMenuOpen,
	handleOpenMenu,
	handleCloseMenu,
	location,
}) {
	return (
		<header className={`header ${scroll > 0 ? `header__scrolled` : ``}`}>
			<Link to="/">
				<img className="header__logo cursor overlay" src={logo} alt="logo" />
			</Link>
			<Navigation
				isLoggedIn={isLoggedIn}
				isMenuOpen={isMenuOpen}
				handleOpenMenu={handleOpenMenu}
				handleCloseMenu={handleCloseMenu}
				location={location}
			/>
		</header>
	);
}

export default Header;
