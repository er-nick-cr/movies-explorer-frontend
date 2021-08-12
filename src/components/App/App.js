import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import validator from 'validator';
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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const location = useLocation();

	const history = useHistory();

	const useValidation = (value, validations, validateEmail) => {
		const [isEmpty, setIsEmpty] = useState(true);
		const [minLengthError, setMinLengthError] = useState(false);
		const [maxLengthError, setMaxLengthError] = useState(false);
		const [errorMessage, setErrorMessage] = useState('');
		const [isEmailError, setIsEmailError] = useState(false);

		useEffect(() => {
			for (const validation in validations) {
				switch (validation) {
					case 'minLength':
						value.length < validations[validation]
							? setMinLengthError(true)
							: setMinLengthError(false);
						break;
					case 'maxLength':
						value.length > validations[validation]
							? setMaxLengthError(true)
							: setMaxLengthError(false);
						break;
					case 'isEmpty':
						value ? setIsEmpty(false) : setIsEmpty(true);
						break;
					case 'isEmail':
						validator.isEmail(value)
							? setIsEmailError(false)
							: setIsEmailError(true);
						break;
				}

				minLengthError
					? setErrorMessage('Колличество символов не может быть меньше 2')
					: maxLengthError && value
					? setErrorMessage('Колличество символов не может быть больше 30')
					: !value
					? setErrorMessage('Поле не может быть пустым')
					: isEmailError
					? setErrorMessage('Введите email')
					: setErrorMessage('');
			}
		}, [value]);

		return {
			isEmpty,
			minLengthError,
			maxLengthError,
			errorMessage,
			isEmailError,
		};
	};

	const useInput = (initialValue, validations, validateEmail) => {
		const [value, setValue] = useState(initialValue);
		const [isDirty, setIsDirty] = useState(false);
		const valid = useValidation(value, validations, validateEmail);

		const onChange = (e) => {
			setValue(e.target.value);
		};

		const onBlur = (e) => {
			setIsDirty(true);
		};

		return {
			value,
			isDirty,
			onChange,
			onBlur,
			...valid,
		};
	};

	function handleGoBack() {
		history.goBack();
	}

	function handleOpenMenu() {
		setIsMenuOpen(true);
	}

	function handleCloseMenu() {
		setIsMenuOpen(false);
	}

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
						useInput={useInput}
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
						useInput={useInput}
					/>
				</Route>
				<Route path={['/', '/saved-movies', '/movies', '/profile']} exact>
					<Content
						isMenuOpen={isMenuOpen}
						handleOpenMenu={handleOpenMenu}
						handleCloseMenu={handleCloseMenu}
						scroll={scroll}
						isLoggedIn={isLoggedIn}
						movies={movies}
						savedMovies={savedMovies}
						location={location}
						user={user}
						useInput={useInput}
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
