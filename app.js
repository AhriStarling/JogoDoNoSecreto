let listaSorteados = [];
let limiteSorteio =  10;
let numSecreto = gerarNumAleatorio();
let tents = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um nº entre 1 e 10';

//criou função "modelo", declara a função, invoca
//função com parâmetro e sem retorno
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//executa função, usa a função
function msgInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

msgInicial();

//função sem parâmetro e sem retorno
//tipo booleano/boolean (true ou false), valor q pode ser vdd ou falso
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numSecreto) {
        exibirTexto('h1', 'Acertou!');
        let plvrTent = tents > 1 ? 'tentativas' : 'tentativa';
        let msgTents = `Acertou com ${tents} ${plvrTent}!`;
        exibirTexto('p', msgTents);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) {
            exibirTexto('p', 'O número secreto é menor...');
        } else {
            exibirTexto('p', 'O número secreto é maior...');
        }
        tents++
        limpArea();
    }
}

//sem parâmetro e com retorno
function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteSorteio + 1);
    let quantElementsLista = listaSorteados.length;

    if (quantElementsLista == limiteSorteio ) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados);
        return numeroEscolhido;
    }
}

function limpArea() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limpArea();
    tents = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}
//atribuir valor = ; comparar valor ==

//tipo String (texto), tipo Number (nº), tipo Booleano (v ou f)

// as duas opções fazem a mesma coisa ;)
// function verificarNumero(numero) {
//     if (numero > 0) {
//       console.log("O número é positivo.");
//     } else if (numero < 0) {
//       console.log("O número é negativo.");
//     } else {
//       console.log("O número é zero.");
//     }
//   }

// function verificarNumero(numero){
//     if (numero > 0) {
//         console.log('O número é positivo.');

//     } else {
//         if (numero < 0) {
//             console.log('O número é negativo.');
//     } else {
//         console.log('O número é zero.');
//     }
//     }
// }

// Sem retorno e sem parâmetro	 function saudacao() { ... }	              Execução de bloco de código simples.
// Sem retorno e com parâmetro	 function cumprimentar(nome) { ... }	      Execução de bloco de código com argumentos.
// Com retorno e sem parâmetro	 function gerarNumeroAleatorio() { ... }	  Cálculo e retorno de um valor específico.
// Com retorno e com parâmetro	 function somar(a, b) { ... }	              Cálculo e retorno baseado em argumentos.
// Função anônima	             let saudacao = function() { ... };	          Definição de função sem nome localmente.
// Arrow function	             let quadrado = x => x * x;	                  Definição concisa de funções curtas.

//
//function parâmetro(retorno) {
//      definições do parâmetro com uso do retorno ou influência na hora de mostrar o retorno
//}
//parâmetro(definição)
//