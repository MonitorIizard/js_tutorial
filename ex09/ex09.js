const input_loop = require(`../_00_input_loop_function`);
const input = require(`readline-sync`);

let problems = input_loop();
let deleted_position = input.question(`input index to deleted: `);
deleted_position -= 1;
// expected answer is [10, 30, 40, 50]

//* ecma6 
// problems.splice(deleted_position, 1);
// console.log(`answer is ${problems}`);

let answer = [];

for (let i = 0; i < problems.length; i++) {
    if(i == deleted_position) {
        continue;
    }
    answer.push(problems[i]);
}

console.log(`answer = ${answer}`)