var numComputer = [];
for (var i = 0; i < 16; i++) {
  numComputer.push(getRandomIntInclusive(1,100));
}
console.log(numComputer);
var i = 0;
var trovato;
do {
  var num = parseInt(prompt("Inserire un numero da 1 a 100"));
  trovato = numComputer.includes(num);
  i++;
  console.log(trovato);
} while (trovato == false && i < 84 );
if (trovato== false) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso", i);
}
// function
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min +1 )+min);
  return result;
}
