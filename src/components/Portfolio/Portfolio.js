import React from 'react';

function Portfolio() {
	return (
		<section className="portfolio">
			<h3 className="portfolio__header">Портфолио</h3>
			<div className="portfolio__main">
				<a
					className="portfolio__example overlay cursor"
					href="https://github.com/er-nick-cr/how-to-learn"
					target="_blank"
					rel="noreferrer"
				>
					Статичный сайт
					<span className="portfolio__span">↗</span>
				</a>
				<a
					className="portfolio__example overlay cursor"
					href="https://github.com/er-nick-cr/russian-travel"
					target="_blank"
					rel="noreferrer"
				>
					Адаптивный сайт
					<span className="portfolio__span overlay cursor">↗</span>
				</a>
				<a
					className="portfolio__example"
					href="https://github.com/er-nick-cr/react-mesto-api-full"
					target="_blank"
					rel="noreferrer"
				>
					Одностраничное приложение
					<span className="portfolio__span">↗</span>
				</a>
			</div>
		</section>
	);
}

export default Portfolio;
