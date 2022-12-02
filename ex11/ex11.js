const input_loop = require(`../_00_input_loop_function`);

let arrays = input_loop();

// expectation : All unique elements in the array are: 1, 2, 3, 5, 1, 5

let format_arrays = [];

for (let i = 0; i < arrays.length; i++){
    for(let j = 2; j <= arrays[i]; j++) {
        if (arrays[i] % j == 0 && j !== arrays[i]) {
            arrays[i] = false;
            break;
        }
    }
    if(arrays[i]) format_arrays.push(arrays[i]);
}

console.log(`All unique elements in the array are: ${format_arrays}`);

