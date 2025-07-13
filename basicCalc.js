const readline = require("readline-sync");

const operatorOptions = ["x", "/", "+", "-"];

const operations = {
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
};

const checkOperatorInput = () => {
  const userOperator = readline.question(
    "What math operation do you want to perform today? (options: *, /, +, -) ",
  );

  if (operatorOptions.includes(userOperator)) {
    console.log(`You chose to do ${userOperator}.`);
    return userOperator;
  } else {
    console.log(
      `You chose ${userOperator} which is not an allowed operation. Please try again.`,
    );
    return checkOperatorInput();
  }
};

const checkNumInput = () => {
  const num1 = readline.questionInt(
    "Please enter the first number you want to use: ",
  );
  const num2 = readline.questionInt(
    "Please enter the second number you want to use: ",
  );

  return [num1, num2];
};

const performOperation = (userOperator, num1, num2, operations) => {
  return operations[userOperator](num1, num2);
};

const userOperator = checkOperatorInput();
const [num1, num2] = checkNumInput();
let result = performOperation(userOperator, num1, num2, operations);

console.log(`Result: ${num1} ${userOperator} ${num2} = ${result}`);
