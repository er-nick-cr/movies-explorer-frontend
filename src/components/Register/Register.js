import React, { useEffect } from 'react';

function Register({
	useInput,
	handleValidForm,
	handleInvalidForm,
	nameValueRegister,
	emailValueRegister,
	passwordValueRegister,
	isRegistrationSubmiting,
}) {
	useEffect(() => {
		emailValueRegister.isValid &&
		nameValueRegister.isValid &&
		passwordValueRegister.isValid
			? handleValidForm()
			: handleInvalidForm();
	}, [
		emailValueRegister.isValid,
		nameValueRegister.isValid,
		passwordValueRegister.isValid,
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
					required
					disabled={isRegistrationSubmiting}
					className={`start-page__input ${
						(nameValueRegister.isEmpty ||
							nameValueRegister.minLengthError ||
							nameValueRegister.maxLengthError) &&
						nameValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите имя"
					value={nameValueRegister.value}
					onChange={(e) => nameValueRegister.onChange(e)}
					onBlur={(e) => nameValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(nameValueRegister.isEmpty ||
							nameValueRegister.minLengthError ||
							nameValueRegister.maxLengthError) &&
						nameValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{nameValueRegister.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">E-mail</label>
				<input
					name="email"
					type="email"
					disabled={isRegistrationSubmiting}
					required
					className={`start-page__input ${
						(emailValueRegister.isEmpty || emailValueRegister.isEmailError) &&
						emailValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите email"
					value={emailValueRegister.value}
					onChange={(e) => emailValueRegister.onChange(e)}
					onBlur={(e) => emailValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						(emailValueRegister.isEmpty || emailValueRegister.isEmailError) &&
						emailValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{emailValueRegister.errorMessage}
				</span>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					disabled={isRegistrationSubmiting}
					required
					className={`start-page__input ${
						passwordValueRegister.isEmpty && passwordValueRegister.isDirty
							? 'start-page__input_error'
							: ''
					}`}
					placeholder="Введите пароль"
					value={passwordValueRegister.value}
					onChange={(e) => passwordValueRegister.onChange(e)}
					onBlur={(e) => passwordValueRegister.onBlur(e)}
				/>
				<span
					className={`start-page__input-error ${
						passwordValueRegister.isEmpty && passwordValueRegister.isDirty
							? 'start-page__input-error_active'
							: ''
					}`}
				>
					{passwordValueRegister.errorMessage}
				</span>
			</div>
		</>
	);
}

export default Register;
