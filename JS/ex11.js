/*
    Ampliar la taula anterior perque pinti un romb
    Es demana el num de caselles vermelles de la línea central 

*/

function crearTaulaRomb() {
    let x = parseInt(prompt("NUM COLS"));
    let y = Math.floor(x/2)+1;

    const tble = document.createElement("table");
    const tBody = document.createElement("tbody");

    let blanc, vermell;
    blanc = Math.floor((x-1)/2)
    vermell = 1;
    
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
      vermell += 2;
      blanc--;
      tBody.appendChild(fila);
    }

    vermell = x-2;
    blanc = 1;

    for (let a = 0; a < (y-1); a++) {
        
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
        vermell-=2;
        blanc++;
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