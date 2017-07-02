var numberOfDice = Number(process.argv[2]);
// Get a random integer from minValue to maxValue inclusive
function getRandomIntRange (minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
// Roll dice
function rollDice(numDice) {
  var output = "";
  for (var i = 0; i < numDice; i++) {
    // Roll a die, insert it into the output string
    output += getRandomIntRange(1,6);
    // Add a comma and space after each number except the last
    if (i < numDice - 1) {
      output += ", ";
    }
  }
  return output;
}
// We dont use numberOfDice in function so it can be used without input from CLI
console.log("Rolled " + numberOfDice + " dice: " + rollDice(numberOfDice));