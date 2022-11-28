const input_loop = require(`../_00_input_loop_function`)

let arrays = input_loop();

let arrays1 = arrays.slice()
let arrays2 = [... arrays]

console.log(`Array1 = ${arrays2}`)
console.log(`Array2 = ${arrays1}`)
console.log(arrays1 == arrays2)