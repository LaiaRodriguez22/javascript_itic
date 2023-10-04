function taulaUser(){
    let numUser = prompt("Entra un numero.", "Exemple: 5");
    for (let i = 0; i <= 10; i++) {
        console.log(`${numUser} X ${i} = ${numUser * i}`);
    }
}

function fibonacciUser(){
    let a = 1;
    let b = 1;
    let fibonacci;
    console.log(a);
    console.log(b);
    let fibonacciUser = prompt("Entra un numero.", "Exemple: 2");
    for(let i = 3; i <= fibonacciUser; i++) {
        fibonacci = a +b;
        console.log(fibonacci);
        a = b;
        b = fibonacci;
    }
}