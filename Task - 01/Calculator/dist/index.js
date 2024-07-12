"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
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
                validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number:',
                validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            },
        ]);
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        const operation = answers.operation;
        let result = 0;
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
    });
}
main();
