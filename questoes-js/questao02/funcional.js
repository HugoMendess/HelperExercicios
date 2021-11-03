"use strict";
// 2 Questão
var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// Letra A -  Crie uma função que retorne a bio do id passado
var bio_id = 3; // Id do elemento ao qual a bio será retornada
// função que recebe a lista e o id e filtra o vetor cujo o id é igual ao id passado com o filter, depois ela retorna a bio desse id com o metódo map
var getBio = function (list, num) { return list.filter(function (list) { return (list.id === num); }).map((function (list) { return "Bio: " + list.bio; })); };
console.log(getBio(list, bio_id));
// Letra B - Crie uma função que retorne o name do id passado
var name_id = 3; // Id do elemento ao qual a bio será retornada
// função que recebe a lista e o id e filtra o vetor cujo o id é igual ao id passado com o filter, depois ela retorna o name desse id com o metódo map
var getName = function (list, num) { return list.filter(function (list) { return (list.id === num); }).map((function (list) { return "Name: " + list.name; })); };
console.log(getName(list, name_id));
// Letra C - Crie uma função que apague um item da lista a partir de um id passado
var clear_id = 2;
// função que filtra a lista e retorna uma nova lista sem o ida passado, excluindo ele
var getClear = function (list, num) { return list.filter(function (list) { return (list.id != num); }); };
console.log(getClear(list, clear_id));
// Letra D - Crie uma função que altere a bio ou o name a partir de um id passado
var alter_id = 4;
var newName = 'Hugo Mendes';
var newbio = 'A Bio foi alterada';
//
var getAlter = function (list, num) { return list.filter(function (list) { return (list.id === num); }); };
// const setAlter = (nome: string, bio: string, )
console.log(getAlter(list, alter_id));
