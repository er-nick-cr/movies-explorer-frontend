import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, location }) {
	return (
		<section className="card-list">
			<div className="card-list__cards">
				{movies.length > 0
					? movies.map((movie) => <MoviesCard key={movie._id} movie={movie} />)
					: ''}
			</div>
			<div className="card-list__else">
				{location.pathname === '/movies' && (
					<button type="button" className="card-list__button">
						Ещё
					</button>
				)}
			</div>
		</section>
	);
}

export default MoviesCardList;
