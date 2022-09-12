const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return  a - b;
};

const sum = function(a) {
  let final = 0;
	for(element in a){
    final += Number(a[element]);
  }
  return final;
};

const multiply = function(a) {
  let final = a[0];
	for(element in a){
    if(element != 0){
      final *= Number(a[element]);
    }
  }
  return final;
};

const power = function(a, b) {
  let final = a;
	for(let i = 1; i < b; i++){
    final *= a
    console.log(final);
  }
  return final;
};

const factorial = function(a) {
  let number = 0;
  let final = 1;
	for(let i = 0; i < a; i++){
    number += 1;
    final *= number;
  }
  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
