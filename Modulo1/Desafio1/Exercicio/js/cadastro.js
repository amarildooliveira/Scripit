class Cadastro {
    validar() {

        //1 leitura dos inputs
        let mensagemValidacao = "";
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let sexo = document.querySelectorAll("[name=sexo]:checked");
        let curso = document.querySelector("[name=curso]:checked");
        let estado = document.getElementById("estado").value;
        let foto = document.getElementById("foto").files[0];
        let data = document.getElementById("data").value;

        //2 validaçao 

        if (nome == "") {
            mensagemValidacao += "Preencha o campo Nome\n";
        }
        if (email == "") {
            mensagemValidacao += "Preencha o campo Email\n";

        }
        if (sexo.length == 0) {
            mensagemValidacao += "Preencha o campo Sexo\n";
        }
        if (curso == null) {
            mensagemValidacao += "Selecione um Curso\n";
        }
        if (estado == "") {
            mensagemValidacao += "Selecione um Estado\n";

        }
        if (foto == undefined) {
            mensagemValidacao += "Escolha um Arquivo para enviar\n";

        } else if (foto.size > 1048576) {
            mensagemValidacao += "A foto deve ter no máximo 1MB\n";

        } else if (foto != "image/jpg" || foto != "image/png") {
            mensagemValidacao += "Foto com formato inválido\n";
        }

        if (data == "") {
            mensagemValidacao += "Escolha uma data\n";

        }
        if (mensagemValidacao != ""){
             document.getElementById("textoMensagem").innerText =mensagemValidacao;
             document.getElementById("mensagens").classList.add("show")
     
           
        }
    }
}
var cadastro = new Cadastro();