import React, { useEffect } from 'react';

function Register({ useInput, handleValidForm, handleInvalidForm }) {
	const nameValue = useInput('', {
		isEmpty: true,
		minLength: 2,
		maxLength: 30,
	});
	const emailValue = useInput('', { isEmpty: true, isEmail: false });
	const passwordValue = useInput('', { isEmpty: true });

	useEffect(() => {
		emailValue.isValid && nameValue.isValid && passwordValue.isValid
			? handleValidForm()
			: handleInvalidForm();
	}, [
		emailValue.isValid,
		nameValue.isValid,
		passwordValue.isValid,
		handleValidForm,
		handleInvalidForm,
	]);

	return (
		<>
			<div className="start-page__input-container">
				<label className="input__label">Имя</label>
				<input
					name="name"
					type="text"
					className={`start-page__input ${
						(nameValue.isEmpty ||
							nameValue.minLengthError ||
							nameValue.maxLengthError) &&
						nameValue.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите имя"
					value={nameValue.value}
					onChange={(e) => nameValue.onChange(e)}
					onBlur={(e) => nameValue.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(nameValue.isEmpty ||
							nameValue.minLengthError ||
							nameValue.maxLengthError) &&
						nameValue.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{nameValue.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">E-mail</label>
				<input
					name="email"
					type="email"
					className={`start-page__input ${
						(emailValue.isEmpty || emailValue.isEmailError) &&
						emailValue.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите email"
					value={emailValue.value}
					onChange={(e) => emailValue.onChange(e)}
					onBlur={(e) => emailValue.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(emailValue.isEmpty || emailValue.isEmailError) &&
						emailValue.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{emailValue.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					className={`start-page__input ${
						passwordValue.isEmpty && passwordValue.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите пароль"
					value={passwordValue.value}
					onChange={(e) => passwordValue.onChange(e)}
					onBlur={(e) => passwordValue.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						passwordValue.isEmpty && passwordValue.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{passwordValue.errorMessage}
				</span>
			</div>
		</>
	);
}

export default Register;
