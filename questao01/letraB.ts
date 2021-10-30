
let btn = document.querySelector('.btn')!;

let campo = document.querySelector('#palavra-input')! as HTMLInputElement;
let resultP = document.getElementById('result')!;

// Vetor com as vogais para comparação
const vetorVogais: String[] = ['a', 'e', 'i', 'o', 'u'];
let total = 0;
let result: string;

btn.addEventListener('click', () =>{
    //Testando se o valor foi capturado
   console.log(campo.value);
   verificaVogais(campo.value);

  
});

// Função que verifica se existem vogais na frase passada
function verificaVogais(frase: string){
    for(let i = 0; i< frase.length; i++){
        if('aeiouAEIOU'.includes(frase[i])) total++;
    }
    
    // Teste no console
    console.log('A palavra possui '+total+' vogais');

    // Se o número de vogais for maior que 1 ou 0, o result recebe o texto com vogais no plural
    if(total === 1){
        result = 'A palavra possui '+total+' vogal';
    }

    else{
        result = 'A palavra possui '+total+' vogais';
    }

    // colocando o texto do resultado na tela    
    resultP.innerText  = result;
}


// Limpar campo e p

let clear = document.querySelector('.btn-clear')!;

clear.addEventListener('click', () =>{
    resultP.innerText = '';
    campo.value = '';
});