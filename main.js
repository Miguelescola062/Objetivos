const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
}

const contadores = document.querySelectorAll('.contador');

const tempos = [
    new Date('2026-10-05T00:00:00'),
    new Date('2027-05-05T00:00:00'),
    new Date('2028-02-05T00:00:00'),
    new Date('2026-09-05T00:00:00')
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return "Prazo Encerrado";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Formata os números para terem sempre 2 dígitos (ex: 05 em vez de 5)
    let diasFormatados = String(dias).padStart(2, '0');
    let horasFormatadas = String(horas).padStart(2, '0');
    let minutosFormatados = String(minutos).padStart(2, '0');
    let segundosFormatados = String(segundos).padStart(2, '0');

    return `${diasFormatados} dias ${horasFormatadas} horas ${minutosFormatados} minutos ${segundosFormatados} segundos`;
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

// Inicia o cronômetro imediatamente e atualiza a cada 1 segundo
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
