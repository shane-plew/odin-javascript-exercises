const removeFromArray = function(arr) {
 
  let delIndex = undefined;
  
  for (let i = 1; i < arguments.length; i++)
  {
    delIndex = arr.indexOf(arguments[i]);

    while (delIndex > -1) 
    {
      arr.splice(delIndex, 1);

      delIndex = arr.indexOf(arguments[i]);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
