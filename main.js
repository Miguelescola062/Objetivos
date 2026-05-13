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
    textos[j].classList.add("ativo")
}
}
const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2026-10-05T00:00:00")
const tempoObjetivo2 = new Date("2027-05-05T00:00:00")
const tempoObjetivo3 = new Date("2028-02-05T00:00:00")
const tempoObjetivo4 = new Date("2026-03-05T00:00:00")