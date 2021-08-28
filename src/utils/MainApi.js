class MainApi {
	constructor({ address, headers }) {
		this._address = address;
		this._headers = headers;
	}

	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка ${res.status}`);
	}

	registerUser(name, email, password) {
		return fetch(`${this._address}/signup`, {
			method: 'POST',
			credentials: 'include',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		}).then(this._checkResponse);
	}

	loginUser(email, password) {
		return fetch(`${this._address}/signin`, {
			method: 'POST',
			credentials: 'include',
			headers: this._headers,
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}).then(this._checkResponse);
	}

	logoutUser() {
		return fetch(`${this._address}/signout`, {
			method: 'POST',
			credentials: 'include',
			headers: this._headers,
		}).then(this._checkResponse);
	}

	checkToken() {
		return fetch(`${this._address}/users/me`, {
			headers: this._headers,
			credentials: 'include',
		}).then(this._checkResponse);
	}

	editProfile(name, email) {
		return fetch(`${this._address}/users/me`, {
			method: 'PATCH',
			credentials: 'include',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				email: email,
			}),
		}).then(this._checkResponse);
	}

	getUserInfo() {
		return fetch(`${this._address}/users/me`, {
			headers: this._headers,
			credentials: 'include',
		}).then(this._checkResponse);
	}

	getMovies() {
		return fetch(`${this._address}/movies`, {
			headers: this._headers,
			credentials: 'include',
		}).then(this._checkResponse);
	}

	saveMovie(movie) {
		return fetch(`${this._address}/movies`, {
			method: 'POST',
			credentials: 'include',
			headers: this._headers,
			body: JSON.stringify({
				country: movie.country,
				director: movie.director,
				duration: movie.duration,
				year: movie.year,
				description: movie.description,
				image: `https://api.nomoreparties.co${movie.image.url}`,
				trailer: movie.trailerLink,
				nameRU: movie.nameRU,
				nameEN: movie.nameEN,
				thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
				movieId: movie.id,
			}),
		}).then(this._checkResponse);
	}

	deleteMovie(movieId) {
		return fetch(`${this._address}/movies/${movieId}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: this._headers,
		}).then(this._checkResponse);
	}
}

const mainApi = new MainApi({
	address: 'https://api.movies-explorer-dip.nomoredomains.monster',

	headers: {
		'Content-Type': 'application/json',
	},
});

export default mainApi;
