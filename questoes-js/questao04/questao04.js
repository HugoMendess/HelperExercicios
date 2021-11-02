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
// Selecionando a tabela com o seletor css(tabela)
var tbody = document.getElementById('tabela');
// função que mostra os dados do vetor na tabela HTML
function listaTabela() {
    for (var i = 0; i < listaElementos.length; i++) {
        // Toda vez que o loop for executado a função vai criar todos esses elementos tr e td
        var tr = document.createElement('tr');
        var td_id = document.createElement('td');
        var td_name = document.createElement('td');
        var td_bio = document.createElement('td');
        var td_btn = document.createElement('td');
        // Atribuindo uma classe para cada elemento para que seja possivel manipular o css do button e da linha
        td_id.setAttribute('id', 'id_input');
        td_id.classList.add('td_id');
        td_name.classList.add('td_name');
        td_bio.classList.add('td_bio');
        // Atribuindo os dados do vetor a cada elemento da linha
        td_id.innerText = listaElementos[i].id;
        td_name.innerText = listaElementos[i].name;
        td_bio.innerText = listaElementos[i].bio;
        // atribuindo um button ao elemento HTML, assim como a classe para o css
        td_btn.innerHTML = '<button class="btn-apagar" type="button" value="delete" onclick"deleteRow(this)">Excluir</button>';
        // Atribuindo cada elemento como filho de tr.
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_bio);
        tr.appendChild(td_btn);
        // Atribuindo o tr como filho da tabela.
        tbody.appendChild(tr);
    }
}
listaTabela();
// Letra B
// Pegando os dados passados pelo formulário
var inputId = document.getElementById('id');
var inputName = document.getElementById('name');
var inputBio = document.getElementById('bio');
var button = document.getElementById('enviar');
// Função que capta o evento de click no botão do formulário
button.addEventListener('click', function () {
    var td_inputID = document.querySelectorAll('#id_input');
    var td_inputName = document.querySelectorAll('.td_name');
    var td_inputBio = document.querySelectorAll('.td_bio');
    for (var i = 0; i < td_inputID.length; i++) {
        if (inputId.value == td_inputID[i].innerHTML) {
            console.log(td_inputID[i].innerHTML);
            td_inputID[i].innerHTML = inputId.value;
            td_inputName[i].innerHTML = inputName.value;
            td_inputBio[i].innerHTML = inputBio.value;
        }
        else {
            inputId.value = '';
        }
    }
});
// Letra D - Excluir
