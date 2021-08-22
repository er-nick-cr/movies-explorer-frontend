import { useEffect, useState } from 'react';
import validator from 'validator';

const useValidation = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [maxLengthError, setMaxLengthError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isEmailError, setIsEmailError] = useState(false);
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				case 'maxLength':
					value.length > validations[validation]
						? setMaxLengthError(true)
						: setMaxLengthError(false);
					break;
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
				case 'isEmail':
					validator.isEmail(value)
						? setIsEmailError(false)
						: setIsEmailError(true);
					break;
				default:
					break;
			}

			isEmpty || minLengthError || maxLengthError || isEmailError
				? setIsValid(false)
				: setIsValid(true);

			minLengthError && value
				? setErrorMessage('Колличество символов не может быть меньше 2')
				: maxLengthError && value
				? setErrorMessage('Колличество символов не может быть больше 30')
				: !value
				? setErrorMessage('Поле не может быть пустым')
				: isEmailError
				? setErrorMessage('Введите email')
				: setErrorMessage('');
		}
	}, [
		value,
		isEmailError,
		maxLengthError,
		minLengthError,
		validations,
		isEmpty,
		isValid,
	]);

	return {
		isEmpty,
		minLengthError,
		maxLengthError,
		errorMessage,
		isEmailError,
		isValid,
	};
};

const useInput = (initialValue, validations, validateEmail) => {
	const [value, setValue] = useState('initialValue');

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	const [isDirty, setIsDirty] = useState(false);
	const valid = useValidation(value, validations, validateEmail);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onBlur = (e) => {
		setIsDirty(true);
	};

	return {
		value,
		isDirty,
		onChange,
		onBlur,
		...valid,
	};
};

export default useInput;
