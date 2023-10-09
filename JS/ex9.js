/*--demana al usuari num. files i num.columnes, crear la pàgina html una taula dinàmica que mestri els numeros fils col 

DOM

tr appendChild(td)
document.body.appendChild(table)

--*/

function taulaDinamicaDOM(){

    let fil = prompt("Entra un numero.", "Exemple: 2");
    let colum = prompt("Entra un numero.", "Exemple: 5");

    const tabla = document.createElement("table");
    const tablaBody = document.createElement("tbody");
      
    for (let i = 0; i < fil; i++) {
        const fila = document.createElement("tr");
      
        for (let j = 0; j < colum; j++) {
            const celda = document.createElement("td");
            celda.style.border="1px solid red";
            const cellText = document.createTextNode(`F: ${i}, COL: ${j}`);
            celda.appendChild(cellText);
            fila.appendChild(celda);
        }

        tablaBody.appendChild(fila);
    }
      
    tabla.appendChild(tablaBody);
    document.body.appendChild(tabla);
    tabla.style.border="1px solid black";
}

