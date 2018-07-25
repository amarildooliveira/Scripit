class Calculadora {
    somar() {
        // passo 1 ler os dados convertidos em números inputs
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        //passo 2 realizar soma
        var r = n1 + n2;

        //paso 3 exiber resutado

        alert(r);

    }
    subtrair() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 - n2;

        alert(r);
    }
    dividir() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 / n2;

        alert(r);
    }
    mutiplicar() {

        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 * n2;

        alert(r);
    }

    porcetagem() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);

        var r = n1 * n2 / 100;

        alert(n2 + "% de " + n1 + " é " + r);
    }




}

var calculadora = new Calculadora();