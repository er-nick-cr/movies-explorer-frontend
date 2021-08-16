import React from 'react';

function MoviesCard({ movie, savedClass }) {
	return (
		<article
			className="card"
			data-card-id={movie._id}
			data-owner-id={movie.owner}
		>
			<img src={movie.image} alt={movie.nameRU} className="card__pic" />
			<div className="card__footer">
				<div className="card__description">
					<h2 className="card__name">{movie.nameRU}</h2>
					<p className="card__duration">{movie.duration}</p>
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
