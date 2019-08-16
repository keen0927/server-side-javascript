const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./fsGeneraget.txt');
console.log('1');
data = fs.readFileSync('./fsGeneraget.txt');
console.log('2');
data = fs.readFileSync('./fsGeneraget.txt');
console.log('3');
console.log('끝');