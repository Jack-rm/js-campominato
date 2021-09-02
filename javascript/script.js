/**
 * 
 * # Campo Minato
 * 
 * Il computer deve generare 16 numeri casuali tra 1 e 100.
 * I numeri non possono essere duplicati. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
 * L’utente non può inserire più volte lo stesso numero. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 * Consigli del giorno:
 * 
 * Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
 * Ad esempio: Di cosa ho bisogno per generare i numeri?
 * Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
 * Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante... :occhiolino:
 *  
 * 
 * 
 * 
 *  # PREPARATION
 *    1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
 *    2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
 *    3 - Crea un array per ricordare i numeri (scelti) dall'utente
 *    ** Creo una variable di appoggio per il punteggio
 *    
 *   # GAMEPLAY
 *    1) Chiedere un numero all'utente
 *    2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
 *    3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
 *    4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti  
 *
 *   # ENDGAME
 *    a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
 *    b. Stampiamo il punteggio del giocatore
 * 
*/


let listaBombe = [];            // array vuoto che conterrà i numeri-bomba

let numeroBombe = 2;            // variabile di quanti sono i numeri-bomba
let maxRandomNumber = 10;       // viariabile di quanti sono i numeri in totale presenti nel gioco


// Creo un ciclo while per generare una computazione di numeri da inserire nella lista di bombe
while ( listaBombe.length < numeroBombe){
    let randomBomb = getRandomInt(1, maxRandomNumber);  // inizializzo una variabile per riutilizzarla nel ciclo (?)
    
    if ( !listaBombe.includes(randomBomb) ){  // ( listaBombe.includes(randomNumber) == false )
        listaBombe.push(randomBomb);
    }
}

console.log("Numeri-bomba: " + listaBombe);

/*
* Soluzione con ciclo for vista a lezione ma non elegante (maschero il for da while),
* i-- serve per tornare indietro dopo un'iterazione. Potrei anche dare "null" e poi i++ quando voglio che riprenda l'iter       
*

for (let i = 0; i < 16; i++){
    let numeroBomba = getRandomInt(1,100);
    if ( listaBombe.includes(numeroBomba) ){
        i--
    } else {
        listaBombe.push(numeroBomba);
    }
}
*/




let listaScelte = [];           // array che conterrà i numeri scelti dall'utente

let contatore = maxRandomNumber - numeroBombe;    // variabile di quanti numeri ha a disposizione l'utente prima di vincere

/*
*
* Creo un ciclo che richieda all'utente di inserire un numero tante volte quanto indicato dalla variabile "contatore"
* Il while continua finchè il numero inserito è minore di 1 o maggiore di 100
* finchè il numero inserito è un NaN
* finchè il numero inserito è già presente nella lista dei numeri scelti
*
*/

while ( listaScelte.length < contatore ){
    let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + maxRandomNumber));
    
    while ( numeroUtente < 1 || numeroUtente > maxRandomNumber || isNaN(numeroUtente) || (listaScelte.includes(numeroUtente) == true) ){
        
        /* 
        * Utilizzo un if per analizzare ogni singolo caso che interrompe il while
        * e generare un corrispettivo prompt per l'utente
        */

        if ( (listaScelte.includes(numeroUtente) == true) ){  
            numeroUtente = parseInt(prompt("Hai già scelto " + numeroUtente + ", inserisci un nuovo numero"));
        }   else if ( numeroUtente < 1 || numeroUtente > maxRandomNumber ) {
            numeroUtente = parseInt(prompt("Il numero inserito è fuori scala, inserisci un numero tra 1 e " + maxRandomNumber))
        }   else {
            numeroUtente = parseInt(prompt("Il numero inserito non è valido, inserisci un numero tra 1 e " + maxRandomNumber));
        }
    }
    
    if ( listaBombe.includes(numeroUtente) ){  // se capita 
        alert("DEFEAT! hai ottenuto: " + listaScelte.length + " punti.");
        listaScelte.length = contatore;
    }   else {
        listaScelte.push(numeroUtente);
        
        if ( listaScelte.length == contatore ){
            alert("VICTORY! hai ottenuto: " + listaScelte.length + " punti.");
        }
    }
}

console.log("Numeri scelti dall'utente: " + listaScelte);



//  #FUNZIONI

// Generare un numero randomico
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
