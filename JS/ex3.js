function consolTime(){
    let num1 = prompt("Entra un numero.", "5");
    let num2 = prompt("Entra un segon numero.", "2");
    
    console.time("timepow");
    let resultat = Math.pow(num1, num2);
    console.log(resultat);
    console.timeEnd("timepow");

    console.time("timebucle");
    for(let i = 0; i <= num2; i++) {
        let res2 = num1 * num2;
        console.log(res2);
    }
    console.timeEnd("timebucle");

}

function tresValors(){
    let num1 = parseInt(prompt("Entra un numero.", "5"));
    let num2 = parseInt(prompt("Entra un segon numero.", "2"));
    let num3 = parseInt(prompt("Entra un tercer numero.", "5"));

    let array = [num1, num2, num3];
    array.sort();

    let min = array [0];
    let max = array[2];
    let mitja = (num1 + num2 + num3) / 3;
    let mitjana = array[1];

    console.log("El valor menor es: ", min);
    console.log("El valor major es: ", max);
    console.log("El valor del mig és: ", mitjana);
    console.log("La mitja és: ", mitja);
}