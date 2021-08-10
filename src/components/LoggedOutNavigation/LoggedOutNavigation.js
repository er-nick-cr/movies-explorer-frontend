import React from 'react';
import { Link } from 'react-router-dom';

function LoggedOutNavigation() {
	return (
		<ul className="navigation__nav">
			<li className="navigation__item">
				<Link to="/signup" className="navigation__link">
					Регистрация
				</Link>
			</li>
			<li className="navigation__item navigation__item_green">
				<Link to="/signin" className="navigation__link navigation__link_green">
					Войти
				</Link>
			</li>
		</ul>
	);
}

export default LoggedOutNavigation;
