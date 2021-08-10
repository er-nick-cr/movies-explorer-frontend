import React from 'react';

function Register() {
	return (
		<>
			<div className="start-page__input-container">
				<label className="input__label">Имя</label>
				<input
					name="name"
					type="text"
					className="start-page__input"
					placeholder="Введите имя"
				/>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">E-mail</label>
				<input
					name="email"
					type="email"
					className="start-page__input"
					placeholder="Введите email"
				/>
			</div>
			<div className="start-page__input-container">
				<label className="input__label">Пароль</label>
				<input
					name="password"
					type="password"
					className="start-page__input"
					placeholder="Введите пароль"
				/>
			</div>
		</>
	);
}

export default Register;
