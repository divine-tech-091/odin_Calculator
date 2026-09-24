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

function remainder(num1, num2) {
	return num1 % num2;
}

let currentNumber = '';
let operator = '';
let previousNumber = '';

const displayText = document.querySelector('#text_Input');
const btnNums = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('#operatorBtn');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear_All');
const backSpaceBtn = document.querySelector('#clear');

const decimalPoint = document.querySelector('#decimalPoint');

let result = '';
let addOpera = '';

displayText.value = '0';

let savePoint = '';
let isPoint = '';

decimalPoint.addEventListener('click', (event) => {
	savePoint = event.target.innerText;

	if (isPoint === '') {
		isPoint = savePoint;
		currentNumber = currentNumber + '' + isPoint;
		updateValue(currentNumber);
	}
});

let combineOpera = '';
function chooseOperator(event) {
	operator = event.target.innerText;

	if (addOpera === '') {
		addOpera = operator;
		combineOpera = addOpera;
	} else {
		combineOpera = operator;
	}
	if (previousNumber === '') {
		previousNumber = currentNumber;
		previousNumber = previousNumber + '' + combineOpera;
		updateValue(previousNumber);
		currentNumber = '';
	}
	if (addOpera === 'x' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		previousNumber = previousNumber + '' + combineOpera;
		currentNumber = '';
		updateValue(previousNumber);
	}

	if (addOpera === '-' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		previousNumber = previousNumber + '' + combineOpera;
		currentNumber = '';
		updateValue(previousNumber);
	}

	if (addOpera === '/' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		previousNumber = previousNumber + '' + combineOpera;
		currentNumber = '';
		updateValue(previousNumber);
	}

	if (addOpera === '+' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		previousNumber = previousNumber + '' + combineOpera;
		currentNumber = '';
		updateValue(previousNumber);
	}
}

function operate(isOperator, firstNum, secondNum) {
	if (isOperator === '+') {
		return add(firstNum, secondNum);
	}
	if (isOperator === 'x') {
		return multiply(firstNum, secondNum);
	}
	if (isOperator === '/') {
		return divide(firstNum, secondNum);
	}
	if (isOperator === '-') {
		return subtract(firstNum, secondNum);
	}

	if (isOperator === '%') {
		return remainder(firstNum, secondNum);
	}
}

function updateValue(values) {
	displayText.value = values;
}

let btnText = '';
function updateNumber(event) {
	currentNumber += event.target.innerText;
	if (previousNumber === '') {
		btnText = previousNumber + '' + currentNumber;
		updateValue(btnText);
		return;
	}
	btnText = previousNumber + '' + currentNumber;
	updateValue(btnText);
}

btnNums.forEach((clickNums) => {
	clickNums.addEventListener('click', updateNumber);
});

operatorBtn.forEach((clickOperator) => {
	clickOperator.addEventListener('click', chooseOperator);
});

equalBtn.addEventListener('click', () => {
	const prev = parseFloat(previousNumber);
	const curr = parseFloat(currentNumber);

	if (!isNaN(prev) && !isNaN(curr)) {
		switch (operator) {
			case '+':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				isPoint = '';
				break;
			case '-':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				isPoint = '';
				break;
			case '%':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				isPoint = '';
				break;
			case 'x':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				isPoint = '';
				break;
			case '/':
				switch (true) {
					case curr === 0 || prev === 0:
						let isError = 'Error';
						result = isError;
						updateValue(result);
						break;
				}
				if (operator === '/' && curr !== 0 && prev !== 0) {
					result = operate(operator, prev, curr);
					currentNumber = result;
					operator = '';
					previousNumber = currentNumber;
					currentNumber = '';
					updateValue(result);
					previousNumber = '';
					isPoint = '';
				}
				break;
			default:
				break;
		}
	}
});

clearBtn.addEventListener('click', () => {
	currentNumber = '';
	operator = '';
	addOpera = '';
	previousNumber = '';
	isPoint = '';
	result = 0;
	displayText.value = '0';
});

backSpaceBtn.addEventListener('click', () => {
	if (currentNumber !== '') {
		let currentLength = btnText.length;
		btnText = btnText.slice(0, currentLength - 1);

		updateValue(btnText);
		let getLengthOfDisplay = currentNumber.length;
		currentNumber = currentNumber.slice(0, getLengthOfDisplay - 1);
		return;
	}

	if (previousNumber !== '') {
		let getLengthOfDisplay = previousNumber.length;
		previousNumber = previousNumber.slice(0, getLengthOfDisplay - 1);

		updateValue(previousNumber);

		return;
	}

	let getLengthOfDisplay = currentNumber.length;
	currentNumber = currentNumber.slice(0, getLengthOfDisplay - 1);

	if (currentNumber === '') {
		currentNumber = '0';
	}

	updateValue(currentNumber);
	currentNumber = '';
});
