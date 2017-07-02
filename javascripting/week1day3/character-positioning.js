var result= {};


function charPosition(word)
{
var name = word.split(' ').join('').split('');
for(var i = 0; i < name.length; i++)
{

  var char = name[i];

  if(result[char] === undefined)
    {
      result[name[i]] = [i];
    }
  else
    {
      result[name[i]].push(i);
    }

  }
  return result;
}

console.log(charPosition("lighthouse in the house"));

