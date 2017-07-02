var words = ["ground", "control", "to", "major", "tom"];

function map (word, callback) {
  var array = [];
    for(var i = 0; i < word.length; i++){
      array.push(callback(word[i]));
  }
  console.log(array);
}

map(words, function(word){
  return word.length;
});


















//go through each element of the array using a forEach loop
  //take the array and pass gthrough the call back func one at a time to get the length


  //make a new array with length



//Implement your own version of the built-in array map function
//Yours will take in two arguments. The first will be an array to map and the second will be a callback
//function. The function will return a new array based on the results of the callback function.