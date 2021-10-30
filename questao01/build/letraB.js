"use strict";
var btn = document.querySelector('.btn');
var campo = document.querySelector('#palavra-input');
var resultP = document.getElementById('result');
// Vetor com as vogais para comparação
var vetorVogais = ['a', 'e', 'i', 'o', 'u'];
var total = 0;
var result;
btn.addEventListener('click', function () {
    //Testando se o valor foi capturado
    console.log(campo.value);
    verificaVogais(campo.value);
});
// Função que verifica se existem vogais na frase passada
function verificaVogais(frase) {
    for (var i = 0; i < frase.length; i++) {
        if ('aeiouAEIOU'.includes(frase[i]))
            total++;
    }
    // Teste no console
    console.log('A palavra possui ' + total + ' vogais');
    // Se o número de vogais for maior que 1 ou 0, o result recebe o texto com vogais no plural
    if (total === 1) {
        result = 'A palavra possui ' + total + ' vogal';
    }
    else {
        result = 'A palavra possui ' + total + ' vogais';
    }
    // colocando o texto do resultado na tela    
    resultP.innerText = result;
}
// Limpar campo e p
var clear = document.querySelector('.btn-clear');
clear.addEventListener('click', function () {
    resultP.innerText = '';
    campo.value = '';
});
