import React from 'react';
import success from '../../images/edit-success.png';
import denied from '../../images/edit-denied.png';

function InfoTooltip({ isOpen, onClose, isEditOk }) {
	console.log(isOpen);
	return (
		<section
			className={`popup popup-animation ${isOpen ? 'popup_opened' : ''}`}
			onClick={onClose}
		>
			<div className="popup__tooltip" onClick={(e) => e.stopPropagation()}>
				<img
					className="popup__tooltip-image"
					src={isEditOk ? success : denied}
					alt="success"
				/>
				<p className="popup__registration-status">
					{isEditOk
						? 'Данные профиля успешно изменены!'
						: 'Что-то пошло не так! Попробуйте ещё раз.'}
				</p>
				<button
					type="button"
					className="popup__close-icon overlay cursor"
					onClick={onClose}
				></button>
			</div>
		</section>
	);
}

export default InfoTooltip;
