/*
    Obtenir la data actual i mostrar. 
    1- Avui es dd del mm del aaaa.
    2- han passat n setmanes de l'any
    3- El % de dies transcorreguts és nn,nn%
    4- Queden un nn.nn% de dies a l'any
    5- Ara son les hh:mm:ss
    6- El % del dia que ha passat és nn,nn%
    7 queda un % de nn,nn% del dia

*/

function trukutru(){
    let dataUser = new Date();
    console.log("Avui som al ", dataUser.getDay()+ " del mes "+ dataUser.getMonth(), " del any: ", dataUser.getFullYear());

}