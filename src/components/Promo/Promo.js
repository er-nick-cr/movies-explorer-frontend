import React from 'react';

function Promo() {
	return (
		<section className="promo">
			<div className="promo__header">
				<h1 className="promo__heading">
					Учебный проект студента факультета Веб&#8209;разработки.
				</h1>
				<p className="promo__paragraph">
					Листайте ниже, чтобы узнать больше про этот проект и его создателя.
				</p>
			</div>
			<div className="promo__logo"></div>
			<button type="button" className="promo__button cursor overlay">
				Узнать больше
			</button>
		</section>
	);
}

export default Promo;
