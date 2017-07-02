tweeps = ['@waxy', '@mozilla'];
console.log("My tweeps:", tweeps); //check to see if it works

function addOne()
{
  var tweeps = [];// local if var is added
  tweeps.push('@lighthouselabs')
}

addOne();
console.log("My tweeps again:", tweeps);

///////////////////////////

var tweeps = ['@waxy', '@mozilla'];
console.log("My tweeps:", tweeps); //check to see if it works

function addOne()
{
  tweeps = []; // will remove the above box and replace it with @lighthouse
  tweeps.push('@lighthouselabs')
}

addOne();
console.log("My tweeps again:", tweeps);


///////////////////////////
//better was to add one to that array without messing up the global variable

var tweeps = ['@waxy', '@mozilla'];
console.log("My tweeps:", tweeps); //check to see if it works

function addOne(tweeps, theOne)// tweeps here only belongs to this function it doesnt mean the global tweeps. any name would do
{
   tweeps.push(theOne)
   return tweeps;
}

newTweeps = addOne(tweeps, @lighthouselabs)
console.log("My tweeps again:", newTweeps);


//////////////////////////

var tweeps = ['@waxy', '@mozilla'];
console.log("My tweeps:", tweeps); //check to see if it works

function addOne(tweeps, theOne)// tweeps here only belongs to this function it doesnt mean the global tweeps. any name would do
{
   tweeps.push(theOne)
   return tweeps;
}

function showFirst(someArray){
  return someArray[0];
}

newTweeps = addOne(tweeps, @lighthouselabs);
newTweeps = addOne(tweeps, @wired);
newTweeps = addOne(tweeps, showFirst];

console.log("My tweeps again:", newTweeps);
console.log("thefirst item is: ", newTweeps[4] (newTweeps, function(what){ console.log("win", what)}))

varShowFirst = function (someArray, howToShow)
{
 howToShow(someArray[0]);
  return someArray[0];
}


























console.log("My tweeps again:", newTweeps);