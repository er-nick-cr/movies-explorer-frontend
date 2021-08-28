import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

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
	isMoviesSearched,
	handleLogout,
	isMovieSaved,
	handleSaveMovie,
	handleDeleteMovie,
	isSaved,
	shortMovies,
	handleCheckboxToggle,
	isEditOk,
	isOpen,
	onClose,
	isProfileSubmiting,
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
					<ProtectedRoute
						movies={movies}
						imageUrl="https://api.nomoreparties.co"
						location={location}
						savedClass=""
						useInput={useInput}
						setSearchValue={setSearchValue}
						isSubmitting={isSubmitting}
						handleSubmitSearch={handleSubmitSearch}
						isSearchSucces={isSearchSucces}
						cardQuantity={cardQuantity}
						handleShowExtraCards={handleShowExtraCards}
						isMoviesSearched={isMoviesSearched}
						component={Movies}
						isLoggedIn={isLoggedIn}
						isMovieSaved={isMovieSaved}
						handleSaveMovie={handleSaveMovie}
						handleDeleteMovie={handleDeleteMovie}
						isSaved={isSaved}
						shortMovies={shortMovies}
						handleCheckboxToggle={handleCheckboxToggle}
					/>
				</Route>
				<Route path="/saved-movies">
					<ProtectedRoute
						movies={savedMovies}
						imageUrl=""
						location={location}
						savedClass="card__button_saved"
						useInput={useInput}
						setSearchValue={setSearchValue}
						isSubmitting={isSubmitting}
						handleSubmitSearch={handleSubmitSearch}
						isSearchSucces={isSearchSucces}
						cardQuantity={100}
						handleShowExtraCards={handleShowExtraCards}
						isMoviesSearched={isMoviesSearched}
						component={Movies}
						isLoggedIn={isLoggedIn}
						isMovieSaved={isMovieSaved}
						handleSaveMovie={handleSaveMovie}
						handleDeleteMovie={handleDeleteMovie}
						isSaved={isSaved}
						shortMovies={shortMovies}
						handleCheckboxToggle={handleCheckboxToggle}
					/>
				</Route>
				<Route path="/profile">
					<ProtectedRoute
						user={user}
						useInput={useInput}
						handleUpdateUser={handleUpdateUser}
						handleLogout={handleLogout}
						component={Profile}
						isLoggedIn={isLoggedIn}
						isProfileSubmiting={isProfileSubmiting}
					/>
					<InfoTooltip isEditOk={isEditOk} isOpen={isOpen} onClose={onClose} />
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
