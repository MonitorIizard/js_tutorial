const sort_array = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays.length; j++) {
            if (arrays[j] > arrays[i]) {
                let temp = arrays[i];
                arrays[i] = arrays[j];
                arrays[j] = temp;
            }
        }
    }
    return arrays;
}

module.exports = sort_array;