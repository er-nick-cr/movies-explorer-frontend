import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import useInput from '../../hooks/useInput';
import useWindowWidth from '../../hooks/useWindowWidth';
import Content from '../Content/Content';
import StartPage from '../StartPage/StartPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
	const location = useLocation();

	const history = useHistory();

	const [scroll, setScroll] = useState(0);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [prevSearchedMovies, setPrevSearchedMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isMoviesSearched, setIsMoviesSearched] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSearchSucces, setIsSearchSucces] = useState(true);
	const [cardQuantity, setCardQuantity] = useState(0);
	const [extraCardQuantity, setExtraCardQuantity] = useState(0);
	const screenWidth = useWindowWidth();
	const [isResOk, setResOk] = useState();
	const [currentUser, setCurrentUser] = useState();
	const [isMovieSaved, setIsMovieSaved] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [shortMovies, setShortMovies] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
				.then(([userInfo, movies]) => {
					setCurrentUser(userInfo.user);
					setSavedMovies(movies);
					console.log(userInfo);
				})
				.catch((err) => console.log(err));
		}
	}, [isLoggedIn]);

	function handleSubmitSearch(e, searchValue) {
		e.preventDefault();
		setIsSubmitting(true);
		setSearchValue(searchValue);
		setIsMoviesSearched(true);
	}

	function handleLogin(email, password) {
		mainApi
			.loginUser(email, password)
			.then((data) => {
				if (data) {
					setIsLoggedIn(true);
					history.push('/');
				}
			})
			.catch((err) => console.log(err));
	}

	function handleRegister(name, email, password) {
		mainApi
			.registerUser(name, email, password)
			.then((res) => {
				if (res) {
					setResOk(true);
					handleLogin(email, password);
				}
			})
			.catch((err) => {
				if (err) {
					setResOk(false);
				}
			});
	}

	function handleLogout() {
		mainApi
			.logoutUser()
			.then((res) => {
				if (res) {
					setIsLoggedIn(false);
					history.push('/signin');
				}
			})
			.catch((err) => console.log(err));
	}

	function handleSaveMovie(movie) {
		mainApi
			.saveMovie(movie)
			.then((newMovie) => {
				setSavedMovies([newMovie, ...savedMovies]);
				setSearchedMovies((state) => {
					return state.map((m) => {
						if (m.id === newMovie.movieId) {
							m._id = newMovie._id;
						}
						return m;
					});
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleCheckboxToggle() {
		setShortMovies(!shortMovies);
	}

	useEffect(() => {
		if (shortMovies) {
			setPrevSearchedMovies(searchedMovies);
			setSearchedMovies((state) => {
				return state.filter((c) => {
					return c.duration < 40;
				});
			});
		} else if (!shortMovies) {
			setSearchedMovies(prevSearchedMovies);
		}
	}, [shortMovies]);

	function handleDeleteMovie(movie) {
		mainApi.deleteMovie(movie._id).then(() => {
			setSavedMovies((state) => {
				console.log(state);
				return state.filter((c) => {
					return c._id !== movie._id;
				});
			});
			setSearchedMovies((state) => {
				return state.map((m) => {
					if (m._id === movie._id) {
						delete m._id;
					}
					return m;
				});
			});

			console.log(searchedMovies);
			console.log(savedMovies);
		});
	}

	useEffect(() => {
		mainApi
			.checkToken()
			.then(({ user }) => {
				if (user) {
					setIsLoggedIn(true);
					console.log(window.history);
					history.push(
						`${
							location.pathname === '/signin' || location.pathname === 'signup'
								? '/'
								: location.pathname
						}`
					);
				}
			})
			.catch((err) => console.log(err));
	}, [history]);

	function handleUpdateUser(name, email) {
		mainApi
			.editProfile(name, email)
			.then((userInfo) => {
				setCurrentUser(userInfo);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		console.log(isSubmitting);
		if (isSubmitting && location.pathname === '/movies') {
			moviesApi
				.getMovies()
				.then((movies) => {
					console.log(movies);
					const result = movies.filter(
						(movie) =>
							movie.nameRU?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.description
								?.toLowerCase()
								.indexOf(searchValue.toLowerCase()) > -1 ||
							movie.director?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.nameEN?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.country?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1
					);
					const mapResult = result.map((searchedMovie) => {
						savedMovies.map((savedMovie) => {
							if (savedMovie.movieId === searchedMovie.id) {
								searchedMovie._id = savedMovie._id;
								setIsSaved(true);
								return searchedMovie;
							}
							return searchedMovie;
						});
						return searchedMovie;
					});

					console.log(mapResult);

					setSearchedMovies(mapResult);
					setIsSearchSucces(true);
					setIsSubmitting(false);
				})
				.catch((err) => {
					console.log(err);
					setIsSubmitting(false);
					setIsSearchSucces(false);
				});
		} else if (isSubmitting && location.pathname === '/saved-movies') {
			mainApi
				.getMovies()
				.then((movies) => {
					console.log(movies);
					const result = movies.filter(
						(movie) =>
							movie.nameRU?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.description
								?.toLowerCase()
								.indexOf(searchValue.toLowerCase()) > -1 ||
							movie.director?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.nameEN?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1 ||
							movie.country?.toLowerCase().indexOf(searchValue.toLowerCase()) >
								-1
					);
					console.log(result);
					setSavedMovies(result);
					setIsSearchSucces(true);
					setIsSubmitting(false);
				})
				.catch((err) => {
					console.log(err);
					setIsSubmitting(false);
					setIsSearchSucces(false);
				});
		}
	}, [searchValue, isSubmitting, location.pathname, savedMovies]);

	useEffect(() => {
		console.log(screenWidth);
		screenWidth >= 991
			? setCardQuantity(12)
			: screenWidth < 991 && screenWidth >= 768
			? setCardQuantity(8)
			: setCardQuantity(5);

		screenWidth >= 991 ? setExtraCardQuantity(3) : setExtraCardQuantity(2);
	}, [screenWidth]);

	function handleShowExtraCards() {
		setCardQuantity((prevQuantity) => prevQuantity + extraCardQuantity);
	}

	function handleGoBack() {
		history.goBack();
	}

	function handleOpenMenu() {
		setIsMenuOpen(true);
	}

	function handleCloseMenu() {
		setIsMenuOpen(false);
	}

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<SavedMoviesContext.Provider value={savedMovies}>
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
								handleRegister={handleRegister}
								buttonErrorText="Ошибка регистрации"
								isResOk={isResOk}
								location={location}
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
								buttonErrorText="Ошибка входа"
								isResOk={isResOk}
								handleLogin={handleLogin}
								location={location}
							/>
						</Route>
						<Route path={['/', '/saved-movies', '/movies', '/profile']} exact>
							<Content
								isMenuOpen={isMenuOpen}
								handleOpenMenu={handleOpenMenu}
								handleCloseMenu={handleCloseMenu}
								scroll={scroll}
								isLoggedIn={isLoggedIn}
								movies={searchedMovies}
								savedMovies={savedMovies}
								location={location}
								useInput={useInput}
								setSearchValue={setSearchValue}
								isSubmitting={isSubmitting}
								handleSubmitSearch={handleSubmitSearch}
								isSearchSucces={isSearchSucces}
								cardQuantity={cardQuantity}
								handleShowExtraCards={handleShowExtraCards}
								handleUpdateUser={handleUpdateUser}
								isMoviesSearched={isMoviesSearched}
								handleLogout={handleLogout}
								isMovieSaved={isMovieSaved}
								handleSaveMovie={handleSaveMovie}
								handleDeleteMovie={handleDeleteMovie}
								isSaved={isSaved}
								shortMovies={shortMovies}
								handleCheckboxToggle={handleCheckboxToggle}
							/>
						</Route>
						<Route path="/*">
							<NotFound handleGoBack={handleGoBack} />
						</Route>
					</Switch>
				</div>
			</SavedMoviesContext.Provider>
		</CurrentUserContext.Provider>
	);
}

export default App;
