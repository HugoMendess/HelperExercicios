//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:

let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
let maior: number = 0;
let menor: number = 0;



// - Letra A -  O maior valor;

Array.min = (array: number[]): number =>{
    return Math.min.apply(Math, array);

}

console.log("O menor valor é: "+Array.min(numeros));

// - Letra B - O menor valor;

Array.max = (array: number[]): number =>{
    return Math.max.apply(Math, array);
}

console.log("O maior valor é: "+Array.max(numeros));

// - Letra C - O valor medio

let medio: number = 0;
let soma: number = 0;

function resultMedio(vetor: Array<Object>, medio: number, soma: number): string | number{

    for(let i: number = 0; i < vetor.length; i++){
        soma = soma + Number(vetor[i]);
        
    }

    medio = parseInt(soma / vetor.length);
    return medio;
    
}

console.log(resultMedio(numeros, medio, soma));