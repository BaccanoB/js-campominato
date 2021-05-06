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

// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// opzione bonus con if:
// if (difficoltà == 0){
//     richiesta = 84;
// }else if (difficoltà == 1) {
//     richiesta = 64;
// }else if ( difficoltà ==2) {
//     richiesta = 34;
// }

var difficolta;
do {
    difficolta = parseInt(prompt("Decidi il livello di difficoltà tra 0, 1 e 2"))
} while (difficolta !== 0 && difficolta !== 1 && difficolta !== 2);

var richiesta = 0;
var numeroMassimo = 0;

switch (difficolta){
    case 0:
        numeroMassimo = 100;
        richiesta = 84;
        break;
    case 1:
        numeroMassimo = 80;
        richiesta = 64;
        break;
    case 2:
        numeroMassimo = 50;
        richiesta = 34;
        break;
}

var bombe = [];

while (bombe.length < 16){
      var numeroCasuale = numeriCasuali(1, 100);
      if (!numeroInArray(numeroCasuale, bombe)){
          bombe.push(numeroCasuale);
      }
 }

console.log("array bombe ",bombe);


// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.

var scelteUtente = [];
var giocoFinito = 0;


while (scelteUtente.length < richiesta && giocoFinito == 0){
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + numeroMassimo))
    console.log(numeroUtente);

    if(isNaN(numeroUtente) || numeroUtente > numeroMassimo || numeroUtente < 1){
        var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + numeroMassimo))
    } else if (numeroInArray(numeroUtente, bombe)){
        giocoFinito = 1;
        document.getElementById("risultato").innerHTML = "Il gioco è terminato: il tuo punteggio è " + scelteUtente.length
    } else if (!numeroInArray(numeroUtente, scelteUtente)){
        scelteUtente.push(numeroUtente);
    }
}

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

if (scelteUtente.length == richiesta) {
    document.getElementById("risultato").innerHTML = "Hai vinto! Il tuo punteggio è " + scelteUtente.length
}

console.log("array utente ",scelteUtente);

