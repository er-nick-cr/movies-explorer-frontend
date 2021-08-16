import React from 'react';

function Footer({ location }) {
	return (
		<footer
			className={`footer ${
				location.pathname === '/profile' ? 'footer_inactive' : ''
			}`}
		>
			<div className="footer__heading">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</div>
			<div className="footer__main">
				<div className="footer__copyright">© 2021</div>
				<div className="footer__social">
					<a
						className="footer__link overlay cursor"
						href="https://praktikum.yandex.ru/"
						target="_blank"
						rel="noreferrer"
					>
						Яндекс.Практикум
					</a>
					<a
						className="footer__link overlay cursor"
						href="https://github.com/er-nick-cr/"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					<a
						className="footer__link overlay cursor"
						href="https://ru-ru.facebook.com/"
						target="_blank"
						rel="noreferrer"
					>
						Facebook
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
