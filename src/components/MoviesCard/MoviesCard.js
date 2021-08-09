import React from 'react';

function MoviesCard({ movie }) {
	return (
		<article
			className="card"
			data-card-id={movie._id}
			data-owner-id={movie.owner}
		>
			<img src={movie.image} alt={movie.nameRu} className="card__pic" />
			<div className="card__footer">
				<div className="card__description">
					<h2 className="card__name">{movie.nameRU}</h2>
					<p className="card__duration">{movie.duration}</p>
				</div>
				<button type="button" className="card__button"></button>
			</div>
		</article>
	);
}

export default MoviesCard;
