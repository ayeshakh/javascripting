var array = [10, 2, 5, 1, 9];

array.sort(compareNumbers);

function compareNumbers(a, b) {
  return a - b;
}

console.log(array);

//OR

//var array = [10, 2, 5, 1, 9];
//array.sort(function(a, b) {
  //return a - b;
//});

//console.log(array);
