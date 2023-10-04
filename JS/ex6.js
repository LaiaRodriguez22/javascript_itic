function calcularTrucada(){
    let userHores = parseInt(prompt("Entra la hora", "Exemple: 15"));
    let userMinuts = parseInt(prompt("Entra els minuts", "Exemple: 05"));
    let userSegons = parseInt(prompt("Entra els segons.", "Exemple: 35"));

    let horesSegons = 3600 * userHores;
    let minutsSegons = 60 * userMinuts;

    let totalSegons = horesSegons + minutsSegons + userSegons;

    let preuSegons = 0.05 / 60;

    let total = preuSegons * totalSegons + 0.10;

    console.log(`El preu per segon:  ${preuSegons}`);
    console.log(`El preu total: ${total}`);

    total = total % 100;

    console.log(`El preu total: ${total}`);
}