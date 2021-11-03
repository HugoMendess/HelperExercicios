"use strict";
//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
var listNumeros = [-2, 1, 3, 5, 7, 8, 9, '10', 'Hoje']; // Passando vetor com números e uma string
// a função recebe uma lista do tipo any e retorna uma lista do tipo number
var retornaLista = function (list) {
    var novaLista = []; // Nova lista apenas com os valores number
    for (var i = 0; i < list.length; i++) {
        // variavel que recebe o valor da posição atual do vetor como Number
        var num = Number(list[i]);
        // verifica se o valor é um número, mesmo que em string como '10', se sim ele retorna o valor para dentro do vetor.
        if (!isNaN(num))
            novaLista[i] = num;
    }
    var maior = Math.max.apply(null, novaLista); // Variavel que pega o maior valor do novo vetor
    var menor = Math.min.apply(null, novaLista); // Variavel que pega o menor valor do novo vetor
    var soma = 0;
    var medio = 0;
    // for que percorre a lista somando todos os valores
    for (var i = 0; i < novaLista.length; i++) {
        soma += novaLista[i];
    }
    // retorna o valor medio
    medio = soma / novaLista.length;
    console.log("O maior número é: " + maior);
    console.log("O menor número é: " + menor);
    console.log("O valor medio é :" + medio);
    return novaLista;
};
console.log(retornaLista(listNumeros));
