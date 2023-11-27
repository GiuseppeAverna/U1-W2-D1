/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// I datatype possiamo dire che sono dei "tipi" di valori che noi possiamo dare ad una variabile. Ci sono diversi tipi di datatype:
// -stringhe, che servono per contenere un testo per sesempio un nome come "Giuseppe"
// -poi abbiamo i number, cioè i numeri, che contengono appunto numeri come 1,2,3,4 o anche numeri con le virgole come per esempio 1,2; 16,4; ecc...
// -boolean, che sono i valori booleani true e false, cioè vero o falso in italiano
// -null, questo tipo lo si da ad una variabile per farla diventare nulla, quindi il valore della variabile sarà nullo.
// -undefined, tradotto in italiano "non definito", quindi il valore della variabile non è definito, non c'è
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const myName='Giuseppe'
console.log(myName)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = (12+20)
console.log(somma)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12
console.log(x)

/* SCRIVI QUI LA TUA RISPOSTA */ 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/ 
// myName = 'Riccardo'
// console.log(myName)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let subtraction = (4-x)
console.log(subtraction)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john'
let name2 = 'John'
let verifica = (name1 === name2)
console.log(verifica)

let LowerCase= !(name1.toLowerCase()===!name2.toLowerCase)
console.log(LowerCase)
/* SCRIVI QUI LA TUA RISPOSTA */
