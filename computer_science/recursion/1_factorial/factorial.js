const factorial = function(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
};



// Do not edit below this line
module.exports = factorial;