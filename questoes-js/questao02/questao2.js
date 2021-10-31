"use strict";
// 2 Questão
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// Letra A -  Crie uma função que retorne a bio do id passado
var id = 4;
function retornaBio(num) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id == num) {
            console.log(lista[i].bio);
            return lista[i].bio;
        }
    }
}
retornaBio(id);
// Letra B - Crie uma função que retorne o name do id passado
var id_name = 4;
function retornaName(num) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id == num) {
            console.log(lista[i].name);
            return lista[i].name;
        }
    }
}
retornaName(id_name);
// Letra C - Crie uma função que apague um item da lista a partir de um id passado
var id_clear = 2;
function removeId(num) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id == num) {
            lista.splice(num, 1);
            console.log(lista);
        }
    }
   
}

removeId(id_clear);


// Letra D - Crie uma função que altere a bio ou o name a partir de um id passado

