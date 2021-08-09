import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import movies from '../../utils/movies';
import savedMovies from '../../utils/savedMovies';

function App() {
	const [scroll, setScroll] = useState(0);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="page">
			<Header scroll={scroll} isLoggedIn={isLoggedIn} />
			<Switch>
				<Route path="/movies">
					<Movies movies={movies} />
				</Route>
				<Route path="/saved-movies">
					<Movies movies={savedMovies} />
				</Route>
				<Route path="/">
					<Main />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
