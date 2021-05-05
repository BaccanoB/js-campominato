// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

function numeroInArray (elemento, array){
    for (var i = 0; i < array.length; i++){
        if (elemento == array[i]){
            return true;
        }
    }
    return false
}

var bombe = [];

while (bombe.length < 16){
      var numeroCasuale = numeriCasuali(1, 100);
      console.log(numeroCasuale);
      if (!numeroInArray(numeroCasuale, bombe)){
          bombe.push(numeroCasuale);
      }
 }

console.log(bombe);


// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.

var scelteUtente = [];
var richiesta = 84;

var giocoFinito = 0;

while (scelteUtente.length < richiesta && giocoFinito == 0){
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"))
    console.log(numeroUtente);
    if (numeroInArray(numeroUtente, bombe)){
        giocoFinito = 1;
        console.log("Il gioco è terminato: il tuo punteggio è " + scelteUtente.length);
    } else if (!numeroInArray(numeroUtente, scelteUtente)){
        scelteUtente.push(numeroUtente);
    }
}

if (scelteUtente.length == richiesta) {
    console.log("Hai vinto! Il tuo punteggio è " + scelteUtente.length);
}


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50