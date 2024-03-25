const botoes = document.querySelectorAll(".botao");
const texto= document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
           texto[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
       texto[botoes[i].classList.add("ativo");
    }
}

const contadores =document.queryselectorAll(".contador.");
const tempoObjetivo1 =new Date("2024-03-25T00:00:00");
