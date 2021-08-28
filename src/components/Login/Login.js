import React, { useEffect } from 'react';

function Login({
	handleValidForm,
	handleInvalidForm,
	emailValueLogin,
	passwordValueLogin,
	isLoginSubmiting,
}) {
	useEffect(() => {
		emailValueLogin.isValid && passwordValueLogin.isValid
			? handleValidForm()
			: handleInvalidForm();
	}, [
		emailValueLogin.isValid,
		passwordValueLogin.isValid,
		handleValidForm,
		handleInvalidForm,
	]);

	return (
		<>
			<div className="start-page__input-container">
				<label className="input__label">E-mail</label>
				<input
					name="email"
					type="email"
					disabled={isLoginSubmiting}
					className={`start-page__input ${
						(emailValueLogin.isEmpty || emailValueLogin.isEmailError) &&
						emailValueLogin.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите email"
					value={emailValueLogin.value}
					onChange={(e) => emailValueLogin.onChange(e)}
					onBlur={(e) => emailValueLogin.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(emailValueLogin.isEmpty || emailValueLogin.isEmailError) &&
						emailValueLogin.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{emailValueLogin.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					isLoginSubmiting={isLoginSubmiting}
					className={`start-page__input ${
						passwordValueLogin.isEmpty && passwordValueLogin.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите пароль"
					value={passwordValueLogin.value}
					onChange={(e) => passwordValueLogin.onChange(e)}
					onBlur={(e) => passwordValueLogin.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						passwordValueLogin.isEmpty && passwordValueLogin.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{passwordValueLogin.errorMessage}
				</span>
			</div>
		</>
	);
}

export default Login;
