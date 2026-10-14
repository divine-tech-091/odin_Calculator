function add(one, two) {
	return one + two;
}

function subtract(num, val) {
	return num - val;
}

function multiply(four, two) {
	return four * two;
}

function divide(six, three) {
	return six / three;
}

function operate(opera, secondVal, firstVal) {
	if (opera === '/') {
		return divide(secondVal, firstVal);
	}
	if (opera === '*') {
		return multiply(secondVal, firstVal);
	}
	if (opera === '+') {
		return add(secondVal, firstVal);
	}
	if (opera === '-') {
		return subtract(secondVal, firstVal);
	}
}

const keys = document.querySelector('.button_container');
const display = document.querySelector('#text_Input');
display.value = '0';

function updateValue(values) {
	display.value = values;
}
let firstValue = '';
let operator = '';
let secondValue = '';

let saveValue = '';
let saveFirstValue = '';
let storeValue = '';
let finalResult = '';

let addOpera = '';
let saveOpera = '';
let calcOperation = '';

let decimalCount = 0;

let emergencyOperator = '';
keys.addEventListener('click', (event) => {
	if (event.target.matches('button')) {
		const key = event.target;
		const action = key.dataset.action;
		let keyContent = key.textContent;
		let displayedNum = display.value;

		if (displayedNum !== '') {
			displayedNum = '';
		}

		if (
			(!action || !action === 'clear_All' || !action === 'clear_space') &&
			displayedNum === ''
		) {
			firstValue += keyContent;
			saveFirstValue = firstValue;
			storeValue = saveValue + saveFirstValue;
			updateValue(storeValue);
			return;
		}

		if (action === 'decimal' && decimalCount !== 2) {
			firstValue += keyContent;
			saveFirstValue = firstValue;
			storeValue = saveValue + saveFirstValue;
			updateValue(storeValue);
			decimalCount++;
			return;
		}

		if (
			(action === 'add' ||
				action === 'subtract' ||
				action === 'multiply' ||
				action === 'divide') &&
			saveValue === ''
		) {
			operator = keyContent;
			secondValue = saveFirstValue;
			saveValue = secondValue + operator;
			updateValue(saveValue);
			firstValue = '';
		} else if (
			!action === 'decimal' ||
			!action === 'clear_All' ||
			!action === 'calculate'
		) {
			operator = keyContent;
		}

		if (action === 'clear_All') {
			secondValue = '';
			firstValue = '';
			saveValue = '';
			saveFirstValue = '';
			storeValue = '';
			operator = '';
			finalResult = '';
			decimalCount = 0;
			display.value = '0';
			return;
		}

		if (action === 'clear_space' && firstValue !== '') {
			let getLen = storeValue.length;
			storeValue = storeValue.slice(0, getLen - 1);
			updateValue(storeValue);

			let currentLen = firstValue.length;
			firstValue = firstValue.slice(0, currentLen - 1);

			let isLength = saveFirstValue.length;
			saveFirstValue = saveFirstValue.slice(0, isLength - 1);

			return;
		}

		if (action === 'clear_space' && saveValue !== '') {
			let getSaveLengthValue = saveValue.length;
			saveValue = saveValue.slice(0, getSaveLengthValue - 1);
			updateValue(saveValue);

			let getSecondLength = secondValue.length;
			secondValue = secondValue.slice(0, getSecondLength - 1);

			let getOperatorLength = operator.length;
			operator = operator.slice(0, getOperatorLength - 1);

			if (displayedNum === '' && saveValue === '') {
				display.value = '0';
			}

			return;
		}

		if (addOpera === '') {
			operator = keyContent;
			addOpera = operator;
			saveOpera = addOpera;
			return;
		}

		if (emergencyOperator === '' && !action === 'calculate') {
			operator = keyContent;
			emergencyOperator = operator;
			saveOpera = emergencyOperator;
		}

		if (
			addOpera === '*' &&
			action !== 'calculate' &&
			firstValue !== '' &&
			action !== 'decimal'
		) {
			const isCurr = parseFloat(firstValue);
			const isPrev = parseFloat(secondValue);

			finalResult = operate(addOpera, isPrev, isCurr);
			secondValue = finalResult;
			operator = keyContent;
			calcOperation = secondValue + keyContent;
			saveValue = calcOperation;
			firstValue = '';
			updateValue(calcOperation);
			return;
		}

		if (
			addOpera === '+' &&
			action !== 'calculate' &&
			firstValue !== '' &&
			action !== 'decimal'
		) {
			const isCurr = parseFloat(firstValue);
			const isPrev = parseFloat(secondValue);

			finalResult = operate(addOpera, isPrev, isCurr);
			secondValue = finalResult;
			operator = keyContent;
			calcOperation = secondValue + keyContent;
			saveValue = calcOperation;
			firstValue = '';
			updateValue(calcOperation);
			return;
		}

		if (
			addOpera === '-' &&
			action !== 'calculate' &&
			firstValue !== '' &&
			action !== 'decimal'
		) {
			const isCurr = parseFloat(firstValue);
			const isPrev = parseFloat(secondValue);

			finalResult = operate(addOpera, isPrev, isCurr);
			secondValue = finalResult;
			operator = keyContent;
			calcOperation = secondValue + keyContent;
			saveValue = calcOperation;
			firstValue = '';
			updateValue(calcOperation);
			return;
		}

		if (
			addOpera === '/' &&
			action !== 'calculate' &&
			firstValue !== '' &&
			action !== 'decimal'
		) {
			const isCurr = parseFloat(firstValue);
			const isPrev = parseFloat(secondValue);

			finalResult = operate(addOpera, isPrev, isCurr);
			secondValue = finalResult;
			operator = keyContent;
			calcOperation = secondValue + keyContent;
			saveValue = calcOperation;
			firstValue = '';
			updateValue(calcOperation);
			return;
		}

		if (
			(action === 'add' ||
				action === 'subtract' ||
				action === 'multiply' ||
				action === 'divide') &&
			!action !== 'calculate'
		) {
			operator = keyContent;
			addOpera = operator;
			secondValue = saveFirstValue;
			saveValue = secondValue + operator;
			updateValue(saveValue);
			firstValue = '';
			return;
		}

		if (action === 'calculate') {
			const prev = parseFloat(secondValue);
			const curr = parseFloat(firstValue);

			if (!isNaN(prev) && !isNaN(curr)) {
				switch (operator) {
					case '*':
						finalResult = operate(operator, prev, curr);
						updateValue(finalResult);
						secondValue = '';
						firstValue = '';
						saveValue = '';
						saveFirstValue = '';
						storeValue = '';
						operator = '';
						finalResult = '';
						decimalCount = 0;
						break;
					case '-':
						finalResult = operate(operator, prev, curr);
						updateValue(finalResult);
						secondValue = '';
						firstValue = '';
						saveValue = '';
						saveFirstValue = '';
						storeValue = '';
						operator = '';
						finalResult = '';
						decimalCount = 0;
						break;
					case '+':
						finalResult = operate(operator, prev, curr);
						updateValue(finalResult);
						secondValue = '';
						firstValue = '';
						saveValue = '';
						saveFirstValue = '';
						storeValue = '';
						operator = '';
						finalResult = '';
						decimalCount = 0;
						break;
					case '/':
						if (curr === 0) {
							let isError = 'Error';
							firstValue = isError;
							updateValue(firstValue);
							secondValue = '';
							firstValue = '';
							saveValue = '';
							saveFirstValue = '';
							storeValue = '';
							operator = '';
							finalResult = '';
							decimalCount = 0;
							break;
						} else if (operator === '/' || prev !== 0) {
							finalResult = operate(operator, prev, curr);
							updateValue(finalResult);
							secondValue = '';
							firstValue = '';
							saveValue = '';
							saveFirstValue = '';
							storeValue = '';
							operator = '';
							finalResult = '';
							decimalCount = 0;
						}
						break;

					default:
						break;
				}
			}
		}
	}
});

