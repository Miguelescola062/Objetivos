const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove active class from ALL
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
        // Add active class to the CLICKED one (index i)
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date('2026-10-05T00:00:00');
const tempoObjetivo2 = new Date('2027-05-05T00:00:00');
const tempoObjetivo3 = new Date('2028-02-05T00:00:00');
const tempoObjetivo4 = new Date('2026-03-05T00:00:00');

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual; // Result in milliseconds
    return tempoFinal;
}

console.log(calculaTempo(tempoObjetivo1));
