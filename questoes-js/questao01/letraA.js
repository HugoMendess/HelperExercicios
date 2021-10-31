"use strict";
// Primeira Questão
//  Criar uma função que retorne a quantidade de vogais da palavra passada.
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// 1 Questão - Letra A
// Palavra a ser comparada
var palavra = 'Refrigerante';
// Variavel contadora
var totalVogais = 0;
// Função que compara cada letra do vetor palavra, que contém a palavra passada por parâmetro, com cada letra do vetor vogal.
function verificaVogal(frase) {
    for (var i = 0; i < frase.length; i++) {
        if ('aeiouAEIOU'.includes(frase[i]))
            total++;
    }
    console.log("A Palavra '" + frase + "' possui " + totalVogais + " vogais");
}
// chamando a função com a palavra passada por parâmetro 
verificaVogal(palavra);
