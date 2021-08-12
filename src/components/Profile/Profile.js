import React, { useState, useEffect } from 'react';

function Profile({ user, useInput }) {
	const nameValue = useInput('Никита', {
		isEmpty: true,
		minLength: 2,
		maxLength: 30,
	});

	const emailValue = useInput('nikita@yandex.ru', {
		isEmpty: true,
		isEmail: false,
	});

	return (
		<section className="profile">
			<form className="profile__form">
				<h3 className="profile__heading">Привет, Никита</h3>
				<fieldset className="profile__fieldset">
					<div className="profile__input-container">
						<label className="profile__label">Имя</label>
						<input
							name="name"
							type="text"
							className={`profile__input ${
								(nameValue.isEmpty ||
									nameValue.minLengthError ||
									nameValue.maxLengthError) &&
								nameValue.isDirty
									? 'profile__input_error'
									: ''
							}`}
							placeholder="Ваше имя"
							value={nameValue.value}
							onChange={(e) => nameValue.onChange(e)}
							onBlur={(e) => nameValue.onBlur(e)}
						/>
						<span
							className={`profile__input-error ${
								(nameValue.isEmpty ||
									nameValue.minLengthError ||
									nameValue.maxLengthError) &&
								nameValue.isDirty
									? 'profile__input-error_active'
									: ''
							}`}
						>
							{nameValue.errorMessage}
						</span>
					</div>
					<div className="profile__input-container">
						<label className="profile__label">E-mail</label>
						<input
							type="email"
							name="email"
							className={`profile__input ${
								(emailValue.isEmpty || emailValue.isEmailError) &&
								emailValue.isDirty
									? 'profile__input_error'
									: ''
							}`}
							placeholder="Ваш email"
							value={emailValue.value}
							onChange={(e) => emailValue.onChange(e)}
							onBlur={(e) => emailValue.onBlur(e)}
						/>
						<span
							className={`profile__input-error ${
								(emailValue.isEmpty || emailValue.isEmailError) &&
								emailValue.isDirty
									? 'profile__input-error_active'
									: ''
							}`}
						>
							{emailValue.errorMessage}
						</span>
					</div>
				</fieldset>
				<button type="submit" className="profile__submit-button">
					Редактировать
				</button>
			</form>
			<button type="button" className="profile__logout-button">
				Выйти из аккаунта
			</button>
		</section>
	);
}

export default Profile;
