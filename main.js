// tabella di gioco
const gridEl = document.getElementById("tabella");
// numero celle delle tabella
const dimensionGridEl = 100;

// invochiamo la funzione per generare la tabella di gioco
generateGrid(gridEl, dimensionGridEl);





/*****************************
 *        FUNCTIONS
 *****************************/


/**
 * funzione che genera una griglia di gioco
 * @param {HTMLElement} grid tabella di gioco 
 * @param {int} dimension valore che indica numero di caselle
 */
function generateGrid(grid, dimension) {
    dimension = parseInt(dimension);
    // ciclo per generare n cella in base al parametro dimension
    for (let i = 0; i < dimension; i++) {
        // creo l'elemento cella
        const cella = document.createElement("div");
        // aggiungo classe css alla cella
        cella.classList.add("square");
        // appendo l'elemento cella nella tabella di gioco
        grid.append(cella);
    }
}