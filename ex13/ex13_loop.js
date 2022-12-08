const loop_input = require(`../_00_input_loop_function`);

let arrays = loop_input();
let dict = {};
let key_dict;
let answer;

for (let i = 0; i < arrays.length; i++) {
    dict[arrays[i]] = (dict[arrays[i]] == undefined) ? dict[arrays[i]] = 0 : dict[arrays[i]] = dict[arrays[i]] + 1;
}

key_dict = Object.keys(dict);

answer = 0;

for (let j = 0; j < key_dict.length; j++) {
    answer += dict[key_dict[j]];
}

console.log(`Total number of duplicate elements = ${answer}`);