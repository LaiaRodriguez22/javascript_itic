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
    console.log("Avui som al " + dataUser.getDate() + " del mes " + (dataUser.getMonth()+1) + " del any: " + dataUser.getFullYear());

}

/*
    Els codis de barres a Europa poden tenir 8 o 13 digits (EAN8, EAM3) la xifra mes  a la dreta esta calculada segons la 
    formula on els digits imparells es multipliquen x3 i els parells x1. 2*3+5*1+9*3
    El digit final és la diferencia entre el num calculat i el proper num multiple de 10. 

*/

