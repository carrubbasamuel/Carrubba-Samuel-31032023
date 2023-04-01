// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [3.99, 4.99, 29.99, 99.99, 19.99, 25.00];
const shippingCost = 50;



/*-----------Genera indici casuali dell'array prices per riempire il carrello--------*/

/*-------Carrello di Marco--------*/

let cartArrayMarco = [
  prices[parseInt(Math.random()*prices.length-1)], 
  prices[parseInt(Math.random()*prices.length-1)],
  prices[parseInt(Math.random()*prices.length-1)],
];




/*--------Carrello di Paul------- */
let cartArrayPaul = [
  prices[parseInt(Math.random()*prices.length-1)], 
  prices[parseInt(Math.random()*prices.length-1)],
  prices[parseInt(Math.random()*prices.length-1)], 
  prices[parseInt(Math.random()*prices.length-1)],
  prices[parseInt(Math.random()*prices.length-1)], 
];



/*-----------Carrello di Amy---------*/

let cartArrayAmy = [
  prices[parseInt(Math.random()*prices.length-1)], 
];





function costOfTotalShipping(user, cartArray , shippingCost) {//Dichiariamo una funzione che richiede i seguenti parametri ovvero l'user il carrello e il costo di spedizione
  let total =0;
  let scount = 0;

  for(let i=0; i<cartArray.length; i++){//Sommiamo tutti gli elementi nel carrello
    total += cartArray[i];
  }
  if (user.isAmbassador)scount = total * 0.3;// Verifichiamo se l'user è un ambasciatore; Se true viene applicato uno sconto del 30%
  if (total > 100) {//Verifichiamo se il totale supera i 100; Se true viene applicata una promo free shipping
    shippingCost = 0;
    total -= scount;
  }
  return parseFloat(total.toFixed(2)) + shippingCost;//Ritorniamo come valori dalla funzione il valore con virgola mobile del totale sul carrello con relative promo/sconti e il costo di spedizione
}

/*-------------------consol.log() dei relativi carrelli con applicati i vantaggi dello sconto e spedizione gratuita ove necessario---------------------*/

console.log(
  "Marco in base al suo carrello pagherà:   ",  costOfTotalShipping(marco, cartArrayMarco, shippingCost), cartArrayMarco
); 
console.log(
  "Paul in base al suo carrello pagherà:   ", costOfTotalShipping(paul, cartArrayPaul, shippingCost), cartArrayPaul
); 
console.log(
  "Amy in base al suo carrello pagherà:   ", costOfTotalShipping(amy, cartArrayAmy, shippingCost), cartArrayAmy
);

