const input_loop = () => {
    const input = require(`readline-sync`)
    let size = input.question(`input size: `)
    let arrays = []
    for (let i = 0; i < size ; i++) {
        element = Number(input.question(`input element ${i + 1} : `))
        arrays.push(element)
    }
    return arrays
}

module.exports = input_loop