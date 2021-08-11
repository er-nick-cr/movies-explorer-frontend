import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function StartPage({
	component: Component,
	heading,
	buttonText,
	question,
	link,
	linkText,
}) {
	return (
		<section className="start-page">
			<div className="start-page__main">
				<Link to="/">
					<img className="start-page__logo" src={logo} alt="logo" />
				</Link>
				<h3 className="start-page__heading">{heading}</h3>
				<form className="start-page__form">
					<fieldset className="start-page__form-container">
						<Component />
					</fieldset>
					<button type="submit" className="start-page__button">
						{buttonText}
					</button>
				</form>
				<div className="start-page__change-page">
					<label className="start-page__question">{question}</label>
					<Link to={link} className="start-page__link">
						{linkText}
					</Link>
				</div>
			</div>
		</section>
	);
}

export default StartPage;