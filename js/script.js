//          ESERCIZIO 1: PAROLA PALINDROMA          //

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// INPUT
var inputParola = document.getElementById('input-parola');

// BOTTONI
var verifica = document.getElementById('verifica');

// OUTPUT
var messaggio = '';
var parolaUtente = document.getElementById('parola-inserita');
var parolaRovesciata = document.getElementById('parola-rovesciata');
var validazione = document.getElementById('validazione');

// VERIFICA
verifica.addEventListener('click',
  function() {
    var parolaInserita = inputParola.value;
    parolaInserita = parolaInserita.trim();

    if (isPalindroma(parolaInserita)) {
      messaggio = 'La parola è palindroma';

    } else {
      messaggio = 'La parola non è palindroma';
    }

    parolaUtente.innerHTML = 'La parola che hai inserito è: ' + parolaInserita;
    parolaRovesciata.innerHTML = 'Letta al contrario: ' + rovescia(parolaInserita);
    validazione.innerHTML = messaggio;
  }
)

//          ESERCIZIO 2: PARI E DISPARI          //

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// INPUT
var inputNumero = document.getElementById('input-numero');
var scelta = document.getElementById('scelta');

// BOTTONI
var pari = document.getElementById('pari');
var dispari = document.getElementById('dispari');
var gioca = document.getElementById('gioca');

// OUTPUT
var errore = document.getElementById('errore');
var utente = document.getElementById('numero-utente');
var bot = document.getElementById('numero-bot');
var somma = document.getElementById('somma');
var winnerIs = document.getElementById('vincitore');

// SCEGLI
// Pari
pari.addEventListener('click',
  function() {
    scelta.value = 'pari';
  }
)

// Dispari
dispari.addEventListener('click',
  function() {
    scelta.value = 'dispari';
  }
)

// GIOCA
gioca.addEventListener('click',
  function() {
    var numeroUtente = parseInt(inputNumero.value); // rendo intero il numero inserito dall'utente
    var numeroBot = randomInt(1, 5); // genero un numero random per il computer

    // Valori di default dei singoli campi da compilare
    var messaggioErrore = '';
    var vincitore = 'Computer';
    utente.innerHTML = '';
    bot.innerHTML = '';
    somma.innerHTML = '';
    winnerIs.innerHTML = '';

    // Se scegli pari o dispari
    if ((scelta.value === 'pari') || (scelta.value === 'dispari')) {

      // Chiedi se il numero inserito NON è compreso tra 0 e 5
      if((numeroUtente < 0) || (numeroUtente > 5) || (isNaN(numeroUtente))) {
        messaggioErrore = 'Inserisci un numero da 0 a 5';

        // Altrimenti, se il numero è compreso tra 1 e 5
        // e hai scelto pari o dispari (precedentemente chiesto), fai la somma
      } else {
        var totale = numeroUtente + numeroBot;
        messaggioErrore = '';

        // Se la somma è pari e l'utente ha scelto pari o se la sommma è dispari e l'utente ha scelto dispari
        if (((isEven(totale)) && (scelta.value === 'pari')) || (!(isEven(totale)) && (scelta.value === 'dispari'))) {
          vincitore = 'Utente';
        }

        utente.innerHTML = 'Numero che hai scelto tu: ' + numeroUtente;
        bot.innerHTML = 'Numero che ha scelto il computer: ' + numeroBot;
        somma.innerHTML = 'La somma è: ' + totale;
        winnerIs.innerHTML = 'Winner is: ' + vincitore;
      }

      // Altrimenti non hai scelto niente
    } else {
      messaggioErrore = 'Seleziona un\'opzione tra Pari o Dispari';
    }

    // Stampa dei dettagli
    errore.innerHTML = messaggioErrore;
  }
)

//          FUNZIONI           //

// ----- STRINGA ----- //
// ROVESCIA STRINGA
// Ritorna una STRINGA
function rovescia(stringa) {
  var stringaReverse = '';

  // Giro contrario, partendo dall'ultima lettera
  // concateno ogni lettera in una nuova variabile di tipo striga
  for (var i = (stringa.length - 1); i >=0; i--) {
    stringaReverse += stringa[i];
  }

  return stringaReverse;
}

// VERIFICA PAROLA PALINDROMA
// Ritorna un valore BOOLEANO
function isPalindroma(stringa) {
  var risultato = false;

  if (stringa === rovescia(stringa)) {
    risultato = true;
  }

  return risultato;
}

// FRAZIONA LA STRINGA
// Ritorna un ARRAY
function fraziona(stringa) {
  var arrayStringa = [];

  // Pusho ogni lettera dentro un nuovo array
  for (var i = 0; i < stringa.length; i++) {
    arrayStringa.push(stringa[i]);
  }

  return arrayStringa;
}

// ROVESCIA ARRAY
// Ritorna una STRINGA
function rovesciaArray(stringa) {
  var stringaReverseArray = [];

  // Popolo l'array con ogni lettera della stringa
  var stringaArray = fraziona(stringa);

  // Pusho ogni lettera dell'array, partendo dalla fine, in un nuovo arrayReverse
  for (var i = (stringaArray.length - 1); i >= 0; i--) {
    stringaReverseArray.push(stringaArray[i]);
  }

  return stringaReverseArray.join('');
}
// ----- FINE STRINGA ----- //

// ----- NUMERO ----- //
// NUMERO CASUALE (Range)
// Ritorna un NUMERO
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PARI O DISPARI
// Ritorna un BOOLEANO
function isEven(numero) {
  var boolean = false

  if (numero % 2 == 0) {
    boolean = true;
  }

  return boolean;
}
// ----- FINE NUMERO ----- //
