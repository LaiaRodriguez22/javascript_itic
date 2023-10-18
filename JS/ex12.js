//Demanar un nom d'arxiu a l'usuari i tornar per consola l'extensió de l'arxiu.
function arxiuExtensio(){
    let x = prompt("Dona'm el nom d'arxiu i la extenció");
    let splitedUser = x.split(".");
    console.log("El nom de l'arxiu es: " + splitedUser[0]);
    console.log("L'extensio es: " + splitedUser[1]);
}