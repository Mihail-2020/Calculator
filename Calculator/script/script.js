const leftOperandElement = document.querySelector("#number1");
const rightOperandElement = document.querySelector("#number2");
const resultElement = document.querySelector("#result");
const errorElement = document.querySelector("#error");

const clearButton = document.querySelector('#btn__clear');

clearButton.addEventListener('click', () => {
	resultElement.innerHTML = "";
	errorElement.innerHTML = "";

	leftOperandElement.value = '';
	rightOperandElement.value = '0';

})

const operatorsPanel = document.querySelector("#operators-panel");

const arrow = document.querySelector('#arrow');
const dropDown = document.querySelector('.dropdown');
arrow.addEventListener('click', () => dropDown.classList.toggle('active'));



operatorsPanel.addEventListener("click", handleOperatorClick);

const operations = {
	plus(leftOperand, rightOperand) {
		return leftOperand + rightOperand;
	},
	minus(leftOperand, rightOperand) {
		return leftOperand - rightOperand;
	},
	multiply(leftOperand, rightOperand) {
		return leftOperand * rightOperand;
	},
	divide(leftOperand, rightOperand) {
		if (rightOperand === 0) {
			throw new Error("You cannot divide by zero");
		}

		return leftOperand / rightOperand;
	},
	pow(leftOperand, rightOperand) {
		return Math.pow(leftOperand, rightOperand);
	},
	arrow(leftOperand) {
		return '';
	},
	percent(leftOperand, rightOperand) {
		return leftOperand - ((rightOperand / 100) * leftOperand);
	},
	root(leftOperand) {
		return Math.sqrt(leftOperand);
	},
	logarithm(leftOperand) {
		return Math.log(leftOperand);
	},
	sine(leftOperand) {
		return Math.sin(leftOperand);
	},
	tangent(leftOperand) {
		return Math.tan(leftOperand);
	},
	operation2(leftOperand) {
		if (leftOperand === 0) {
			throw new Error("You cannot divide by zero");
		}

		return 1 / leftOperand;
	}
};



function handleOperatorClick(event) {
	resultElement.innerHTML = "";
	errorElement.innerHTML = "";

	try {
		const currentOperator = event.target.id;

		const leftOperand = Number(leftOperandElement.value);
		const rightOperand = Number(rightOperandElement.value);

		// const checkEmpty = !leftOperandElement.value || !rightOperandElement.value;
		const checkEmpty = !leftOperandElement.value;
		const checkZero = leftOperandElement.value !== 0 || rightOperandElement.value !== 0;
		const checkIsNaN = isNaN(leftOperand) || isNaN(rightOperand);


		if (checkIsNaN) {
			throw new Error("Operand is not a number");
		}


		if (currentOperator !== "arrow" && checkEmpty && checkZero) {
			throw new Error("Operand is empty");
		}

		const result =
			currentOperator in operations
				? operations[currentOperator](leftOperand, rightOperand)
				: "Unknown operation";

		localStorage.setItem(`${++localStorage.length}`, result);

		resultElement.innerHTML = result;
	} catch (error) {
		errorElement.append("Error: " + error.message);
	}
}

// function renderHistory() {
// 	let

// 	let element = 
// }