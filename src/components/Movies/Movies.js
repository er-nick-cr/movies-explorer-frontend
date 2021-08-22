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
}) {
	return (
		<main className="movies">
			<SearchForm
				useInput={useInput}
				setSearchValue={setSearchValue}
				handleSubmitSearch={handleSubmitSearch}
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
