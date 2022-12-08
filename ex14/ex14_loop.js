const loop_input = require(`../_00_input_loop_function`);

let arrays = loop_input();
let answer = [];

for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] == undefined) continue;
    for (let j = 0; j < arrays.length; j++) {
        if (arrays[i] == arrays[j] && i !== j) {
            arrays[j] = undefined;
        }
    }
}

for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] == undefined) continue;
    answer.push(arrays[i]);
}

console.log(`After removing all duplicate elements \nElements of array are: ${answer}`);