document.addEventListener('keydown', (event) => {
	if (
		event.key === '0' ||
		event.key === '1' ||
		event.key === '2' ||
		event.key === '3' ||
		event.key === '4' ||
		event.key === '5' ||
		event.key === '6' ||
		event.key === '7' ||
		event.key === '8' ||
		event.key === '9'
	) {
		firstValue += event.key;
		saveFirstValue = firstValue;
		storeValue = saveValue + saveFirstValue;
		updateValue(storeValue);
		return;
	}

	if (event.key === 'c') {
		secondValue = '';
		firstValue = '';
		saveValue = '';
		saveFirstValue = '';
		storeValue = '';
		operator = '';
		finalResult = '';
		decimalCount = 0;
		display.value = '0';
		return;
	}

	if (event.key === '.' && decimalCount !== 2) {
		firstValue += event.key;
		saveFirstValue = firstValue;
		storeValue = saveValue + saveFirstValue;
		updateValue(storeValue);
		decimalCount++;
		return;
	}

	if (event.key === 'Backspace' && firstValue !== '') {
		let getLen = storeValue.length;
		storeValue = storeValue.slice(0, getLen - 1);
		updateValue(storeValue);

		let currentLen = firstValue.length;
		firstValue = firstValue.slice(0, currentLen - 1);

		let isLength = saveFirstValue.length;
		saveFirstValue = saveFirstValue.slice(0, isLength - 1);
		return;
	}

	if (event.key === 'Backspace' && saveValue !== '') {
		let getSaveLengthValue = saveValue.length;
		saveValue = saveValue.slice(0, getSaveLengthValue - 1);
		updateValue(saveValue);

		let getSecondLength = secondValue.length;
		secondValue = secondValue.slice(0, getSecondLength - 1);

		let getOperatorLength = operator.length;
		operator = operator.slice(0, getOperatorLength - 1);

		if (saveValue === '') {
			display.value = '0';
		}
		return;
	}

	if (
		(event.key === '*' ||
			event.key === '/' ||
			event.key === '+' ||
			event.key === '-') &&
		saveValue === ''
	) {
		operator = event.key;
		secondValue = saveFirstValue;
		saveValue = secondValue + operator;
		updateValue(saveValue);
		firstValue = '';
	}

	if (
		addOpera === '' &&
		(event.key === '*' ||
			event.key === '/' ||
			event.key === '+' ||
			event.key === '-')
	) {
		operator = event.key;
		addOpera = operator;
		saveOpera = addOpera;
		return;
	}

	if (emergencyOperator === '' && !event.key === 'Enter') {
		operator = event.key;
		emergencyOperator = operator;
		saveOpera = emergencyOperator;
	}

	if (
		addOpera === '*' &&
		firstValue !== '' &&
		event.key !== 'Enter' &&
		event.key !== '.'
	) {
		const isCurr = parseFloat(firstValue);
		const isPrev = parseFloat(secondValue);

		finalResult = operate(addOpera, isPrev, isCurr);
		secondValue = finalResult;
		operator = event.key;
		calcOperation = secondValue + event.key;
		saveValue = calcOperation;
		firstValue = '';
		updateValue(calcOperation);
		return;
	}

	if (
		addOpera === '-' &&
		firstValue !== '' &&
		event.key !== 'Enter' &&
		event.key !== '.'
	) {
		const isCurr = parseFloat(firstValue);
		const isPrev = parseFloat(secondValue);

		finalResult = operate(addOpera, isPrev, isCurr);
		secondValue = finalResult;
		operator = event.key;
		calcOperation = secondValue + event.key;
		saveValue = calcOperation;
		firstValue = '';
		updateValue(calcOperation);
		return;
	}

	if (
		addOpera === '+' &&
		firstValue !== '' &&
		event.key !== 'Enter' &&
		event.key !== '.'
	) {
		const isCurr = parseFloat(firstValue);
		const isPrev = parseFloat(secondValue);

		finalResult = operate(addOpera, isPrev, isCurr);
		secondValue = finalResult;
		operator = event.key;
		calcOperation = secondValue + event.key;
		saveValue = calcOperation;
		firstValue = '';
		updateValue(calcOperation);
		return;
	}

	if (
		addOpera === '/' &&
		firstValue !== '' &&
		event.key !== 'Enter' &&
		event.key !== '.'
	) {
		const isCurr = parseFloat(firstValue);
		const isPrev = parseFloat(secondValue);

		finalResult = operate(addOpera, isPrev, isCurr);
		secondValue = finalResult;
		operator = event.key;
		calcOperation = secondValue + event.key;
		saveValue = calcOperation;
		firstValue = '';
		updateValue(calcOperation);
		return;
	}

	if (
		(event.key === '*' ||
			event.key === '/' ||
			event.key === '+' ||
			event.key === '-') &&
		!event.key !== 'Enter'
	) {
		operator = event.key;
		addOpera = operator;
		secondValue = saveFirstValue;
		saveValue = secondValue + operator;
		updateValue(saveValue);
		firstValue = '';
		return;
	}

	if (event.key === 'Enter') {
		const prev = parseFloat(secondValue);
		const curr = parseFloat(firstValue);

		if (!isNaN(prev) && !isNaN(curr)) {
			switch (operator) {
				case '*':
					finalResult = operate(operator, prev, curr);
					updateValue(finalResult);
					secondValue = '';
					firstValue = '';
					saveValue = '';
					saveFirstValue = '';
					storeValue = '';
					operator = '';
					finalResult = '';
					decimalCount = 0;
					break;
				case '-':
					finalResult = operate(operator, prev, curr);
					updateValue(finalResult);
					secondValue = '';
					firstValue = '';
					saveValue = '';
					saveFirstValue = '';
					storeValue = '';
					operator = '';
					finalResult = '';
					decimalCount = 0;
					break;
				case '+':
					finalResult = operate(operator, prev, curr);
					updateValue(finalResult);
					secondValue = '';
					firstValue = '';
					saveValue = '';
					saveFirstValue = '';
					storeValue = '';
					operator = '';
					finalResult = '';
					decimalCount = 0;
					break;
				case '/':
					if (curr === 0) {
						let isError = 'Error';
						firstValue = isError;
						updateValue(firstValue);
						secondValue = '';
						firstValue = '';
						saveValue = '';
						saveFirstValue = '';
						storeValue = '';
						operator = '';
						finalResult = '';
						decimalCount = 0;
						break;
					} else if (operator === '/' || prev !== 0) {
						finalResult = operate(operator, prev, curr);
						updateValue(finalResult);
						secondValue = '';
						firstValue = '';
						saveValue = '';
						saveFirstValue = '';
						storeValue = '';
						operator = '';
						finalResult = '';
						decimalCount = 0;
					}
					break;

				default:
					break;
			}
		}
	}
});
