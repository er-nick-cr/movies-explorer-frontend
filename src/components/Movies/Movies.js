import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, location, savedClass, useInput, setSearchValue }) {
	return (
		<main className="movies">
			<SearchForm useInput={useInput} setSearchValue={setSearchValue} />
			{movies ? (
				<MoviesCardList
					movies={movies}
					location={location}
					savedClass={savedClass}
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}

export default Movies;
