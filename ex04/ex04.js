const input = require(`readline-sync`);
let size = input.question("input size: ");
let arrays = []

for (let i = 0; i < size; i++) {
    element = input.question(`input element ${i + 1}: `);
    arrays.push(element);
}


for (let i = 0 ; i < arrays.length; i++ ) {
    for (let j = 0; j < arrays.length; j++) {
        let temp = 0
        if (arrays[i] < arrays[j]) {
            temp = arrays[i]
            arrays[i] = arrays[j]
            arrays[j] = temp
        }
    }
}

let second_max = arrays[arrays.length - 2]

console.log(`second max is ${second_max}`)