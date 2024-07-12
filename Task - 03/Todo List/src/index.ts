import inquirer from 'inquirer';

type Todo = {
     id: number;
     text: string;
     completed: boolean;
};

let todos: Todo[] = [];

const mainMenu = async () => {

     const answers = await inquirer.prompt([
          {
               type: 'list',
               name: 'menu',
               message: 'What would you like to do?',
               choices: [
                    { name: 'Add a new todo', value: 'Add a new todo' },
                    { name: 'View all todos', value: 'View all todos' },
                    { name: 'Mark a todo as completed', value: 'Mark a todo as completed' },
                    { name: 'Delete a todo', value: 'Delete a todo' },
                    { name: 'Exit', value: 'Exit' }
               ],
          }
     ]);

     switch (answers.menu) {
          case 'Add a new todo':
               await addTodo();
               break;
          case 'View all todos':
               viewTodos();
               break;
          case 'Mark a todo as completed':
               await markTodoAsCompleted();
               break;
          case 'Delete a todo':
               await deleteTodo();
               break;
          case 'Exit':
               process.exit();
     }

     await mainMenu();
};

const addTodo = async () => {
     const answers = await inquirer.prompt([
          {
               type: 'input',
               name: 'text',
               message: 'Enter the todo:',
          }
     ]);

     const newTodo: Todo = {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text: answers.text,
          completed: false
     };

     todos.push(newTodo);
     console.log('Todo added!');
};

const viewTodos = () => {
     console.log('\nTodo List:');
     todos.forEach((todo) => {
          console.log(`${todo.id}. [${todo.completed ? 'x' : ' '}] ${todo.text}`);
     });
     console.log('');
};

const markTodoAsCompleted = async () => {
     const answers = await inquirer.prompt([
          {
               type: 'input',
               name: 'id',
               message: 'Enter the id of the todo to mark as completed:',
               validate: (input: string) => !isNaN(parseInt(input)) || 'Please enter a valid number',
          }
     ]);

     const id = parseInt(answers.id);
     const todo = todos.find(todo => todo.id === id);

     if (todo) {
          todo.completed = true;
          console.log('Todo marked as completed!');
     } else {
          console.log('Todo not found!');
     }
};

const deleteTodo = async () => {
     const answers = await inquirer.prompt([
          {
               type: 'input',
               name: 'id',
               message: 'Enter the id of the todo to delete:',
               validate: (input: string) => !isNaN(parseInt(input)) || 'Please enter a valid number',
          }
     ]);

     const id = parseInt(answers.id);
     const index = todos.findIndex(todo => todo.id === id);

     if (index !== -1) {
          todos.splice(index, 1);
          console.log('Todo deleted!');
     } else {
          console.log('Todo not found!');
     }
};

mainMenu();
