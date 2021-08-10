import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Content from '../Content/Content';
import StartPage from '../StartPage/StartPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import movies from '../../utils/movies';
import savedMovies from '../../utils/savedMovies';
import user from '../../utils/user';

function App() {
	const [scroll, setScroll] = useState(0);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const location = useLocation();

	const history = useHistory();

	function handleGoBack() {
		history.goBack();
	}

	console.log(history);

	useEffect(() => {
		setIsLoggedIn(true);
	}, [isLoggedIn]);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="page">
			<Switch>
				<Route path="/signup" exact>
					<StartPage
						heading="Добро пожаловать!"
						buttonText="Зарегистрироваться"
						component={Register}
						question="Уже зарегистрированы?"
						link="/signin"
						linkText="Войти"
					/>
				</Route>
				<Route path="/signin" exact>
					<StartPage
						heading="Рады видеть!"
						buttonText="Войти"
						component={Login}
						question="Ещё не зарегистрированы?"
						link="/signup"
						linkText="Регистрация"
					/>
				</Route>
				<Route path={['/', '/saved-movies', '/movies', '/profile']} exact>
					<Content
						scroll={scroll}
						isLoggedIn={isLoggedIn}
						movies={movies}
						savedMovies={savedMovies}
						location={location}
						user={user}
					/>
				</Route>
				<Route path="/*">
					<NotFound handleGoBack={handleGoBack} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
