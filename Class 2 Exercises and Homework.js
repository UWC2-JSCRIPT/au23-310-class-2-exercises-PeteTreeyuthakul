// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const me = {
  firstName : 'Pete',
  lastName : 'Treeyuthakul',
  'favorite food' : 'Padthai',
  bestFriend : {
    firstName : 'Batman',
    lastName : 'Wayne',
    'favorite food' : 'Joker Pie',
  }
}

// 2. console.log best friend's firstName and your favorite food

console.log(`My best friend's first name is ${me.bestFriend.firstName}.`)
console.log(`My favorite food is ${me['favorite food']}.`)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTacToe =[
  ['-','o','-'],
  ['-','x','o'],
  ['x','-','x']
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToe[0][2]='o'

// 5. Log the grid to the console.

console.log(ticTacToe[0])
console.log(ticTacToe[1])
console.log(ticTacToe[2])

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const myEmail = 'petetree@uw.edu'
const regexEmail = /\w\S+@+\w\S+.+\w\S+$/

console.log(regexEmail.test(myEmail))

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const assignDate= new Date(assignmentDate)

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

let dueDate = assignDate 

dueDate.setDate(assignDate.getDate()+7)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const strdateTime1 = `${dueDate.getFullYear()}-${dueDate.getMonth()+1}-${dueDate.getDate()}`
const strdateTime = `<time datetime= "${strdateTime1}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`

// 10. log this value using console.log
console.log(strdateTime)
