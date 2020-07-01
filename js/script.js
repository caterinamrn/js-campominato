// mi creo variabili per inserire il numero massimo di numeri richiesti così che se devo cambiarli posso cambiarli velocemente
// utilizzo cicli while visto che non so quante ripetizioni sono necessarie anche se conosco il numero finale a cui devo arrivare
// utilizzo di functions mi semplifica il codice, posso utilizzarle più volte e semplificano il codice, soprattuto gli if -in questo caso- avendo a disposizioni delle condizioni create dalle functions


  var numComputer = [];
  var maxNumComputer = 16;
  var numUtente = [];
  var maxNumUtente = 84;
  var num;
// creo numeri casuali da 1 a 100 senza ripetizioni
  while (numComputer.length < maxNumComputer) {
    console.log(numComputer.length);
    var numRandom = getRandomIntInclusive(1,100);
    if (inclusoInArray(numComputer,numRandom) == false) {
      numComputer.push(numRandom);
    }
  }
  console.log(numComputer);

// chiedo all'utente un numero da 1 a 100 fino a quando non ne scrive uno uguale a quelli generati in numComputer
//  while (numUtente.length < maxNumUtente && !(inclusoInArray(numComputer,num)) && condizioni(100,1,num)== true ) {
//     num = parseInt(prompt("Inserire un numero da 1 a 100"));
//     if (!(inclusoInArray(numUtente,num)) && !(inclusoInArray(numComputer,num)) && condizioni(100,1,num)== true ) {
//       numUtente.push(num);
//     }
// }
do {
  num = parseInt(prompt("Inserire un numero da 1 a 100"));
      if (!(inclusoInArray(numUtente,num)) && !(inclusoInArray(numComputer,num)) && condizioni(100,1,num)== true ) {
        numUtente.push(num);
      }
} while (numUtente.length < maxNumUtente && !(inclusoInArray(numComputer,num)) && condizioni(100,1,num)== true);
console.log(numUtente,numUtente.length);
// risultato
if (numUtente.length == maxNumUtente) {
  console.log("Complimenti! Hai vinto!");
}
else {
  console.log("Hai perso!");
}
console.log("il tuo punteggio è di", numUtente.length);
// for (var i = 0; i < 16; i++) {
//   numComputer.push(getRandomIntInclusive(1,100));
// }
// console.log(numComputer);
// var i = 0;
// var trovato;
// do {
//   var num = parseInt(prompt("Inserire un numero da 1 a 100"));
//   trovato = numComputer.includes(num);
//   i++;
//   console.log(trovato);
// } while (trovato == false && i < 84 );
// if (trovato== false) {
//   console.log("Hai vinto");
// } else {
//   console.log("Hai perso", i);
// }

// while (arraynum.length < numComputerMax) {
//   numRandom = getRandomIntInclusive(1,10);
//   if (inclusoInArray(numComputer,numRandom) == false) {
//     numRandom.push(numComputer);
//   }
// }

// functions
// generatore numeri randomici
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min +1 )+min);
  return result;
}
// devo creare una function per vedere se c'è una ripetizione(sia per i numeri random che per i numeri inseriti dall'utente)che sostituisce includes
function inclusoInArray (array,num){
  // for (var i = 0; i < array.length; i++) {
  //   if (num == array[i]) {
  //     return false;
  //   }
  //   return true;
  // }
  var i = 0;
  var trovato = false;
  while (i < array.length && trovato == false) {
    if (num == array[i]) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}
// devo creare una function per vedere se il numero inserito è nel range e se è un numero
function condizioni(max,min,num){
  // console.log(num < min,num > max,isNaN(num),num < min || num > max || !isNaN(num));
  var incluso = true;
  if (num < min || num > max || isNaN(num)) {
    return incluso = false;
  }
  return incluso = true;
}
