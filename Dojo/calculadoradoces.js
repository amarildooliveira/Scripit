class Calculadora {
    calcular() {
        // Ler dados da tela
        let porcentagemBonus = parseFloat(document.getElementById("porcBonus").value);
        let qtdCelofane = parseFloat(document.getElementById("celofane").value);
        let qtdCrepom = parseFloat(document.getElementById("crepom").value);
        let qtdChanel = parseFloat(document.getElementById("lacochanel").value);
        let qtdImportado = parseFloat(document.getElementById("importado").value);
        let qtdCaixa = parseFloat(document.getElementById("caixa").value);

        //Calcular os preços
        let precoCelofane = qtdCelofane * 2.50;
        let precoCrepom = qtdCrepom * 3.10;
        let precoChanel = qtdChanel * 3.70;
        let precoImportado = qtdImportado * 3.90;
        let precoCaixa = qtdCaixa * 4;

        //Calcular bonus

        let calculoPorcentagem = (porcentagemBonus / 100);

        let bonusCelofane = qtdCelofane * calculoPorcentagem;
        let bonusCrepom = qtdCrepom * calculoPorcentagem;
        let bonusChanel = qtdChanel * calculoPorcentagem;
        let bonusImportado = qtdImportado * calculoPorcentagem;
        let bonusCaixa = qtdCaixa * calculoPorcentagem;

        //Calcular soma das quantidades 

        let somaQuantidades = parseFloat(qtdCelofane) + parseFloat(qtdCrepom) + parseFloat(qtdChanel) + parseFloat(qtdImportado) + parseFloat(qtdCaixa);


        //Soma dos bonus

        let somaBonus = parseFloat(bonusCelofane) + parseFloat(bonusCrepom) + parseFloat(bonusChanel) + parseFloat(bonusImportado)
            + parseFloat(bonusCaixa);
        //soma dos preços

        let somaPrecos = parseFloat(precoCelofane) + parseFloat(precoCrepom) + parseFloat(precoChanel) + parseFloat(precoImportado) + parseFloat(precoCaixa);

        //Soma de bonus com soma quantidades

        let somaQtdTotal = somaQuantidades + somaBonus;

        //exibir preços na tela

        document.getElementById("precoCelofane").innerText = precoCelofane;
        document.getElementById("precoCrepom").innerText = precoCrepom;
        document.getElementById("precoChanel").innerText = precoChanel;
        document.getElementById("precoImportado").innerText = precoImportado;
        document.getElementById("precoCaixa").innerText = precoCaixa;

        //exibir bonus na tela

        document.getElementById("bonusCelofane").innerText = bonusCelofane;
        document.getElementById("bonusCrepom").innerText = bonusCrepom;
        document.getElementById("bonusChanel").innerText = bonusChanel;
        document.getElementById("bonusImportado").innerText = bonusImportado;
        document.getElementById("bonusCaixa").innerText = bonusCaixa;

        //exibir quantidade 

        document.getElementById("somaQuantidades").innerText = somaQuantidades;
        document.getElementById("somaBonus").innerText = somaBonus;
        document.getElementById("somaPrecos").innerText = somaPrecos;

    }
}
var calculadora = new Calculadora();