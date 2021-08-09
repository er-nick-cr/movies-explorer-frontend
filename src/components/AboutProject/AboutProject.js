import React from 'react';

function AboutProject() {
	return (
		<section className="about-project">
			<h3 className="about-project__header">О проекте</h3>
			<div className="about-project__main">
				<div className="about-project__description">
					<h3 className="about-project__description-heading">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="about-project__description-paragraph">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</div>
				<div className="about-project__description">
					<h3 className="about-project__description-heading">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="about-project__description-paragraph">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</div>
			</div>
			<div className="about-project__schema">
				<div className="about-project__backend">1 неделя</div>
				<div className="about-project__frontend">4 недели</div>
				<article className="about-project__article">Back-end</article>
				<article className="about-project__article">Front-end</article>
			</div>
		</section>
	);
}

export default AboutProject;
