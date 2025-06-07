//the event module is used to handle events in the application
// it is a built-in module in Node.js that allows us to create and handle events. We can use the `EventEmitter` to create an event emitter object that can emit and listen for events.

// const events = require('events');

// // console.log(events);

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('greet', function(greeting) {
//     console.log(greeting);
// }
// );


// eventEmitter.emit('greet', 'Hello, event!');

// //another inbbuilt module is the utils this allows variables to inherit certain things from other objects

// const utils = require('util');

// let person = function (name){
//     this.name = name;
// }

// utils.inherits(person, events.EventEmitter);

// let james = new person('James');
// let john = new person('John');
// let jane = new person('Jane');

// let people = [james, john, jane];

// people.forEach((person) => {  
//     person.on('speak',(mess)=>{
//         console.log(`${person.name} said: ${mess}` )
//     });
// });

// james.emit('speak', 'hello person emmitter')


//reading and writing files we read and write files using the fs module


const fs = require('fs');

