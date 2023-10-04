/*--aquest codi no és meu, es de la harpreet kaur ja que durant aquests dies vaig faltar--*/

function calcular(){
    
    let numero1 =parseInt(prompt("Indica el número de dias"));
    let anys = Math.floor(numero1/365);

    let diasSueltos = numero1%365;

    console.log(diasSueltos)
    let meses = Math.floor(diasSueltos/30);

    let masDiasSueltos = diasSueltos%30; 

    console.log(`años: ${anys}, meses: ${meses}, dies: ${masDiasSueltos}`)
}

function calcularTemps(){

    let opcioUser = prompt("Indica una C o una F, dependiendo de que quieres calcular");
    let numero = parseInt(prompt("Indica el numero para hacer el cálculo"));
    let resultado;

    if(opcioUser ==  "c"){
        resultado = ((numero-32) / (9.0/5.0));
    }else{
        resultado = (numero*(9.0/5.0) + 32);
    }
    console.log(resultado);

}

function convertitNumero(){
    let numero = parseInt(prompt("Indica un número en base 10"));
    let aux;
    let resultadoFinal = "";
    let octal = calcularOctal();
    let binario = calcularBinario();
    let hexadecimal = calcularHDecimal();
}

function calcularOctal(){
    do{
        aux =  numero % 8;
        resultadoFinal = aux+resultadoFinal;
        numero = numero/8;
    }while(Math.floor(numero/8) >= 8);
    console.log(numero + resultadoFinal);
}

function calcularBinario(){
    do{
        aux =  numero % 2;
        resultadoFinal = aux+resultadoFinal;
        numero = Math.floor(numero/2);
        console.log(numero)
    }while(Math.floor(numero/2) >= 1)
    console.log(`el binario es: ${numero + resultadoFinal}`);
}

function calcularHDecimal(){    


}