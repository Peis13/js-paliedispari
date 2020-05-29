// PALINDROMIA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// INPUT
var parolaUtente = prompt('Inserisci una parola');
console.log('parola inserita: ' + parolaUtente);
parolaUtente = parolaUtente.trim();
console.log('trim: ' + parolaUtente);
parolaUtente = parolaUtente.split('');
console.log('split: ' + parolaUtente);

var parolaReverse = [];
for (var i = 0; i < parolaUtente.length; i++) {
  parolaReverse.push(parolaUtente[i]);
}
parolaReverse.reverse()
console.log(parolaUtente);
console.log(parolaReverse);

// FUNZIONE
// function parolaPalindroma(parola) {
//   parola.trim(); // elimino gli spazi superflui
//   parola.split(' '); // trasformo la stringa in un array di lettere singole
//   var parolaReverse = parola.reverse();
//
// }



// var arrayParola = [];
// for (var i = 0; i < parola.length; i++) {
//   arrayParola.push(parola[i]);
//   console.log(arrayParola);
