import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';

function Content({ scroll, isLoggedIn, movies, savedMovies, location, user }) {
	return (
		<>
			<Header scroll={scroll} isLoggedIn={isLoggedIn} />
			<Switch>
				<Route path="/movies">
					<Movies movies={movies} location={location} />
				</Route>
				<Route path="/saved-movies">
					<Movies movies={savedMovies} location={location} />
				</Route>
				<Route path="/profile">
					<Profile user={user} />
				</Route>
				<Route path="/">
					<Main />
				</Route>
			</Switch>
			<Footer location={location} />
		</>
	);
}

export default Content;
