import React from 'react';

function SearchForm() {
	return (
		<section className="search-form">
			<form className="search-form__container">
				<fieldset className="search-form__field">
					<input
						type="text"
						className="search-form__text-input"
						placeholder="Фильм"
					/>
				</fieldset>
				<button type="submit" className="search-form__button"></button>
			</form>
			<fieldset className="search-form__checkbox-container">
				<input type="checkbox" className="search-form__checkbox" />
				<article className="search-form__checkbox-sign">
					Короткометражки
				</article>
			</fieldset>
		</section>
	);
}

export default SearchForm;
