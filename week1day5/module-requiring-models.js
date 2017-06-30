

function rounded(number){
  return Math.floor(number);
  console.log(number);
}

function addThree(x){
  return rounded(x) + 3;
}

module.exports = {
  addThree : addThree,
}

console.log(addThree(rounded(8.5)));
