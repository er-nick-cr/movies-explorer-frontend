import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function StartPage({
	component: Component,
	heading,
	buttonText,
	question,
	link,
	linkText,
	useInput,
	handleRegister,
	handleLogin,
	setRegisterCredentials,
	buttonErrorText,
	isResOk,
	location,
}) {
	const [isFormValid, setIsFormValid] = useState(false);
	const nameValueRegister = useInput('', {
		isEmpty: true,
		minLength: 2,
		maxLength: 30,
	});
	const emailValueRegister = useInput('', { isEmpty: true, isEmail: false });
	const passwordValueRegister = useInput('', { isEmpty: true });

	const emailValueLogin = useInput('', { isEmpty: true, isEmail: false });
	const passwordValueLogin = useInput('', { isEmpty: true });

	function handleValidForm() {
		setIsFormValid(true);
	}

	function handleInvalidForm() {
		setIsFormValid(false);
	}

	function submitForm(e) {
		e.preventDefault();
		if (location.pathname === '/signup') {
			handleRegister(
				nameValueRegister.value,
				emailValueRegister.value,
				passwordValueRegister.value
			);
		} else if (location.pathname === '/signin') {
			handleLogin(emailValueLogin.value, passwordValueLogin.value);
		}
	}

	return (
		<section className="start-page">
			<div className="start-page__main">
				<Link to="/" className="start-page__link overlay cursor">
					<img className="start-page__logo" src={logo} alt="logo" />
				</Link>
				<h3 className="start-page__heading">{heading}</h3>
				<form className="start-page__form" onSubmit={submitForm}>
					<fieldset className="start-page__form-container">
						<Component
							useInput={useInput}
							handleValidForm={handleValidForm}
							handleInvalidForm={handleInvalidForm}
							handleRegister={handleRegister}
							setRegisterCredentials={setRegisterCredentials}
							nameValueRegister={nameValueRegister}
							emailValueRegister={emailValueRegister}
							passwordValueRegister={passwordValueRegister}
							emailValueLogin={emailValueLogin}
							passwordValueLogin={passwordValueLogin}
						/>
					</fieldset>
					<span
						className={`start-page__error ${
							isResOk ? '' : 'start-page__error_active'
						}`}
					>
						{buttonErrorText}
					</span>
					<button
						type="submit"
						className={`start-page__button overlay cursor ${
							isFormValid ? '' : 'start-page__button_disabled'
						}`}
						disabled={!isFormValid}
					>
						{buttonText}
					</button>
				</form>
				<div className="start-page__change-page">
					<label className="start-page__question">{question}</label>
					<Link to={link} className="start-page__link overlay cursor">
						{linkText}
					</Link>
				</div>
			</div>
		</section>
	);
}

export default StartPage;
