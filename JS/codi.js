function mostrarAlerta() {
    alert('Helloworldus')
}

function mostrarMsg(){
    var txtBar = document.getElementById('txtBar').value;
    alert(txtBar);
}

function consol(){
    var txtBar = document.getElementById('multiplicar').value;
    for (let i = 0; i <= 10; i++) {
        console.log(i+ ' x '+txtBar+ ' = ' +(i*txtBar));
    }
}
