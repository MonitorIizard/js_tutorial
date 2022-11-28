// ```
// >Input
// Input array elements: 10, 50, 12, 16, 2

// >Output
// Maximum = 50
// Minimum = 2
let array = [10 , 50, 12, 15, 2]
let max = 0
let min = 0
// if i > j
// i0 = 10
// 10 50 12 15 2 
//  2 50 12 15 10
// i1 = 50 
// 2  50 12 15 2 ; j = 0
// 2  12 50 15 2 ; j = 1


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        let temp = 0;
        if (array[i] < array[j]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log(`${array}`)