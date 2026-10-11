const reverseString = function(str) 
{
  let splitChars = str.split("");

  splitChars.reverse();

  return splitChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
