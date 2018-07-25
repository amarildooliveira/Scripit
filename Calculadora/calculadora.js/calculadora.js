class Calculadorar {
    somar() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 + n2;
        alert("A soma é: " + r);
    }
    subtrair() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 - n2;
        alert(r);
    }


}
var calculadorar = new Calculadorar();