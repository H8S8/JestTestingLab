// ANONYMOUS FUNCTION
const sum = function(a, b){
    return a + b;
};

// ARROW FUNCTION
const subtract = (a, b) => a - b;

// NAMED FUNCTION
function multiply(a, b){
    return a * b;
};

// ANONYMOUS FUNCTION
const divide = function(a, b){
    return a / b;
};

// ARROW FUNCTION
const modulus = (a, b) => a % b;

// NAMED FUNCTION
function even(number){
    if(modulus(number, 2) == 0){
        return true;
    }
    return false;
};

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
