class Tela {

    somar() {
        let n1 = parseFloat(document.getElementById("n1").value);
        let n2 = parseFloat(document.getElementById("n2").value);
        let n3 = parseFloat(document.getElementById("n3").value);
        let n4 = parseFloat(document.getElementById("n4").value);

        let resultado =(n1+n2+n3+n4)/4;
        document.getElementById("resultado").innerText = resultado;
        if(resultado>=6){
document.getElementById("resultado1").innerText ="Aprovado";       
}else{
    document.getElementById("resultado1").innerText ="Reprovado";
}
    }
}
var t = new Tela();