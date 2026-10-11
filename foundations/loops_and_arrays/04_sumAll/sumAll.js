const sumAll = function(num1, num2) 
{
  let sum = 0;

  if (num1 < 1 || num2 < 1)
  {
    return "ERROR";
  }
  else if (num1 % 1 !== 0 || num2 % 1 !== 0)
  {
    return "ERROR";
  }
  else if (typeof num1 !== "number" || typeof num2 !== "number")
  {
    return "ERROR";
  }

  if (num1 < num2)
  {
    botRange = num1;
    topRange = num2;
  }
  else if (num1 > num2)
  {
    botRange = num2;
    topRange = num1;
  }

  for (let i = botRange; i <= topRange; i++)
  {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
