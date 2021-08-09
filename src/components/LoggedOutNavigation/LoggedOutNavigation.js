import React from 'react';
import { Link } from 'react-router-dom';

function LoggedOutNavigation() {
	return (
		<>
			<Link to="/signup" className="navigation__link">
				Регистрация
			</Link>
			<Link to="/signup" className="navigation__link navigation__link_green">
				Войти
			</Link>
		</>
	);
}

export default LoggedOutNavigation;
