import inquirer from 'inquirer';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: 'Which operation would you like to perform?',
      choices: [
        { name: 'add', value: 'add' },
        { name: 'subtract', value: 'subtract' },
        { name: 'multiply', value: 'multiply' },
        { name: 'divide', value: 'divide' },
      ],
    },
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      validate: (input: string) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      validate: (input: string) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
    },
  ]);

  const num1 = parseFloat(answers.num1);
  const num2 = parseFloat(answers.num2);
  const operation: Operation = answers.operation;

  let result: number = 0;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }

  console.log(`The result of ${operation}ing ${num1} and ${num2} is ${result}`);
}

main();
