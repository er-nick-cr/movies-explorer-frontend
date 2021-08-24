import React, { useState } from 'react';

function SearchForm({ useInput, handleSubmitSearch, handleCheckboxToggle }) {
	const [isFocused, setIsFocused] = useState(false);

	const searchValue = useInput('', {});

	function handleSubmit(e) {
		handleSubmitSearch(e, searchValue.value);
	}

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
				onSubmit={handleSubmit}
			>
				<fieldset className="search-form__field">
					<input
						type="text"
						className="search-form__text-input"
						placeholder="Фильм"
						required
						onFocus={handleEnableFocus}
						onBlur={handleDisableFocus}
						value={searchValue.value}
						onChange={(e) => searchValue.onChange(e)}
					/>
				</fieldset>
				<button
					type="submit"
					className="search-form__button overlay cursor"
				></button>
			</form>
			<fieldset className="search-form__checkbox-container">
				<input
					type="checkbox"
					className="search-form__checkbox"
					onChange={handleCheckboxToggle}
				/>
				<article className="search-form__checkbox-sign">
					Короткометражки
				</article>
			</fieldset>
		</section>
	);
}

export default SearchForm;
