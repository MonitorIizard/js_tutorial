var readlineSync = require('readline-sync');

var size = readlineSync.question('input size please? ');
size = size - 1
const answer = []
let i = 0

while (i <= size) {
    element = readlineSync.question(`input element ${i + 1}: `)
    answer.push(element)
    i++;
}

console.log(`answer is ${answer}`)

