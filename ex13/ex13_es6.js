const [sum, loop_input] = [require(`../_01_sum_fx`), require(`../_00_input_loop_function.js`)];

let arrays = loop_input();
let answer = {};

// what is this problem want?
// want to count the number of duplicate arrays

// so you need to loop every element?
// yes 

arrays.forEach(function(element) {answer[element] = (answer[element] || 0) + 1;});
// varuable || true always varuable but true || false is true
// so in this case if it (answer[element](undefinded) || -1) + 1 it will equal 0
// and 0  || -1 always -1

let answer_key_list = Object.keys(answer);
answer_key_list.forEach(function(element) {(answer[element]) -= 1});

let answer_value_list = Object.values(answer);

let real_answer = sum(answer_value_list);

// console.log(arrays.indexOf(100, 5))
console.log(`Total number of duplicate elements = ${real_answer}`)


