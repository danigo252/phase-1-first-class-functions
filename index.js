//First Function
function receivesAFunction(callback)
{
  callback();
}

//Second Function
function returnsANamedFunction()
{
  function namedFunction()
  {

  }
  return namedFunction;
}

//third Function
function returnsAnAnonymousFunction()
{
  return  function()
  {

  };

}

