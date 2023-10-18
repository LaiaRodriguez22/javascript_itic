//Demanar un nom d'arxiu a l'usuari i tornar per consola l'extensió de l'arxiu.
function arxiuExtensio(){
    let x = prompt("Dona'm el nom d'arxiu i la extensió");
    let splitedUser = x.split(".");
    console.log("El nom de l'arxiu es: " + splitedUser[0]);
    console.log("L'extensio es: " + splitedUser[1]);
                            //splitedUser.length-1
}

//Demanar un text a l'usuari i dir si té el mateix numero de A's que de B's. 
function countA(){
    let x = prompt("Dona'm un text amb moltes A i B");
    let countA = 0;
    let countB = 0;

    if(countB == countA){
        console.log("Hi han tantes As com Bs");
    } 
    else {
        console.log("Trukutru");
    }
}