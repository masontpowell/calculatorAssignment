const readline = require("readline-sync");

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Error: You can not divide by zero"),
};

const pattern = /^\s*(-?\d+(\.\d+)?)\s*([+\-*/])\s*(-?\d+(\.\d+)?)\s*$/;

const getUserExpression = () =>
  readline.question("Enter a math expression like this - 4 + 3.7: ");

const parseExpression = (input) => {
  const match = input.match(pattern);

  if (!match) return null;

  const num1 = parseFloat(match[1]);
  const operator = match[3];
  const num2 = parseFloat(match[4]);

  return { num1, operator, num2 };
};

const checkOperator = (operator) => {
  return Object.keys(operations).includes(operator);
};

const calculate = (num1, operator, num2) => {
  const operation = operations[operator];
  return operation(num1, num2);
};

const displayResult = (num1, operator, num2, result) => {
  console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
};

const runCalculator = () => {
  const input = getUserExpression();
  const parsed = parseExpression(input);

  if (!parsed) {
    console.log("Expression is not in valid format. Please try again.");
    return runCalculator();
  }

  const { num1, operator, num2 } = parsed;

  if (!checkOperator(operator)) {
    console.log(`Invalid operator: ${operator}. Please try again.`);
    return runCalculator();
  }

  const result = calculate(num1, operator, num2);
  displayResult(num1, operator, num2, result);
};

runCalculator();
