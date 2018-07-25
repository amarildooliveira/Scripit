
class calculo{
    somar(){
        let numero = parseInt( document.getElementById("numero").value);
        let numero1 = parseInt( document.getElementById("numero1").value);

    
document.getElementById("resultado").innerText = numero + numero1;


    }
        
}
var soma = new calculo();