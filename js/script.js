// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let distance = parseFloat(prompt('Inserire i KM da percorrere:'));
let age = parseInt(prompt("Inserire l'età del passeggero"));

let price = 0.21 * distance;

if (age < 18) {
    price = price - price * 20 / 100;
} else if (age > 65) {
    price = price - price * 40 / 100;
}
console.log(price);
price = price.toFixed(2);

document.getElementById('app').innerHTML = "Il prezzo del tuo biglietto è: " + price + '€';