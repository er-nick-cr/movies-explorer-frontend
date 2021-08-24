import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
	movies,
	location,
	savedClass,
	cardQuantity,
	handleShowExtraCards,
	isMoviesSearched,
	isMovieSaved,
	handleSaveMovie,
	imageUrl,
	handleDeleteMovie,
	isSaved,
	shortMovies,
}) {
	return (
		<section className="card-list">
			<div className="card-list__cards">
				{movies?.length > 0 ? (
					movies.map((movie, index) => {
						if (index < cardQuantity) {
							return (
								<MoviesCard
									key={movie.id || movie._id}
									movie={movie}
									savedClass={savedClass}
									isMovieSaved={isMovieSaved}
									handleSaveMovie={handleSaveMovie}
									imageUrl={imageUrl}
									location={location}
									handleDeleteMovie={handleDeleteMovie}
									isSaved={isSaved}
								/>
							);
						}
						return null;
					})
				) : isMoviesSearched ? (
					<p className="card-list__not-found">Ничего не найдено</p>
				) : (
					''
				)}
			</div>
			<div className="card-list__else">
				{location.pathname === '/movies' &&
					movies.length > 0 &&
					movies.length > cardQuantity && (
						<button
							type="button"
							className="card-list__button overlay cursor"
							onClick={handleShowExtraCards}
						>
							Ещё
						</button>
					)}
			</div>
		</section>
	);
}

export default MoviesCardList;
