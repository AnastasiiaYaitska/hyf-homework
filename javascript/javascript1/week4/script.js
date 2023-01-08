let userName = '';
let todoList = [];


function setName(arrayWithoutDuplicatedWords) {

    userName = arrayWithoutDuplicatedWords.pop();
    return `Nice to meet you ${userName.charAt(0).toUpperCase() + userName.slice(1)}`;      //    make first character in upper case    
}

function getName(arrayWithoutDuplicatedWords) {

    if (userName === '') {
        return "You didn't introduce your self"
    } else {
        return `${userName.charAt(0).toUpperCase() + userName.slice(1)}`;
    }
 }

function addTodo(todo) {
    
    if (todoList.includes(todo)) {
        return 'Todo is already in the list';
    } else {
        todoList.push(todo);
        return `${todo} added to your todo`;
    }
}

function removeTodo (todo) {

    if (todoList.length === 0) {
        return 'Your todo list is empty!'
    } else if (!todoList.includes(todo)) {
        return "The todo doesn't exist in your todo list";
    } else if (todoList.includes(todo)) {
        const index = todoList.indexOf(todo);
        todoList.splice(index, 1);
        return `Removed ${todo} from your todo`;
    }
}

function getTodo() {
    
    if (todoList.length === 0) {
        return "You todo is empty"
    }
    return todoList;
}

function getDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString("en", { month: "long"  });
        const year = date.getFullYear();
        
        return ` ${day} of ${month} ${year}`;
}

function calculation(command) {
    
        const action = command.toLowerCase().slice(7);
        return eval(action);
    }

function setTimer(command) {
    
        const ms = command.toLowerCase().split(' ').splice(4, 1) * 10000 ;
        console.log(`Timer set for ${ms} minutes`);
        
        return  setTimeout(() => {
            console.log("Timer done");
        }, ms);
}


function getReply(command) {

    // command transformation into an array of keywords
    const stringWithoutSpecChars = command.replace(/[^\w\s]/gi, '')
    const commandTransformToArray = stringWithoutSpecChars.toLowerCase().split(' ');
    const arrayWithoutDuplicatedWords = commandTransformToArray.filter((word, index, array) => array.indexOf(word) === index);   //    make new array without dabbled words
    
    const todoItem = commandTransformToArray.slice(1, - 3);
    const todo = todoItem.join(' ');

    
    // check conditions if a keyword has matches to run a corresponding callback function with an array of non-duplicated words 
    if (arrayWithoutDuplicatedWords.includes('name') && arrayWithoutDuplicatedWords[0] === 'hello') {
        return setName(arrayWithoutDuplicatedWords);
    }
    
    if (arrayWithoutDuplicatedWords.includes('what') && arrayWithoutDuplicatedWords.includes('name')) {
        return getName(arrayWithoutDuplicatedWords);
    }
    
    if (arrayWithoutDuplicatedWords[0] === 'add' && arrayWithoutDuplicatedWords.includes('todo') ) {
        return addTodo(todo);
    }
    
    if (arrayWithoutDuplicatedWords.includes('remove') && arrayWithoutDuplicatedWords.includes('todo')) {
         return removeTodo(todo);
        }
        
    if (arrayWithoutDuplicatedWords.includes('what') && arrayWithoutDuplicatedWords.includes('todo')) {
        return  getTodo();
    }
    
    if (arrayWithoutDuplicatedWords.includes('what') && arrayWithoutDuplicatedWords.includes('day') && arrayWithoutDuplicatedWords.includes('today')) {
        return  getDate();
    }
    // regular expression to check if command includes numbers
    if (/\d/.test(command) && arrayWithoutDuplicatedWords.includes('what')) {
        return calculation(command);
    }

    if (command.toLowerCase().startsWith('set a timer for') && command.toLowerCase().endsWith('minutes') && /\d/.test(command)) {
        return setTimer(command);
    }
        
        return 'Command not found'
};
    
    console.log(getReply("Hello my my name is Benjamin"));
    console.log(getReply("What is my name"));
    console.log(getReply("Add singing in the shower to my todo"));
    console.log(getReply("Add fishing to my todo"));
    console.log(getReply('Remove fishing from my todo'));
    console.log(getReply('What is on my todo?'));
    console.log(getReply('What day is it today?'));
    console.log(getReply('what is 3 + 4'));
    console.log(getReply('Set a timer for 4 minutes'));



