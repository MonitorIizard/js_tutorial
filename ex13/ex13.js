// >Input
// Input array elements: 1, 10, 20, 1, 25, 1, 10, 30, 25, 1

// >Output
// Total number of duplicate elements = 5

let arrays = [1, 10, 20, 1, 25, 1, 10, 30, 25, 1];
let dict = {};
let key_dict;
let answer;

// for (let i = 0; i < arrays.length; i++) {
//     dict[arrays[i]] = (dict[arrays[i]] == undefined) ? dict[arrays[i]] = 0 : dict[arrays[i]] = dict[arrays[i]] + 1;
// }

// key_dict = Object.keys(dict);

// answer = 0;

// for (let j = 0; j < key_dict.length; j++) {
//     answer += dict[key_dict[j]];
// }

// console.log(`Total number of duplicate elements = ${answer}`);