"use strict";
// 4 - Questão - Com o array do exercício 2 faça:
// a) Uma tabela HTML que liste todos os registros
// b) Um formulário que faça a edição dos dados
// c) Um CTA para este formulário a partir da lista
// d) Um CTA para excluir um item dessa lista
var listaElementos = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// Letra A
function listaTabela() {
    var tbody = document.getElementById('tabela');
    console.log(tbody);
    var tr = document.createElement('tr');
    var td_id = document.createElement('td');
    var td_name = document.createElement('td');
    var td_bio = document.createElement('td');
    var vetorElementos = [];
    for (var i = 0; i < listaElementos.length; i++) {
        td_id.innerText = listaElementos[i].id;
        td_name.innerText = listaElementos[i].name;
        td_bio.innerText = listaElementos[i].bio;
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_bio);
        tbody.appendChild(tr);
    }
}
listaTabela();
// Letra B
var inputId = document.getElementById('id');
var inputName = document.getElementById('name');
var inputBio = document.getElementById('bio');
var button = document.getElementById('submit');
button.addEventListener('click', function () {
    for (var i = 0; i < listaElementos.length; i++) {
        if (listaElementos[i].id == inputId) {
            listaElementos[i].id == inputId;
            listaElementos[i].name = inputName;
            listaElementos[i].bio = inputBio;
        }
    }
    listaTabela();
});
