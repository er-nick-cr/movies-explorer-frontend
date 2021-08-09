import React from 'react';
import LoggedInNavigation from '../LoggedInNavigation/LoggedInNavigation';
import LoggedOutNavigation from '../LoggedOutNavigation/LoggedOutNavigation';

function Navigation({ isLoggedIn }) {
	return (
		<nav className="navigation">
			{isLoggedIn ? <LoggedInNavigation /> : <LoggedOutNavigation />}
		</nav>
	);
}

export default Navigation;
