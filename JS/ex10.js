/*
    Crear una taula de multiplicacions, demanar les files i columnes. 
    1   2   3   4   5
    2   4   6   8   10
    3   6   9   12  15

*/

function taulaMultiplicacio(){
    let fil = prompt("Entra un numero.", "Exemple: 2");
    let colum = prompt("Entra un numero.", "Exemple: 5");

    const tble = document.createElement("table");
    const tBody = document.createElement("tbody");
      
    for (let i = 1; i <= fil; i++) {
        const fila = document.createElement("tr");
      
        for (let j = 1; j <= colum; j++) {
            const cella = document.createElement("td");
            cella.style.border="1px solid red";
            const cellText = document.createTextNode(`${i * j}`);
            cella.appendChild(cellText);
            fila.appendChild(cella);
        }

        tBody.appendChild(fila);
    }
      
    tble.appendChild(tBody);
    document.body.appendChild(tble);
    tble.style.border="1px solid black";
}

/*
    Fes una taula dinamica on es demana n de columnes de color darrera fila 
    I printa una piramade tal que

    ha de ser un numero imparell

    3 FORS: Un for per alçada, i un per blancs, un per vermells i un altre més per blancs

*/ 
function taulaPiramide() {
    let x = parseInt(prompt("NUM COLS"));
    let y = Math.floor(x/2)+1;

    const tble = document.createElement("table");
    const tBody = document.createElement("tbody");

    let blanc, vermell;
    blanc = Math.floor((x-1)/2)
    vermell = 1
    
    for (let a = 0; a < y; a++) {
      const fila = document.createElement("tr");
  
      for (let b = 0; b < blanc; b++) {
        createCella("white", fila)
      }
      for (let b = 0; b < vermell; b++) {
        createCella("red", fila)
      }
      for (let b = 0; b < blanc; b++) {
        createCella("white", fila)
      }
      vermell += 2
      blanc--
      tBody.appendChild(fila);
    }
  
    tble.appendChild(tBody);
    document.body.appendChild(tble);
    tble.style.margin="auto";
    tble.style.border="3px double purple";
}

function createCella(color, fila){
    const cella = document.createElement("td");
    cella.style.border="1px solid green"
    cella.style.width="20px"
    cella.style.height="20px"
    cella.style.backgroundColor=color;
    const cellTxt = document.createTextNode("");
    cella.appendChild(cellTxt);
    fila.appendChild(cella);
}