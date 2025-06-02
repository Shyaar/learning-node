// let time = 0;


// let timer = setInterval(() => {
//     console.log(`node in 3 seconds`);
//     if (time > 5) {
//         clearInterval(timer);
//         console.log('Timer stopped');
//     }
//     console.log(`Time elapsed: ${time} seconds`);
//     time++;
// },3000)


// console.log(__dirname);
// console.log(__filename);

//Function statements, expressions::: modules

// Function statement
function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('John');

//function expression
const sayGoodbye = function(name) {
    console.log(`Goodbye ${name}`);
};

sayGoodbye('John');

//function statment are function that we declare with the function keyword and a name to the function as seen in example 1 above while function statements are function that we also declare with the function keyword but without a function name (an anonymous function). we however store said function in a variable:: becoming the functions name:: we invoke the function by calling the variable name as seen in example 2 above.

//note:: we can pass a function as a parameter to another function, we can also return a function from another function. This is called a higher order function.

//Modules are reusable pieces of code that can be imported and used in other files. In Node.js, we can create modules using the `module.exports` object. We can also import modules using the `require` function.


const counter = require('./counter');

let items = ['apple', 'banana', 'orange'];

console.log(counter.count(items));