var btn = document.getElementById('btn');

 btn.addEventListener("click", function () {
   var livello = document.getElementById('livello').value;
   var maxRange;
   if (livello == "facile") {
     maxRange = 100;
   }
   else if (livello == "medio") {
     maxRange = 80;
   }
   else if (livello == "difficile") {
     maxRange = 50;
   }
   else {
     alert("Devi selezionare un opzione");
   }

     var numComputer = [];
     var maxNumComputer = 16;
     var numUtente = [];
     var maxNumUtente = 84;
     var num;
   // creo numeri casuali da 1 a 100 senza ripetizioni
     while (numComputer.length < maxNumComputer) {
       console.log(numComputer.length);
       var numRandom = getRandomIntInclusive(1,maxRange);
       if (inclusoInArray(numComputer,numRandom) == false) {
         numComputer.push(numRandom);
       }
     }
     console.log(numComputer);

   // chiedo all'utente un numero da 1 a 100 fino a quando non ne scrive uno uguale a quelli generati in numComputer
   do {
     num = parseInt(prompt("Inserire un numero da 1 a 100"));
         if (!(inclusoInArray(numUtente,num)) && !(inclusoInArray(numComputer,num)) && condizioni(maxRange,1,num)== true ) {
           numUtente.push(num);
         }
   } while (numUtente.length < maxNumUtente && !(inclusoInArray(numComputer,num)) && condizioni(maxRange,1,num)== true);

   console.log(numUtente,numUtente.length);
   // risultato
   if (numUtente.length == maxNumUtente) {
     // console.log("Complimenti! Hai vinto!");
     alert("Complimenti! Hai vinto!");
   }
   else {
     // console.log("Hai perso!");
     alert("Hai perso!" + "Il tuo punteggio è " + numUtente.length );
   }
   console.log("il tuo punteggio è ", numUtente.length);
   console.log("Hai perso insererndo il numero",num);
 });






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
  var incluso = false;
  if (num < min || num > max || isNaN(num)) {
    return incluso = false;
  }
  return incluso = true;
}
