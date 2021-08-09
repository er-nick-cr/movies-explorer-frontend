import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/header-profile-icon.svg';

function LoggedInNavigation() {
	return (
		<>
			<Link className="navigation__link" to="/movies">
				Фильмы
			</Link>
			<Link className="navigation__link" to="/saved-movies">
				Сохраненные фильмы
			</Link>
			<Link to="/profile" className>
				<img
					src={profileIcon}
					className="navigation__progile-icon"
					alt="profile icon"
				/>
				&ensp;Аккаунт
			</Link>
		</>
	);
}

export default LoggedInNavigation;
