import React, { useState, useEffect } from 'react';

function Profile({ user }) {
	const [data, setData] = useState({
		name: '',
		email: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	}

	useEffect(() => {
		setData(user);
	}, [user]);

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
							className="profile__input"
							placeholder="Ваше имя"
							value={data.name}
							onChange={handleChange}
						/>
					</div>
					<div className="profile__input-container">
						<label className="profile__label">E-mail</label>
						<input
							type="email"
							name="email"
							className="profile__input"
							placeholder="Ваш email"
							value={data.email}
							onChange={handleChange}
						/>
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
