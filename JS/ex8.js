function calcularCanvi(){
    let dinersLliurats = parseFloat(prompt("Entra el diners lliurats", "Exemple: 125")).toFixed(2);
    let preuProducte = parseFloat(prompt("Entra el preu del producte", "Exemple: 35")).toFixed(2);

    let aux;
    
    let canviDonat = Math.abs(preuProducte - dinersLliurats);
 
    if(dinersLliurats == 0){
        console.log("No son valids els valors introduits")
    }

    let cont500 = Math.abs(Math.floor(canviDonat.toFixed(2) / 500));
    aux = Math.floor(canviDonat) % 500;

    let cont200= Math.abs(Math.floor(canviDonat.toFixed(2) / 200));
    aux = Math.abs(Math.floor(canviDonat) % 200);
    
    let cont100= Math.abs(Math.floor(canviDonat.toFixed(2) / 100));
    aux = Math.abs(Math.floor(canviDonat) % 100);
    
    let cont50= Math.abs(Math.floor(canviDonat.toFixed(2) / 50));
    aux = Math.abs(Math.floor(canviDonat) % 50);
    
    let cont20= Math.abs(Math.floor(canviDonat.toFixed(2) / 20));
    aux = Math.abs(Math.floor(canviDonat) % 20);
    
    let cont10= Math.abs(Math.floor(canviDonat.toFixed(2) / 10));
    aux = Math.abs(Math.floor(canviDonat) % 10);
    
    let cont5= Math.abs(Math.floor(canviDonat.toFixed(2) / 5));
    aux = Math.abs(Math.floor(canviDonat) % 5);
    
    let cont2= Math.abs(Math.floor(canviDonat.toFixed(2) / 2));
    aux = Math.abs(Math.floor(canviDonat) % 2);
    
    let cont1= Math.abs(Math.floor(canviDonat.toFixed(2) / 1));
    aux = Math.abs(Math.floor(canviDonat) % 1);
    
    let contc50= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.50));
    aux = Math.abs(Math.floor(canviDonat) % 0.50);
    
    let contc20= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.20));
    aux = Math.abs(Math.floor(canviDonat) % 0.20);
    
    let contc10= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.10));
    aux = Math.abs(Math.floor(canviDonat) % 0.10);
    
    let contc5= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.05));
    aux = Math.abs(Math.floor(canviDonat) % 0.05);
    
    let contc2= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.02));
    aux = Math.abs(Math.floor(canviDonat) % 0.02);
    
    let contc1= Math.abs(Math.floor(canviDonat.toFixed(2) / 0.01));
    aux = Math.abs(Math.floor(canviDonat) % 0.01);

    console.log("M'ha retornat aquest canvi: " + cont500 + " un billet de 500, " + cont200 + " un billet de 200, " + cont100 + " " 
    + cont50 + " " + cont20 + " un billet de 20, " + cont10 + " un billet de 10, " );
}

function calcularCanvi2(){
    let dinersLliurats = parseFloat(prompt("Entra el diners lliurats", "Exemple: 125")).toFixed(2);
    let preuProducte = parseFloat(prompt("Entra el preu del producte", "Exemple: 35")).toFixed(2);

    let aux;

    let canviDonat = preuProducte - dinersLliurats;
 
    if(dinersLliurats == 0){
        console.log("No son valids els valors introduits")
    }

    let bitllets = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

    for(i=0; i < bitllets.length; i++) 
    {
        let canviFor = Math.floor(canviDonat.toFixed(2) / bitllets[i]);
        let aux = canviDonat % bitllets[i];
        
    }

    //FALTA EL MISSATGE

}

