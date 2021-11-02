"use strict";
// 2 Questão
var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// Letra A -  Crie uma função que retorne a bio do id passado
var id_funcional = 4;
function mostraBio(num, list) {
    var bio = '';
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == num) {
            bio = list[i].bio;
            return bio;
        }
    }
    return "Não foi encontrado";
}
console.log(mostraBio(id_funcional, list));
// Letra B - Crie uma função que retorne o name do id passado
var name_fun = 4;
function retornaNome(num, list) {
    var nome = '';
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == num) {
            nome = list[i].name;
            return nome;
        }
    }
    return "Não foi encontrado";
}
console.log(retornaNome(name_fun, list));
// Letra C - Crie uma função que apague um item da lista a partir de um id passado
var id_clear = 3; // id do item a ser removido da lista
// função que remove o elemento com id 3 da lista
var remover = function (num, list) {
    // forEach que percorre toda a lista, o item começa de 0 logo foi preciso somar 1 para que o item fosse de 1 a 4(Para comparar com o id dentro da lista e não o id do vetor que vai de 0 a 3)
    list.forEach(function (item) {
        // Verifica se o indexOf + 1 da lista é igual ao id passado por parametro, se sim ele remove o elemento da lista e retorna ela.        
        if (list.indexOf(item) + 1 == num) {
            list.splice(list.indexOf(item), 1);
            return list;
            // console.log(lista[lista.indexOf(item)]);
        }
    });
    return "Não foi encontrado";
};
console.log(remover(id_clear, list));
// Letra D - Crie uma função que altere a bio ou o name a partir de um id passado
var altera = 1;
var novaBio = 'A bio foi alterada';
var novoNome = 'Hugo Mendes';
var alterarBio = function (num, bio, nome, list) {
    // ForEach que percorre toda a lista e verifica se a lista com o indexOf(item) + 1 é igual ao numero passado. Somei +1 pq o indexOf do vetor começa de 0.
    list.forEach(function (item) {
        if (list.indexOf(item) + 1 == num) {
            list[list.indexOf(item)].bio = bio;
            list[list.indexOf(item)].name = nome;
            return list;
        }
    });
    return "Não foi encontrado";
};
console.log(alterarBio(altera, novaBio, novoNome, list));
