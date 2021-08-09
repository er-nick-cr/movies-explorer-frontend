import React from 'react';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__heading">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</div>
			<div className="footer__main">
				<div className="footer__copyright">© 2021</div>
				<div className="footer__social">
					<a
						className="footer__link"
						href="https://praktikum.yandex.ru/"
						target="_blank"
					>
						Яндекс.Практикум
					</a>
					<a
						className="footer__link"
						href="https://github.com/er-nick-cr/"
						target="_blank"
					>
						Github
					</a>
					<a className="footer__link" href="#" target="_blank">
						Facebook
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
