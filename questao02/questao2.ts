// 2 Questão
let lista: Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];



// Letra A -  Crie uma função que retorne a bio do id passado

let id: number = 4;

function retornaBio(num: number){
   for(let i: number = 0; i<lista.length; i++){
       if(lista[i].id == num){
           console.log(lista[i].bio);
           return lista[i].bio;
       }
   }
}

retornaBio(id);


// Letra B - Crie uma função que retorne o name do id passado

let id_name: number = 4;

function retornaName(num: number){
   for(let i: number = 0; i<lista.length; i++){
       if(lista[i].id == num){
           console.log(lista[i].name);
           return lista[i].name;
          
       }
   }
}

retornaName(id_name);

// Letra C - Crie uma função que apague um item da lista a partir de um id passado

var id_clear = 3; // id do item a ser removido da lista

// função que remove o elemento com id 3 da lista
function removeId(num: number) {
    
    // forEach que percorre toda a lista, o item começa de 0 logo foi preciso somar 1 para que o item fosse de 1 a 4(Para comparar com o id dentro da lista e não o id do vetor que vai de 0 a 3)
    lista.forEach((item) =>{
        // Verifica se o indexOf + 1 da lista é igual ao id passado por parametro, se sim ele remove o elemento da lista e retorna ela.        
        if(lista.indexOf(item) + 1 == num){
            lista.splice(lista.indexOf(item), 1);
            console.log(lista);
           
            // console.log(lista[lista.indexOf(item)]);
        }
    });
    
}

removeId(id_clear);
