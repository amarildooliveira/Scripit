
class ListaConvidados {

    constructor() {
        this.qtd = 0;
        this.id = 0;
    }

    adicionar() {
        //1) Ler o input
        let nome = document.getElementById("inputConvidado").value;
        //2) inclusão na lista

        //2.1) Criar os elementos dos DOM
        let lista = document.getElementById("lista");
        let div = document.createElement("div"); //<div></div>
        div.classList.add("item-lista")
        div.id = "conv-" + this.id;
        let span = document.createElement("span"); //<span></span>
        span.innerText = nome;
        let img = document.createElement("img"); //<img></img>
        img.src = "img/delete.svg";
        img.setAttribute("onclick", "lista.excluir('" + div.id + "')"); 

        //2.2) aninar as tags
        div.appendChild(span); //<div> <span></span></div>
        div.appendChild(img); //<div> <span></span><img src="img/delete.svg"></div>

        //2.3)incluir na lista
        lista.appendChild(div);

        //3) contador

        this.qtd = this.qtd + 1;
        this.id = this.id + 1;
        //4)Insere quantidade  no label
        let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = this.qtd;



    }

    excluir(id) {
        let conv = document.getElementById(id);
        let lis = document.getElementById("lista");
        lis.removeChild(conv);

    }
}
var lista = new ListaConvidados();