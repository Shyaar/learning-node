// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }
// function modulus(a, b) {
//     return a % b;
// }

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     modulus
// };

// module.exports.add = function add(a, b) {
//     return a + b;
// };


// module.exports.subtract = function subtract(a, b) {
//     return a - b;
// };


// module.exports.multiply = function multiply(a, b) {
//     return a * b;
// };


// module.exports.divide = function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// };



// module.exports.modulus = function modulus(a, b) {
//     return a % b;
// }


exports.add = function add(a, b) {
    return a + b;
};


exports.subtract = function subtract(a, b) {
    return a - b;
};


exports.multiply = function multiply(a, b) {
    return a * b;
};


exports.divide = function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};



module.exports.modulus = function modulus(a, b) {
    return a % b;
}
