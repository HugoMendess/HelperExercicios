"use strict";
//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
var listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
var maiorNumero = 0;
var menorNumero = 0;
// - Letra A -  O maior valor;
Array.min = function (array) {
    return Math.min.apply(Math, array);
};
console.log("O menor valor é: " + Array.min(listaNumeros));
// - Letra B - O menor valor;
Array.max = function (array) {
    return Math.max.apply(Math, array);
};
console.log("O maior valor é: " + Array.max(listaNumeros));
// - Letra C - O valor medio
var valorMedio = 0;
var valorSoma = 0;
var resultMedio = function (vetor, medio, soma) {
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + Number(vetor[i]);
    }
    medio = parseInt(soma / vetor.length);
    return medio;
};
console.log(resultMedio(listaNumeros, valorMedio, valorSoma));
