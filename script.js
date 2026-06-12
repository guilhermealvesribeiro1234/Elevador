let pesoAtual = 0;
const limiteCarga = 300;

const pesoTexto = document.getElementById('peso-texto');
const statusTexto = document.getElementById('status-texto');
const visorContainer = document.getElementById('visor-container');

function mudarPeso(valor) {
    // Impede que o peso fique abaixo de zero
    if (pesoAtual + valor < 0) {
        pesoAtual = 0;
    } else {
        pesoAtual += valor;
    }
    verificarCarga();
}

function limparCarga() {
    pesoAtual = 0;
    verificarCarga();
}

function verificarCarga() {
    // Atualiza o número no visor
    pesoTexto.innerText = `${pesoAtual} kg`;

    // Lógica do alarme (se passar de 300 kg)
    if (pesoAtual > limiteCarga) {
        visorContainer.classList.add('sobrecarga');
        statusTexto.innerText = "ALERTA: EXCESSO DE CARGA!";
        statusTexto.className = ""; // limpa classe anterior
    } else {
        visorContainer.classList.remove('sobrecarga');
        statusTexto.innerText = "SISTEMA LIBERADO";
        statusTexto.className = "status-normal";
    }
}
