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
let tbody: Element = document.getElementById('tabela')!;
let elementoAlterado: number = 0;

function listaTabela() {


  

    for (let i: number = 0; i < listaElementos.length; i++) {

        let tr: Element = document.createElement('tr');
        let td_id: Element = document.createElement('td');
        let td_name: Element = document.createElement('td');
        let td_bio: Element = document.createElement('td');
        let td_btn: Element = document.createElement('td');

        td_id.classList.add('td_id');
        td_name.classList.add('td_name');
        td_bio.classList.add('td_bio');

        td_id.innerText = listaElementos[i].id;
        td_name.innerText = listaElementos[i].name;
        td_bio.innerText = listaElementos[i].bio;
        td_btn.innerHTML = '<button class="btn-apagar" type="button" value="delete" onclick"deleteRow(this)">Excluir</button>';


  
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_bio);
        tr.appendChild(td_btn);


        tbody.appendChild(tr);

    }



}

listaTabela();

// Letra B


let inputId: Element = document.getElementById('id')!;
let inputName: Element = document.getElementById('name')!;
let inputBio: Element = document.getElementById('bio')!;
let button: Element = document.getElementById('enviar')!;

button.addEventListener('click', () => {
   
    
    for(let i: number = 0; i< listaElementos.length; i++){
        if(inputId.value == listaElementos[i].id){
            console.log(listaElementos[i].id);
            let td_inputID = document.querySelector('.td_id')!;
         
            td_inputID.innerHTML = inputId.value;

           let td_inputName = document.querySelector('.td_name')!;
           td_inputName.innerHTML = inputName.value;

           let td_inputBio = document.querySelector('.td_bio')!;
           td_inputBio.innerHTML = inputBio.value;
   
        }
    }
  

  
});


// Letra D - Excluir
