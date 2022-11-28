const input = require(`readline-sync`);
const input_loop = require(`../_00_input_loop_function`)



let arrays = input_loop()

let even = arrays.filter(element => element % 2 == 0)
let odd = arrays.filter(function(item) {
    return even.indexOf(item) < 0
})

//* index of will return as a index if index is less than 0 it mean
//* no element 

odd = odd.length
even = even.length

console.log(`odd is ${odd}`)
console.log(`even is ${even}`)