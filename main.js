const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

// Gerenciamento de abas ativo/inativo
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

// Seleção dos elementos HTML
const contadores = document.querySelectorAll('.contador');

// Array de datas nativas na ordem correta dos contadores
const tempos = [
    new Date('2026-10-05T00:00:00'),
    new Date('2027-05-05T00:00:00'),
    new Date('2028-02-05T00:00:00'),
    new Date('2026-03-05T00:00:00')
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return "Prazo Encerrado";
    }

    // Cálculos puramente nativos com Math
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza cada contador com base na sua posição (ordem) no array
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

// Execução inicial
atualizaCronometro();

