import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, location }) {
	return (
		<main className="movies">
			<SearchForm />
			{movies ? (
				<MoviesCardList movies={movies} location={location} />
			) : (
				<Preloader />
			)}
		</main>
	);
}

export default Movies;
