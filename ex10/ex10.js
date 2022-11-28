const input_loop = require(`../_00_input_loop_function`);

let arrays = input_loop();

// expected 
// Frequency of 5 = 3
// Frequency of 10 = 2
// Frequency of 2 = 3
// Frequency of 50 = 1
// Frequency of 1 = 1
let object = {}
for(i = 0; i < arrays.length; i++) {
    if (object[`"${arrays[i]}"`] == 0) {
        continue;
    }
    object[`"${arrays[i]}"`] = 0
}

for(i = 0; i < arrays.length; i++) {
    object[`"${arrays[i]}"`] += 1
}

for(j = 0; j < Object.keys(object).length ; j++) {
    console.log(`frequency of ${Object.keys(object)[j].replace("\"", "").replace("\"", "")} is ${Object.values(object)[j]}`)
}

//* ecma6
// arrays.forEach(function(element, index) {
//     if (element == arrays[index]) {
        
//     }
// }
// )
