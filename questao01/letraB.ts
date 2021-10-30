// Pegando o botão
let btn = document.querySelector('.btn')!;
//Pegando o campo input no HTML
let campo = document.querySelector('#palavra-input')! as HTMLInputElement;
// Variavel que seleciona o campo do resultado
let resultP = document.getElementById('result')!;

//variaveis total e result, uma retorna a quantidade de vogais na palavra e a outra retorna o texto para o HTML
let total = 0;
let result: string;

// Evento de click, quando o botão é clicado, a função de callback verifica se o campo passado é diferente de nulo, se sim ele chama a função que verifica quantas vogais tem na palavra, caso seja nulo ele exibe uma mensagem na tela.
btn.addEventListener('click', () =>{
    //Testando se o valor foi capturado
   console.log(campo.value);

   if(campo.value != '') verificaVogais(campo.value);
   else {
       resultP.innerText = 'Informe uma palavra/frase';
   }

  
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
    total = 0;
}


// Limpar campo e p

let clear = document.querySelector('.btn-clear')!;

clear.addEventListener('click', () =>{
    resultP.innerText = '';
    campo.value = '';
});