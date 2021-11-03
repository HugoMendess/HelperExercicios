"use strict";
//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
var listNumeros = [-2, 1, 3, 5, 7, 8, 9, '10', 'Hoje']; // Passando vetor com números e uma string
// a função recebe uma lista do tipo any e retorna uma lista do tipo number
var retornaLista = function (list) {
    // função que filtra os valores number e retorna uma lista apenas com números
    var validaNumeros = list.filter(function (list) { return (!isNaN(Number(list))); });
    // função que retorna um array com todos os números que sejam number, ou seja, o '10' vem como 10 agora.
    var validaLista = validaNumeros.map(function (number) { return Number(number); });
    var maior = Math.max.apply(null, validaLista); // Variavel que pega o maior valor do novo vetor
    var menor = Math.min.apply(null, validaLista); // Variavel que pega o menor valor do novo vetor
    // Função que retorna o valor medio
    var medio = validaLista.reduce(function (acumulador, elementoAtual, indice, arrayOriginal) {
        return Number(acumulador) + Number(elementoAtual);
    });
    return [maior, menor, medio];
};
console.log(retornaLista(listNumeros));
