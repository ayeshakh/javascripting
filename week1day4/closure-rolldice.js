//var rollDie = function () {
  //return Math.floor(1 + Math.random() * 6);
//}

//console.log(rollDie());

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
var id = 0;

  return function() {

    //var die = list[id]
    //id+=1
    // return die;
    return list[id++]

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6




//However, instead of a random die, we want to create a cheat die that would let us predict the next number.
// Create a function called makeLoadedDie() which returns a function that when called,
//seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.