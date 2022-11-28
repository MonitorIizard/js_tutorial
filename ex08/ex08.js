const input_loop = require(`../_00_input_loop_function`);
const input = require(`readline-sync`);

let arrays = input_loop();
let element = input.question(`input element = `);
let insert = input.question(`input index to insert = `);
insert = insert - 1;
//* expect answer is 10, 20, 25, 30, 40, 50

// ecma : arrays.splice(insert - 1, 0, element);

let answer = [];

for (let i = 0; i < arrays.length + 1 ; i++) {
    if (i < insert) {
        answer.push(arrays[i])
    } else if (i === insert) {
        answer.push(element)
    } else {
        answer.push(arrays[i - 1])
    }
}

console.log(`answer is ${answer}`)