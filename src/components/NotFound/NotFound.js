import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ handleGoBack }) {
	return (
		<section className="not-found">
			<h3 className="not-found__title">404</h3>
			<p className="not-found__subtitle">Страница не найдена</p>
			<button to="/" className="not-found__button" onClick={handleGoBack}>
				Назад
			</button>
		</section>
	);
}

export default NotFound;
