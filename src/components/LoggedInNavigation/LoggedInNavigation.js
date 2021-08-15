import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/header-profile-icon.svg';

function LoggedInNavigation({
	isMenuOpen,
	handleOpenMenu,
	handleCloseMenu,
	location,
}) {
	return (
		<>
			<div
				className={`navigation__container ${
					isMenuOpen ? 'navigation__container_active menu-open' : ''
				}`}
			>
				<ul className="navigation__nav navigation__nav_small">
					<li
						className={`navigation__item navigation__item_small navigation__item_hidden overlay ${
							location.pathname === '/' ? 'navigation__item_active' : ''
						}`}
					>
						<Link
							className="navigation__link navigation__link_mobile"
							to="/"
							onClick={handleCloseMenu}
						>
							Главная
						</Link>
					</li>
					<li
						className={`navigation__item navigation__item_small overlay ${
							location.pathname === '/movies' ? 'navigation__item_active' : ''
						}`}
					>
						<Link
							className="navigation__link navigation__link_mobile"
							to="/movies"
							onClick={handleCloseMenu}
						>
							Фильмы
						</Link>
					</li>
					<li
						className={`navigation__item navigation__item_small overlay ${
							location.pathname === '/saved-movies'
								? 'navigation__item_active'
								: ''
						}`}
					>
						<Link
							className="navigation__link navigation__link_mobile"
							to="/saved-movies"
							onClick={handleCloseMenu}
						>
							Сохраненные фильмы
						</Link>
					</li>
					<li className="navigation__item navigation__item_small overlay">
						<Link
							to="/profile"
							className={`navigation__link navigation__link_account ${
								location.pathname === '/profile'
									? 'navigation__link_account-active'
									: ''
							}`}
							onClick={handleCloseMenu}
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
				<button
					type="button"
					className="navigation__close-button"
					onClick={handleCloseMenu}
				></button>
			</div>
			<button
				type="button"
				className="navigation__burger"
				onClick={handleOpenMenu}
			></button>
		</>
	);
}

export default LoggedInNavigation;
