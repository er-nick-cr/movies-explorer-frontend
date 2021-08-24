import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function MoviesCard({
	movie,
	savedClass,
	isMovieSaved,
	handleSaveMovie,
	imageUrl,
	location,
	handleDeleteMovie,
	isSaved,
}) {
	const currentUser = React.useContext(CurrentUserContext);
	const savedMovies = React.useContext(SavedMoviesContext);

	// useEffect(() => {
	// 	savedMovies.map((savedMovie) => {
	// 		if (savedMovie.movieId === movie.id) {
	// 			setIsSaved(true);
	// 			movie._id = savedMovie._id;
	// 		}
	// 	});
	// }, [location.pathname, movie.id, savedMovies]);

	function handleDuration(duration) {
		const hours = Math.trunc(duration / 60);
		const minutes = duration % 60;
		return `${hours}ч${minutes}м`;
	}

	function handleClickSaveMovie() {
		handleSaveMovie(movie);
	}

	function handleClickDeleteMovie() {
		handleDeleteMovie(movie);
	}

	return (
		<article
			className="card"
			data-card-id={movie.movieId || movie.id}
			data-owner-id={isMovieSaved ? currentUser._id : ''}
		>
			<img
				src={`${imageUrl}${movie.image.url ? movie.image?.url : movie.image}`}
				alt={movie.nameRU}
				className="card__pic"
			/>
			<div className="card__footer">
				<div className="card__description">
					<h2 className="card__name">{movie.nameRU}</h2>
					<p className="card__duration">{handleDuration(movie.duration)}</p>
				</div>
				<button
					type="button"
					className={`card__button overlay cursor ${savedClass} ${
						movie._id ? 'card__button__active' : ''
					}`}
					onClick={movie._id ? handleClickDeleteMovie : handleClickSaveMovie}
				></button>
			</div>
		</article>
	);
}

export default MoviesCard;
