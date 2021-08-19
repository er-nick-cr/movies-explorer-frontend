import React from 'react';

function MoviesCard({ movie, savedClass }) {
	function handleDuration(duration) {
		const hours = Math.trunc(duration / 60);
		const minutes = duration % 60;
		return `${hours}ч${minutes}м`;
	}

	return (
		<article
			className="card"
			data-card-id={movie._id}
			data-owner-id={movie.owner}
		>
			<img
				src={`https://api.nomoreparties.co${movie.image.url}`}
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
					className={`card__button overlay cursor ${savedClass}`}
				></button>
			</div>
		</article>
	);
}

export default MoviesCard;
