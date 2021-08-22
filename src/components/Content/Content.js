import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';

function Content({
	scroll,
	isLoggedIn,
	movies,
	savedMovies,
	location,
	user,
	isMenuOpen,
	handleOpenMenu,
	handleCloseMenu,
	useInput,
	setSearchValue,
	isSubmitting,
	handleSubmitSearch,
	isSearchSucces,
	cardQuantity,
	handleShowExtraCards,
	handleUpdateUser,
}) {
	return (
		<>
			<Header
				scroll={scroll}
				isLoggedIn={isLoggedIn}
				isMenuOpen={isMenuOpen}
				handleOpenMenu={handleOpenMenu}
				handleCloseMenu={handleCloseMenu}
				location={location}
			/>
			<Switch>
				<Route path="/movies">
					<Movies
						movies={movies}
						location={location}
						savedClass=""
						useInput={useInput}
						setSearchValue={setSearchValue}
						isSubmitting={isSubmitting}
						handleSubmitSearch={handleSubmitSearch}
						isSearchSucces={isSearchSucces}
						cardQuantity={cardQuantity}
						handleShowExtraCards={handleShowExtraCards}
					/>
				</Route>
				<Route path="/saved-movies">
					<Movies
						movies={savedMovies}
						location={location}
						savedClass="card__button_saved"
						useInput={useInput}
						setSearchValue={setSearchValue}
						isSubmitting={isSubmitting}
						handleSubmitSearch={handleSubmitSearch}
						isSearchSucces={isSearchSucces}
						cardQuantity={cardQuantity}
						handleShowExtraCards={handleShowExtraCards}
					/>
				</Route>
				<Route path="/profile">
					<Profile
						user={user}
						useInput={useInput}
						handleUpdateUser={handleUpdateUser}
					/>
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
