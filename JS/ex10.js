/*
    Crear una taula de multiplicacions, demanar les files i columnes. 
    1   2   3   4   5
    2   4   6   8   10
    3   6   9   12  15

*/

function taulaMultiplicacio(){
    let fil = prompt("Entra un numero.", "Exemple: 2");
    let colum = prompt("Entra un numero.", "Exemple: 5");

    const tabla = document.createElement("table");
    const tablaBody = document.createElement("tbody");
      
    for (let i = 1; i <= fil; i++) {
        const fila = document.createElement("tr");
      
        for (let j = 1; j <= colum; j++) {
            const celda = document.createElement("td");
            celda.style.border="1px solid red";
            const cellText = document.createTextNode(`${i * j}`);
            celda.appendChild(cellText);
            fila.appendChild(celda);
        }

        tablaBody.appendChild(fila);
    }
      
    tabla.appendChild(tablaBody);
    document.body.appendChild(tabla);
    tabla.style.border="1px solid black";
}

/*
    Fes una taula dinamica on es demana n de columnes de color darrera fila 
    I printa una piramade tal que

    ha de ser un numero imparell

    3 FORS: Un for per alçada, i un per blancs, un per vermells i un altre més per blancs

*/ 
function taulaPiramide(){
    let numColumnes = prompt("Entra un numero impar per les columnes.", "Exemple: 3");
    let numFiles = Math.floor((numColumnes-1)/2);
    
}