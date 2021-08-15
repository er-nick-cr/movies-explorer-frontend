import React from 'react';
import photo from '../../images/about-me-photo.jpg';

function AboutMe() {
	return (
		<section className="about-me">
			<h3 className="about-me__header">Студент</h3>
			<div className="about-me__main">
				<div className="about-me__bio">
					<h4 className="about-me__developer">Никита</h4>
					<span className="about-me__job">Фронтенд-разработчик, 26 лет</span>
					<p className="about-me__story">
						Я родился и живу в Красноясрке, закончил факультет экономики СФУ. Я
						люблю слушать музыку, а ещё увлекаюсь горными лыжами. Недавно начал
						кодить. С 2018 года работал в компании «***». После того, как прошёл
						курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
						постоянной работы (нет :().
					</p>
					<div className="about-me__social">
						<a
							className="about-me__link"
							href="https://ru-ru.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							Facebook
						</a>
						<a
							className="about-me__link"
							href="https://github.com/er-nick-cr"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</div>
				</div>
				<img className="about-me__photo" src={photo} alt="Моё фото" />
			</div>
		</section>
	);
}

export default AboutMe;
