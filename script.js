// CONSEGNA
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Creo un alert per visualizzare 5 numeri casuali
//  1a. Funzione che genera un numero random tra min e max
function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//  1b. Creo un array vuoto che popolo con i 5 numeri casuali
let pcNumber = [];
for (let i = 0; i < 5; i++) {
    const number = genericNumber(1, 100);
    pcNumber.push(number);
}
//  1c. Stampo con un alert l'array popolato
alert(pcNumber);

// 2. Con la funzione setTimeout chiedo all'utente dopo 30 secondi di inserire una alla volta i numeri
let userNumber = [];
let askNumber;
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        do {
            askNumber = Number(prompt("Inserisci una alla volta i numeri che hai appena visto"))
        } while (isNaN(askNumber) || askNumber < 1 || askNumber > 100);
        if (pcNumber.includes(askNumber)) {
            userNumber.push(askNumber);
        }
    }
    // 3. Stampo in console quanti e quali numeri sono stati indovinati
    console.log(`Hai indovinato ${userNumber.length} numeri (${userNumber})`);
}, 30000);
