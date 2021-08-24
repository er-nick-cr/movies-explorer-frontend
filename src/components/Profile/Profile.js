import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ useInput, handleUpdateUser, handleLogout }) {
	const currentUser = React.useContext(CurrentUserContext);

	const nameValue = useInput(
		`${currentUser?.name === undefined ? '' : currentUser.name}`,
		{
			isEmpty: true,
			minLength: 2,
			maxLength: 30,
		}
	);

	const emailValue = useInput(`${currentUser?.email}`, {
		isEmpty: true,
		isEmail: false,
	});

	function handleSubmit(e) {
		e.preventDefault();
		handleUpdateUser(nameValue.value, emailValue.value);
	}

	function handleSubmitLogout(e) {
		e.preventDefault();
		handleLogout();
	}

	return (
		<section className="profile">
			<form className="profile__form" onSubmit={handleSubmit}>
				<h3 className="profile__heading">{`Привет, ${currentUser?.name}`}</h3>
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
				<button
					type="submit"
					className={`profile__submit-button overlay cursor ${
						nameValue.isValid && emailValue.isValid
							? ''
							: 'profile__submit-button_disabled'
					}`}
					disabled={!(nameValue.isValid && emailValue.isValid)}
				>
					Редактировать
				</button>
			</form>
			<button
				type="button"
				onClick={handleSubmitLogout}
				className="profile__logout-button overlay cursor"
			>
				Выйти из аккаунта
			</button>
		</section>
	);
}

export default Profile;
