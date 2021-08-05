import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="navigation">
			<Link to="/signup" className="navigation__link">
				Регистрация
			</Link>
			<Link to="/signup" className="navigation__link navigation__link_green">
				Войти
			</Link>
		</nav>
	);
}

export default Navigation;
