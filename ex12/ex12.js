const input_loop = require(`../_00_input_loop_function`);

let arrays = input_loop()
let answer_by_loops_method = [];
let ob = {};
let key_ob;

const count_frequency = (arrays) => {
    let ob = {}
    for (let i = 0; i < arrays.length; i++) {
        ob[`"${arrays[i]}`] = 0;
    }
    
    for (let j = 0; j < arrays.length; j++) {
        ob[`"${arrays[j]}`] += 1;
    }
    
    let key_list = Object.keys(ob);
    return ob;
}

ob = count_frequency(arrays);

key_ob = Object.keys(ob);
// console.log(key_ob);
for (let x = 0; x < key_ob.length; x++) {
    if (ob[key_ob[x]] === 1) answer_by_loops_method.push(Number(Object.keys(ob)[x].replace("\"", "")))
}

console.log(`answer is ${answer_by_loops_method}`);