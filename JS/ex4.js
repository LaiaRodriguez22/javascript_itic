function agafarNums(){
    let numUser1 = prompt("Entra un numero.", "Exemple: 5");
    let numUser2 = prompt("Entra un numero.", "Exemple: 5");

    let resultat1 = Math.abs(numUser1 - 100);
    let resultat2 = Math.abs(numUser2 - 100);

    if (resultat1 < resultat2) {
        console.log("El resultat més proxim és " + numUser1);
    } else if (resultat2 < resultat1) {
        console.log("El resultat més proxim és " + numUser2);
    } else {
        console.log("Estan igual de aprop, mira: " + numUser1 + " i " + numUser2);
    }

}


function agafarHora(){
    let hores = parseInt(prompt("Entra la hora", "Exemple: 15"));
    let minuts = parseInt(prompt("Entra els minuts", "Exemple: 05"));
    let segons = parseInt(prompt("Entra els segons.", "Exemple: 35"));

    let newData = new Date(31,12,2000, hores, minuts,segons+1);

    console.log(newData.getHours() + " : " + newData.getMinutes() + " : " + newData.getSeconds());
}

function agafarData(){          /*--1 DEL 31--*/
    let dia = parseInt(prompt("Entra el día", "Exemple: 15"));
                                /*--1 DEL 12--*/
    let mes = parseInt(prompt("Entra el mes", "Exemple: 05"));
                                /*--1970 FINS 9999--*/
    let any = parseInt(prompt("Entra el any", "Exemple: 35"));
    
    

    /*--SI COMPARAS LOS SETS CON LOS GETS Y EL RESULTADO ES EL MISMO, LA FECHA ES VALIDA--*/


}

