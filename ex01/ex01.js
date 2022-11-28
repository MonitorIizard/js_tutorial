const readlineSync = require('readline-sync');

let problem = [0, -1, 5, -3, -4 ,9];

answer = [];

let i = 0;

// while (i < problem.length) {
//     if (problem[i] < 0) {
//         answer.push(problem[i]);
//     }
//     i++;
// }

answer = problem.filter((problem) => Number(problem) < 0)


console.log(`answer is ${answer}.`)