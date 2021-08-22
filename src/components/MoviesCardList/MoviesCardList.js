import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
	movies,
	location,
	savedClass,
	cardQuantity,
	handleShowExtraCards,
}) {
	console.log(cardQuantity);
	return (
		<section className="card-list">
			<div className="card-list__cards">
				{movies.length > 0
					? movies.map((movie, index) => {
							if (index < cardQuantity) {
								return (
									<MoviesCard
										key={movie.id}
										movie={movie}
										savedClass={savedClass}
									/>
								);
							}
							return null;
					  })
					: ''}
			</div>
			<div className="card-list__else">
				{location.pathname === '/movies' && (
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
