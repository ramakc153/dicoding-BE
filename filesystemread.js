const fs = require('fs');
const path = require('path')

// const data = fs.readFileSync(path.resolve(__dirname, 'notes.txt'),'UTF-8');
const data = fs.readFileSync('./notes.txt','UTF-8');

console.log(data)