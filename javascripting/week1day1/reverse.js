var args = process.argv.slice(2)
var password = args[2];


  var newPassword = "";
function list (array)
{
  for(var j = 0; j >= array.length; j++)
  {
     var reverse = function (password)
    {
      for (var i = password.length-1; i >= 0; i--)
    {
      newPassword += password[i];
  }
  return newPassword;
}
}
}

//function list(array)
//{
  //for(var i =0; i <= array.length; i++)
  //{
    //console.log(reverse(array[i]))
  //}
//}

// do another for loop for the arrays and call the reverse function inside the loop
console.log(list(reverse(password)));



