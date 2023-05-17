// bottone per creare tabella di gioco
const btnEl = document.getElementById("start");

// AL CLICK DEL BOTTONE GENERA LA TABELLA DI GIOCO
btnEl.addEventListener(
    "click",
    function () {
        // tabella di gioco
        const gridEl = document.getElementById("tabella");
        const difficultyEl = document.getElementById("difficulty");
        const levelEl = difficultyEl.value;
        // invochiamo la funzione per generare la tabella di gioco
        generateGrid(gridEl, levelEl);
    }
)

/*****************************
 *        FUNCTIONS
 *****************************/


/**
 * funzione che genera una griglia di gioco
 * @param {HTMLElement} grid tabella di gioco 
 * @param {int} difficolta valore che indica in base al livello di difficolta il numero di caselle
 */

function generateGrid(grid, difficolta) {
    // svuoto la griglia prima di crearne un'altra 
    grid.innerHTML = "";

    // numero celle in base alla difficolta di gioco
    let numeroCelle;
    // livello DIFFICILE
    if (difficolta == 3) {
        numeroCelle = 49;
    }
    // livello MEDIO
    else if (difficolta == 2) {
        numeroCelle = 81;
    }
    // livello FACILE
    else {
        numeroCelle = 100;
    }

    // per numerocelle volte richiama la funzione generateCella
    for (let i = 0; i < numeroCelle; i++) {
        // assegniamo alla cella un numero progressivo da 1 a 100
        const testoCella = (i + 1);
        // variabile d'appoggio e invochiamo la funzione passando la i nella funzione generateCella attraverso il parametro
        const cella = generateCella(difficolta, testoCella);
        // appendo le celle create nella tabella nel DOM
        grid.append(cella);
    }

}



/**
 * funzione che genera le celle da appendere successivamente in una tabella di gioco
 * @param {int} difficolta paramentro che ci consente di verificare quante celle andranno create nel ciclo in base alla difficoltà
 * @param {string} testo indica la i (numero progressivo da 1 a 100)
 * @returns {HTMLElement} elemento creato nel ciclo (cella di gioco)
*/
function generateCella(difficolta, testo) {
    // creo l'elemento cella
    const cellaEl = document.createElement("div");
    // aggiungo classe css alla cella
    cellaEl.classList.add("square");

    // aggiungo classi css a seconda della difficoltà del gioco 
    if (difficolta == 3) {
        cellaEl.classList.add("hard");
    } else if (difficolta == 2) {
        cellaEl.classList.add("medium");
    }

    // la cella nel DOM avrà un numero progressivo da 1 a 100
    cellaEl.innerHTML = testo;
    // al click la cellaEl si accende o spegne e manda un mex in console
    cellaEl.addEventListener(
        "click",
        function () {
            this.classList.toggle("active");
            console.log("cella cliccata: " + this.innerHTML);
        }
    )

    // ritorna la cella creata
    return cellaEl;
}