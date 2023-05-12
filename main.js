// bottone per creare tabella di gioco
const btnEl = document.getElementById("start");

// AL CLICK DEL BOTTONE GENERA LA TABELLA DI GIOCO
btnEl.addEventListener(
    "click",
    function () {
        // tabella di gioco
        const gridEl = document.getElementById("tabella");
        // numero celle delle tabella
        const dimensionGridEl = 100;
        // invochiamo la funzione per generare la tabella di gioco
        generateGrid(gridEl, dimensionGridEl);
    }
)

/*****************************
 *        FUNCTIONS
 *****************************/


/**
 * funzione che genera una griglia di gioco
 * @param {HTMLElement} grid tabella di gioco 
 * @param {int} dimension valore che indica numero di caselle
 */
function generateGrid(grid, dimension) {
    grid.innerHTML = "";
    dimension = parseInt(dimension);

    // assegnare alla cella i numeri da min a max (dimension)
    const whiteList = [];
    for (let i = 0; i < dimension; i++) {
        whiteList.push(i + 1);
    }

    // ciclo per generare n cella in base al parametro dimension
    for (let i = 0; i < dimension; i++) {
        // creo l'elemento cella
        const cella = document.createElement("div");
        // aggiungo classe css alla cella
        cella.classList.add("square");
        // numero da 1 a 100 assegnati alle celle in ordine crescente
        cella.append(whiteList[i]);
        // al click la cella si colora all'interno e stampa un mex in console 
        cella.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
                console.log("cella cliccata: " + (i + 1));
            }
        )
        // appendo l'elemento cella nella tabella di gioco
        grid.append(cella);
    }

}
