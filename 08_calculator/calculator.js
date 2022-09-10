const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(list) {
  return list.reduce((previous, current) => previous + current, 0);
};

const multiply = function(list) {
  let total = 1;
  list.forEach(num => {
    total *= num;
  });

  return total;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
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
