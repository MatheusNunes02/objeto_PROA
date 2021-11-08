class Elevador{
    constructor(andarAtual,quantidadeAndares,capacidade,pessoasPresentes){
        this.andarAtual = andarAtual;
        this.quantidadeAndares = quantidadeAndares;
        this.capacidade = capacidade;
        this.pessoasPresentes = pessoasPresentes;
    }

    entra( valor=1){
        if((this.pessoasPresentes+valor) > this.capacidade){
            document.write("Não é possível entrar mais pessoas no Elevador <br>")
        }else{
            this.pessoasPresentes = this.pessoasPresentes+valor;
        }
    }

    sai(valor=1){
        if((this.pessoasPresentes-valor) < 0){
            document.write("Não tem como sair mais pessoas <br>")
        }else{
            this.pessoasPresentes = this.pessoasPresentes-valor;
        }
    }

    sobe(valor=1){
        if((this.andarAtual+valor) > this.quantidadeAndares){
            document.write("Você chegou no último andar já <br>")
        }else{
            this.andarAtual = this.andarAtual+valor;
        }
    }

    desce(valor=1){
        if((this.andarAtual-valor) < 0){
            document.write("Não tem como descer após o térreo <br>")
        }else{
            this.andarAtual = this.andarAtual-valor;
        }
    }
}

let elevador = new Elevador(0,10,6,0);

elevador.entra(5);
elevador.entra(2);

elevador.sobe(2);
elevador.sai(3);
elevador.sobe(2);

elevador.sai(2);
elevador.entra(6);
elevador.desce(4);
elevador.sai(6);



elevador.desce(1);


elevador.sobe(10);
elevador.sobe(1);


elevador.entra(6);
elevador.entra(1)

elevador.sai(6);
elevador.sai(1)






document.getElementById("exemplo").innerHTML = `O Andar atual é: ${elevador.andarAtual} <br>
O total de andares é de: ${elevador.quantidadeAndares} <br>
A capacidade de pessoas: ${elevador.capacidade} <br>
A quantidade de pessoas presente agora: ${elevador.pessoasPresentes} <br><br>`