import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
	movies,
	location,
	savedClass,
	useInput,
	setSearchValue,
	isSubmitting,
	handleSubmitSearch,
	isSearchSucces,
	cardQuantity,
	handleShowExtraCards,
	isMoviesSearched,
	isMovieSaved,
	handleSaveMovie,
	imageUrl,
	handleDeleteMovie,
	isSaved,
	shortMovies,
	handleCheckboxToggle,
}) {
	return (
		<main className="movies">
			<SearchForm
				useInput={useInput}
				setSearchValue={setSearchValue}
				handleSubmitSearch={handleSubmitSearch}
				handleCheckboxToggle={handleCheckboxToggle}
			/>
			{isSubmitting ? (
				<Preloader />
			) : isSearchSucces ? (
				<MoviesCardList
					movies={movies}
					location={location}
					savedClass={savedClass}
					cardQuantity={cardQuantity}
					handleShowExtraCards={handleShowExtraCards}
					isMoviesSearched={isMoviesSearched}
					isMovieSaved={isMovieSaved}
					handleSaveMovie={handleSaveMovie}
					imageUrl={imageUrl}
					handleDeleteMovie={handleDeleteMovie}
					isSaved={isSaved}
					shortMovies={shortMovies}
				/>
			) : (
				<p className="movies__error">
					Во время запроса произошла ошибка. Возможно, проблема с соединением
					или сервер недоступен. Подождите немного и попробуйте ещё раз
				</p>
			)}
		</main>
	);
}

export default Movies;
