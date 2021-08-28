class MoviesApi {
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

	getMovies() {
		return fetch(`${this._address}`, {
			headers: this._headers,
		}).then(this._checkResponse);
	}
}

const moviesApi = new MoviesApi({
	address: 'https://api.nomoreparties.co/beatfilm-movies',

	headers: {
		'Content-Type': 'application/json',
	},
});

export default moviesApi;
