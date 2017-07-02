var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },

];

 var result = students.sort(function(a,b) {

  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase()

   if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
else {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  else
  {
    return 0;
  }
}});

 console.log(result);



//students.sort(function(a, b, c) {
  //if
  //return a - b;
//});

//console.log(array);

//Write a sorting function (sometimes called a custom comparator),
//that sorts the above array first by the name ascending alphabetically,
//and in cases where the names are equal sort by descending age.
