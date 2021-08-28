import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { CARD_QUANTITY, EXTRA_CARD_QUANTITY } from '../../utils/viewSettings';
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
	const [apiResult, setApiResult] = useState([]);
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [prevSearchedMovies, setPrevSearchedMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [prevSavedMovies, setPrevSavedMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isMoviesSearched, setIsMoviesSearched] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isProfileSubmiting, setisProfileSubmiting] = useState(false);
	const [isLoginSubmiting, setIsLoginSubmiting] = useState(false);
	const [isRegistrationSubmiting, setIsRegistrationSubmiting] = useState(false);
	const [isSearchSucces, setIsSearchSucces] = useState(true);
	const [cardQuantity, setCardQuantity] = useState(0);
	const [extraCardQuantity, setExtraCardQuantity] = useState(0);
	const screenWidth = useWindowWidth();
	const [isResOk, setResOk] = useState(true);
	const [isEditOk, setIsEditOk] = useState(true);
	const [currentUser, setCurrentUser] = useState();
	const [isSaved, setIsSaved] = useState(false);
	const [shortMovies, setShortMovies] = useState(false);
	const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			Promise.all([
				mainApi.getUserInfo(),
				mainApi.getMovies(),
				moviesApi.getMovies(),
			])
				.then(([userInfo, movies, searchedMovies]) => {
					setCurrentUser(userInfo.user);
					setSavedMovies(movies);
					setApiResult(searchedMovies);
					const store = JSON.parse(localStorage.getItem('searchedMovies'));
					if (store) {
						setSearchedMovies(store);
					}
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
		setIsLoginSubmiting(true);
		mainApi
			.loginUser(email, password)
			.then((data) => {
				if (data) {
					setIsLoggedIn(true);
					setResOk(true);
					setIsLoginSubmiting(false);
					history.push('/');
				}
			})
			.catch((err) => {
				if (err) {
					setResOk(false);
				}
			});
	}

	function handleRegister(name, email, password) {
		setIsRegistrationSubmiting(true);
		mainApi
			.registerUser(name, email, password)
			.then((res) => {
				if (res) {
					setResOk(true);
					setIsRegistrationSubmiting(false);
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
			setPrevSavedMovies(savedMovies);
			const filterResult = searchedMovies.filter((c) => {
				return c.duration < 40;
			});
			setSearchedMovies(filterResult);
			console.log(filterResult);
			localStorage.setItem('searchedMovies', JSON.stringify(filterResult));
			setSavedMovies((state) => {
				return state.filter((c) => {
					return c.duration < 40;
				});
			});
		} else if (!shortMovies && prevSearchedMovies.length > 0) {
			setSearchedMovies(prevSearchedMovies);
			console.log(prevSearchedMovies);
			localStorage.setItem(
				'searchedMovies',
				JSON.stringify(prevSearchedMovies)
			);
			setSavedMovies(prevSavedMovies);
		}
	}, [shortMovies]);

	function handleDeleteMovie(movie) {
		mainApi.deleteMovie(movie._id).then(() => {
			setSavedMovies((state) => {
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
		});
	}

	useEffect(() => {
		mainApi
			.checkToken()
			.then(({ user }) => {
				if (user) {
					setIsLoggedIn(true);
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

	function closeInfoTooltip() {
		setisInfoTooltipOpen(false);
	}

	function handleUpdateUser(name, email) {
		setisProfileSubmiting(true);
		mainApi
			.editProfile(name, email)
			.then((userInfo) => {
				setCurrentUser(userInfo.user);
				setisInfoTooltipOpen(true);
				setIsEditOk(true);
				setisProfileSubmiting(false);
			})
			.catch((err) => {
				setisInfoTooltipOpen(true);
				setIsEditOk(false);
			});
	}

	useEffect(() => {
		if (isSubmitting && location.pathname === '/movies') {
			const result = apiResult.filter(
				(movie) =>
					movie.nameRU?.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
					movie.description?.toLowerCase().indexOf(searchValue.toLowerCase()) >
						-1 ||
					movie.director?.toLowerCase().indexOf(searchValue.toLowerCase()) >
						-1 ||
					movie.nameEN?.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
					movie.country?.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
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
			setSearchedMovies(mapResult);
			localStorage.setItem('searchedMovies', JSON.stringify(mapResult));
			setIsSearchSucces(true);
			setIsSubmitting(false);
		} else if (isSubmitting && location.pathname === '/saved-movies') {
			mainApi
				.getMovies()
				.then((movies) => {
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
		screenWidth >= 991
			? setCardQuantity(CARD_QUANTITY.wide)
			: screenWidth < 991 && screenWidth >= 768
			? setCardQuantity(CARD_QUANTITY.middle)
			: setCardQuantity(CARD_QUANTITY.narrow);

		screenWidth >= 1280
			? setExtraCardQuantity(EXTRA_CARD_QUANTITY.wide)
			: screenWidth < 1280 && screenWidth >= 991
			? setExtraCardQuantity(EXTRA_CARD_QUANTITY.middle)
			: setExtraCardQuantity(EXTRA_CARD_QUANTITY.narrow);
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
								isRegistrationSubmiting={isRegistrationSubmiting}
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
								isLoginSubmiting={isLoginSubmiting}
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
								handleSaveMovie={handleSaveMovie}
								handleDeleteMovie={handleDeleteMovie}
								isSaved={isSaved}
								shortMovies={shortMovies}
								handleCheckboxToggle={handleCheckboxToggle}
								isEditOk={isEditOk}
								isOpen={isInfoTooltipOpen}
								onClose={closeInfoTooltip}
								isProfileSubmiting={isProfileSubmiting}
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
