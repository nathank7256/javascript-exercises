const fibonacci = function(a) {
    let sequence = [1,1];
    for(let i = 0; i < a; i++){
        sequence.push(Number(sequence[i]) + Number(sequence[i + 1]));
    }
    return sequence[a - 1];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
