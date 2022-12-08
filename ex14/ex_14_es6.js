const loop_input = require(`../_00_input_loop_function`);

let arrays = loop_input();
let unique = [];

unique = arrays.filter(function(e,i) {
    return arrays.indexOf(e) == i;
});

console.log(`After removing all duplicate elements\nElements of array are: ${unique}`);
