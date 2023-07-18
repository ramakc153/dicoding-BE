// TODO 1
const {EventEmitter} = require('events')


const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
    }

// TODO 2
let myEmitter = new EventEmitter();

// TODO 3
myEmitter.on('birthday', birthdayEventListener)


// TODO 4
myEmitter.emit('birthday', 'James', 'vaughn')