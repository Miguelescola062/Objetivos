const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll("aba-conteudo")
console.log(textos)

for(let i = 0; i<botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j = 0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
    }
    botoes[j].classList.add("ativo")
    abas-texto[j].classList.add("ativo")
}
}