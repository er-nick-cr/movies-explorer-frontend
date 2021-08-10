import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/header-profile-icon.svg';

function LoggedInNavigation() {
	return (
		<ul className="navigation__nav">
			<li className="navigation__item">
				<Link className="navigation__link" to="/movies">
					Фильмы
				</Link>
			</li>
			<li className="navigation__item">
				<Link className="navigation__link" to="/saved-movies">
					Сохраненные фильмы
				</Link>
			</li>
			<li className="navigation__item">
				<Link
					to="/profile"
					className="navigation__link navigation__link_account"
				>
					<img
						src={profileIcon}
						className="navigation__progile-icon"
						alt="profile icon"
					/>
					&ensp;Аккаунт
				</Link>
			</li>
		</ul>
	);
}

export default LoggedInNavigation;
