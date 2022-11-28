const input_loop = require(`../_00_input_loop_function`)

let arrays = input_loop();
let negative = 0;

arrays.forEach(function(element) {
    if (element < 0) {
        negative += 1;
    }
})

console.log(`Total number of negative elements: ${negative}`);