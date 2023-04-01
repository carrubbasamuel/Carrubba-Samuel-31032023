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
  prices[parseInt(Math.random()*prices.length-1)]
];




/*--------Carrello di Paul------- */
let cartArrayPaul = [
  prices[parseInt(Math.random()*prices.length-1)], 
  prices[parseInt(Math.random()*prices.length-1)],
  prices[parseInt(Math.random()*prices.length-1)]
];



/*-----------Carrello di Amy---------*/

let cartArrayAmy = [
  prices[parseInt(Math.random()*prices.length-1)], 
  prices[parseInt(Math.random()*prices.length-1)]
];


/*---------------Questa funzione calcola il costo totale della spedizione per un utente dato,
  sulla base di un carrello di acquisti e di un costo di spedizione. La funzione inizierà calcolando la somma
  dei prezzi degli elementi nel carrello. Se l'utente è un ambasciatore, calcolerà il 30% di sconto sulla somma totale e sottrarrà lo sconto. 
  Se la somma finale è superiore a 100,la spedizione sarà gratuita. Infine, il costo totale della spedizione
  sarà la somma totale scontata più il costo di spedizione.------------------ */


function costOfTotalShipping(user, cartArray , shippingCost) {
  let total =0;

  for(let i=0; i<cartArray.length; i++){
    total += cartArray[i];
  }

  let scount = 0;
  
  if (user.isAmbassador)scount = total * 0.3;

  total -= scount;

  if (total > 100) shippingCost = 0;


  return parseFloat(total.toFixed(2)) + parseFloat(shippingCost.toFixed(2));
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

