const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  if(a.length<1)
    return 0
  const totalSum = a.reduce((total,b)=>{
    return total +=b;
  });
  return totalSum;
};

const multiply = function(arr) {
  const totalprod=arr.reduce((prod,a)=>{
    return prod*= a;
  });
  return totalprod;
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let fact=1;
  if(a<=1)
  {
    return 1;
  }
  for(let i =1; i<=a;i++)
  {
    fact*=i;
  }
  return fact;
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
