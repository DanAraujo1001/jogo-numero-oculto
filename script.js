const numeroSecreto =  Math.floor(Math.random() * 101);
let tentativas = 1;


function verificar() {
    const numeroDigitado = document.getElementById("numeroDigitado").value;

    let mostrarResultado = document.getElementById("resultadoVerificar");
    let mostrarTentativas = document.getElementById("tentativas");
    
    if (tentativas == 10) {
        mostrarTentativas.innerHTML = "Você gastou todas as suas tentaivas";
    } else {
        
        if (numeroDigitado == "") {
            mostrarResultado.innerHTML = "Digite um número entre 0 a 100.";
            mostrarTentativas.innerHTML = `Você tem ${10 - tentativas} tentativas`;
        } else if (numeroDigitado < 0 || numeroDigitado > 100) {
            mostrarResultado.innerHTML = "O número digitado não é válido. Digite um número entre 0 a 100.";
            mostrarTentativas.innerHTML = `Você tem ${10 - tentativas} tentativas`;
        } else if (numeroDigitado == numeroSecreto) {
            mostrarResultado.innerHTML = "Parabéns! Você acertou o número.";
            mostrarTentativas.innerHTML = `Você gastou ${tentativas} tentativas.`;
        } else if (numeroDigitado < numeroSecreto) {
            mostrarResultado.innerHTML = "O número secreto é maior";
            mostrarTentativas.innerHTML = `Você tem ${10 - tentativas} tentativas`;
        } else if (numeroDigitado > numeroSecreto) {
            mostrarResultado.innerHTML = "O número secreto é menor";
            mostrarTentativas.innerHTML = `Você tem ${10 - tentativas} tentativas`;
        }
        
        
        tentativas ++
    }

}

