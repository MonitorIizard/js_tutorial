const input_loop = require(`../_00_input_loop_function`);
const check_unique = (number) => {
    for (let j = 2; j <= number; j++) {
        if (number % j == 0 && j !== number) {
            return  false;
        }
    }
    return true;
}
let arrays = [1,2,3,4,5] //input_loop();
let answer_loop_methods = [];
let answer_ecma_methods;

for (let i = 0; i < arrays.length; i++) {
    if (check_unique(arrays[i])) answer_loop_methods.push(arrays[i])
}
console.log(`All unique elements in the array are: ${answer_loop_methods}`);

answer_ecma_methods = arrays.filter(function (e) {
    return check_unique(e)
    }
);

// console.log(answer_ecma_methods)
