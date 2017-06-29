//var myArgs = process.argv;

  // var sum = Number(myArgs[2]) + Number(myArgs[3]);
  //console.log(sum);

// above done by me below done by instructor
var args = process.argv.slice(2) // removes the first two word stuff so only gets the peoper array

var number 1 = Number(args[0]);
var number 2 = Number(args[1]);

if (Number.isNan(number1) || Number.isNan(number2) )
{
  console.log("INPUT WAS NOT A NUMBER")
}
else
{
  var sum = number1 + number 2;
  console.log(sum)
}