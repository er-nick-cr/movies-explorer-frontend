import React, { useState } from 'react';

function SearchForm() {
	const [isFocused, setIsFocused] = useState(false);

	function handleEnableFocus() {
		setIsFocused(true);
	}

	function handleDisableFocus() {
		setIsFocused(false);
	}

	return (
		<section className="search-form">
			<form
				className={`search-form__container ${
					isFocused ? 'search-form__container_focus' : ''
				}`}
			>
				<fieldset className="search-form__field">
					<input
						type="text"
						className="search-form__text-input"
						placeholder="Фильм"
						required
						onFocus={handleEnableFocus}
						onBlur={handleDisableFocus}
					/>
				</fieldset>
				<button
					type="submit"
					className="search-form__button overlay cursor"
				></button>
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
