import React from 'react';
import LoggedInNavigation from '../LoggedInNavigation/LoggedInNavigation';
import LoggedOutNavigation from '../LoggedOutNavigation/LoggedOutNavigation';

function Navigation({
	isLoggedIn,
	isMenuOpen,
	handleOpenMenu,
	handleCloseMenu,
	location,
}) {
	return (
		<nav className="navigation">
			{isLoggedIn ? (
				<LoggedInNavigation
					isMenuOpen={isMenuOpen}
					handleOpenMenu={handleOpenMenu}
					handleCloseMenu={handleCloseMenu}
					location={location}
				/>
			) : (
				<LoggedOutNavigation />
			)}
		</nav>
	);
}

export default Navigation;
