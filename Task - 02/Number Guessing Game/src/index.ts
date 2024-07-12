import inquirer from 'inquirer';

const generateRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;

const playGame = async () => {
  const maxNumber = 10;
  let playAgain = true;
  let totalAttempts = 0;
  let rounds = 0;

  while (playAgain) {
    const randomNumber = generateRandomNumber(maxNumber);
    let attempts = 0;
    let guessedCorrectly = false;

    console.log(`Guess a number between 1 and ${maxNumber}`);

    while (!guessedCorrectly) {
      const answer = await inquirer.prompt([
        {
          type: 'input',
          name: 'guess',
          message: 'Your guess:',
          validate: (input: string) => !isNaN(parseInt(input)) || 'Please enter a valid number',
        },
      ]);

      const guess = parseInt(answer.guess);
      attempts += 1;

      if (guess === randomNumber) {
        console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        guessedCorrectly = true;
      } else if (guess < randomNumber) {
        console.log('Too low! Try again.');
      } else {
        console.log('Too high! Try again.');
      }
    }

    totalAttempts += attempts;
    rounds += 1;

    const playAgainAnswer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'playAgain',
        message: 'Do you want to play again?',
      },
    ]);

    playAgain = playAgainAnswer.playAgain;
  }

  console.log(`You played ${rounds} rounds with an average of ${(totalAttempts / rounds).toFixed(2)} attempts per round.`);
};

playGame();
