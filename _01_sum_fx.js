const sum = (arrays) => {
    let sum1 = 0;
    arrays.forEach(function(element) {sum1 += element});
    return sum1;
}

module.exports = sum;