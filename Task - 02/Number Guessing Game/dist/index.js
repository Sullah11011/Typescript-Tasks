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
const chalk_1 = __importDefault(require("chalk"));
const generateRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
const playGame = () => __awaiter(void 0, void 0, void 0, function* () {
    const maxNumber = 100;
    let playAgain = true;
    let totalAttempts = 0;
    let rounds = 0;
    while (playAgain) {
        const randomNumber = generateRandomNumber(maxNumber);
        let attempts = 0;
        let guessedCorrectly = false;
        console.log(chalk_1.default.green(`Guess a number between 1 and ${maxNumber}`));
        while (!guessedCorrectly) {
            const answer = yield inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'guess',
                    message: 'Your guess:',
                    validate: (input) => !isNaN(parseInt(input)) || 'Please enter a valid number',
                },
            ]);
            const guess = parseInt(answer.guess);
            attempts += 1;
            if (guess === randomNumber) {
                console.log(chalk_1.default.blue(`Congratulations! You guessed the correct number in ${attempts} attempts.`));
                guessedCorrectly = true;
            }
            else if (guess < randomNumber) {
                console.log(chalk_1.default.yellow('Too low! Try again.'));
            }
            else {
                console.log(chalk_1.default.yellow('Too high! Try again.'));
            }
        }
        totalAttempts += attempts;
        rounds += 1;
        const playAgainAnswer = yield inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'playAgain',
                message: 'Do you want to play again?',
            },
        ]);
        playAgain = playAgainAnswer.playAgain;
    }
    console.log(chalk_1.default.green(`You played ${rounds} rounds with an average of ${(totalAttempts / rounds).toFixed(2)} attempts per round.`));
});
playGame();
