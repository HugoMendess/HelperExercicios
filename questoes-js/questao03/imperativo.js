"use strict";
//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8];
var maior = 0;
var menor = 0;
// - Letra A -  O maior valor;
Array.min = function (array) {
    return Math.min.apply(Math, array);
};
console.log("O menor valor é: " + Array.min(numeros));
// - Letra B - O menor valor;
Array.max = function (array) {
    return Math.max.apply(Math, array);
};
console.log("O maior valor é: " + Array.max(numeros));
// - Letra C - O valor medio
var medio = 0;
var soma = 0;
function resultMedio(vetor, medio, soma) {
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + Number(vetor[i]);
    }
    medio = parseInt(soma / vetor.length);
    return medio;
}
console.log(resultMedio(numeros, medio, soma));
