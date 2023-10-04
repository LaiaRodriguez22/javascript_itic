//Demanar al usuari un color en format rgb -3 numeros, 3 prompts- i convertir-lo a hexadecimal. n.ToString(16)

function calculaRGB(){
    let userRed = parseInt(prompt("Entra entra el valor red", "Exemple: 15"));
    let userGreen = parseInt(prompt("Entra el valor green", "Exemple: 05"));
    let userBlue = parseInt(prompt("Entra el valor blue.", "Exemple: 35"));

    let hexaRed = userRed.toString(16).padStart(2, "0");
    let hexaGreen = userGreen.toString(16).padStart(2, "0");
    let hexaBlue = userBlue.toString(16).padStart(2, "0");

    let concatString = "#" + hexaRed + hexaGreen + hexaBlue;

    console.log(concatString);
}