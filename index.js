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

let currentNumber = '0';
let operator = '';
let previousNumber = '';

const displayText = document.querySelector('#text_Input');
const btnNums = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('#operatorBtn');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear_All');
const backSpaceBtn = document.querySelector('#clear');

let result = '';
let addOpera = '';

displayText.value = '0';

function chooseOperator(event) {
	operator = event.target.innerText;

	if (addOpera === '') {
		addOpera = operator;
	}
	if (previousNumber === '') {
		previousNumber = currentNumber;
		currentNumber = '';
	}
	if (addOpera === 'x' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		currentNumber = '';
		updateValue(result);
	}

	if (addOpera === '-' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		currentNumber = '';
		updateValue(result);
	}

	if (addOpera === '/' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		currentNumber = '';
		updateValue(result);
	}

	if (addOpera === '+' && currentNumber !== '') {
		const previous = parseFloat(previousNumber);
		const current = parseFloat(currentNumber);

		result = operate(addOpera, previous, current);
		currentNumber = result;
		addOpera = '';
		previousNumber = currentNumber;
		currentNumber = '';
		updateValue(result);
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

function updateNumber(event) {
	let btnText = event.target.innerText;
	if (currentNumber === '0') {
		currentNumber = '';
	}
	currentNumber += btnText;
	updateValue(currentNumber);
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
				break;
			case '-':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				break;
			case '%':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
				break;
			case 'x':
				result = operate(operator, prev, curr);
				currentNumber = result;
				operator = '';
				previousNumber = currentNumber;
				currentNumber = '';
				updateValue(result);
				previousNumber = '';
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
				}
				break;
			default:
				break;
		}
	}
});

clearBtn.addEventListener('click', () => {
	currentNumber = '0';
	operator = '';
	previousNumber = '';
	result = 0;
	updateValue(currentNumber);
});

backSpaceBtn.addEventListener('click', () => {
	if (previousNumber === result) {
		currentNumber = result;
		let convertResultToString = String(currentNumber);
		// console.log(convertResultToString);
		let currentLength = convertResultToString.length;
		currentNumber = currentNumber.slice(0, currentLength - 1);
	}

	let getLengthOfDisplay = currentNumber.length;
	currentNumber = currentNumber.slice(0, getLengthOfDisplay - 1);

	if (currentNumber === '') {
		currentNumber = '0';
	}

	updateValue(currentNumber);
});
