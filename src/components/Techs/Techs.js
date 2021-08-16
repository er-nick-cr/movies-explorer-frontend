import React from 'react';

function Techs() {
	return (
		<section className="techs">
			<h3 className="techs__header">Технологии</h3>
			<div className="techs__main">
				<h3 className="techs__heading">7 технологий</h3>
				<p className="techs__paragraph">
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
				<ul className="tech__technologies">
					<li className="tech__technology">HTML</li>
					<li className="tech__technology">CSS</li>
					<li className="tech__technology">JS</li>
					<li className="tech__technology">React</li>
					<li className="tech__technology">Git</li>
					<li className="tech__technology">Express.js</li>
					<li className="tech__technology">mongoDB</li>
				</ul>
			</div>
		</section>
	);
}

export default Techs;
