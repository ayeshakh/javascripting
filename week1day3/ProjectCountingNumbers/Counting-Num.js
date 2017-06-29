
var result= {};


function countLetters(word)
{
var name = word.split(' ').join('').split('');
for(var i = 0; i < name.length; i++)
{

  var char = name[i];

  if(result[char] === undefined)
    {
      result[name[i]] = 1;
    }
  else
    {
      result[name[i]] += 1;
    }

  }
  return result;
}

console.log(countLetters("lighthouse in the house"));

//String.prototype.count=function(c) {
  //var result = 0, i = 0;
  //for(i;i<this.length;i++)if(this[i]==c)result++;
  //return result;
//};
//console.log("strings".count("s"));

// var string = 'lighthouse'
//var stringArr = string.split('')
// var string = 'lighthouse'

// string
//'lighthouse'
//var stringArr = string.split('')

//stringArr
//[ 'l', 'i', 'g', 'h', 't', 'h', 'o', 'u', 's', 'e' ]
//var result ={}
//undefined
//result
//{}
//result[stringArr[0]] = 1
//1
//result
//{ l: 1 }