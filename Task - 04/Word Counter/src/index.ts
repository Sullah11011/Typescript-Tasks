import inquirer from 'inquirer';

const countCharactersAndWords = (text: string) => {
  const charactersWithoutSpaces = text.replace(/\s+/g, '');
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  const characterCount = charactersWithoutSpaces.length;

  return {
    wordCount,
    characterCount,
  };
};

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'paragraph',
      message: 'Enter a paragraph:',
    }
  ]);

  const { paragraph } = answers;
  const { wordCount, characterCount } = countCharactersAndWords(paragraph);

  console.log(`Word count (excluding whitespace): ${wordCount}`);
  console.log(`Character count (excluding whitespace): ${characterCount}`);
};

main();
