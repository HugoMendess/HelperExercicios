// 4 - Questão - Com o array do exercício 2 faça:
// a) Uma tabela HTML que liste todos os registros
// b) Um formulário que faça a edição dos dados
// c) Um CTA para este formulário a partir da lista
// d) Um CTA para excluir um item dessa lista

let listaElementos: Array<Object> = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }];

// Letra A

// Selecionando a tabela com o seletor css(tabela)
let tbody: Element = document.getElementById('tabela')!;


// função que mostra os dados do vetor na tabela HTML
function listaTabela() {

    for (let i: number = 0; i < listaElementos.length; i++) {
        // Toda vez que o loop for executado a função vai criar todos esses elementos tr e td
        let tr: Element = document.createElement('tr');
        let td_id: Element = document.createElement('td');
        let td_name: Element = document.createElement('td');
        let td_bio: Element = document.createElement('td');
        let td_btn: Element = document.createElement('td');

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
        td_btn.innerHTML = '<input type="button" value="Delete" class="btn-apagar" onclick="deleteRow(this.parentNode.parentNode.rowIndex)">';
        td_btn.setAttribute('id', 'btn-del');
     

        // Atribuindo cada elemento como filho de tr.
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_bio);
        tr.appendChild(td_btn);
        tr.classList.add('linhas');

        // Atribuindo o tr como filho da tabela.
        tbody.appendChild(tr);

    }



}

listaTabela();

// Letra B

// Pegando os dados passados pelo formulário
let inputId: Element = document.getElementById('id')!;
let inputName: Element = document.getElementById('name')!;
let inputBio: Element = document.getElementById('bio')!;
let button: Element = document.getElementById('enviar')!;


function alteraDados(id: Element, name: Element, bio: Element, btn: Element){
    // Selecionando todos os inpust: ID, Name e Bio, retornando uma Node List
    let td_inputID = document.querySelectorAll('#id_input')!;
    let td_inputName = document.querySelectorAll('.td_name')!;
    let td_inputBio = document.querySelectorAll('.td_bio')!;

   
    // O for percorre o vetor coomparando o id passado com o valor do id da Node List
    for(let i: number = 0; i< td_inputID.length; i++){
        
        // O if verifica se o id passado no input está entre os ids da tabela, como não é pedido para adicionar nenhum elemento na lista, coloquei essa comparação.
        if(id.value < 1 || id.value > 4){
            let div = document.querySelector('.dados-form')!; // Seleciona a div que contém a tabela
            let createP = document.createElement('p'); // Cria um elemento p
            createP.setAttribute('id', 'erro'); // Adiciona um id para alterações no css e manipulação com o js
            createP.innerHTML = 'Informe um ID da tabela!'; // Adiciona o texto do paragrafo
            id.value = ""; // Limpa o campo de id
            div.appendChild(createP); // Adiciona o paragrafo como filho da div da tab

            // Essa função camptura o id do paragrafo e remove ele da tela após 4 segundos
            setTimeout(function(){ 
                var msg = document.getElementById("erro");
                msg.parentNode.removeChild(msg);   
            }, 4000);

            break;
        }

        // Verifica se o id passado está na lista e faz a troca.
        else if(id.value == td_inputID[i].innerHTML){
          
            td_inputID[i].innerHTML = id.value;
            td_inputName[i].innerHTML = name.value;
            td_inputBio[i].innerHTML = bio.value;
        }
}
}
// Captura o evento de click e passa uma função altera dados
button.addEventListener('click', () =>{
    alteraDados(inputId, inputName, inputBio, button);
});


// Letra D - Excluir

function deleteRow(i: Element){
    document.getElementById('tabela')!.deleteRow(i);
}



