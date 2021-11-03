//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:

let listNumeros: Array<any> = [-2, 1, 3, 5, 7, 8, 9, '10', 'Hoje'] // Passando vetor com números e uma string

// a função recebe uma lista do tipo any e retorna uma lista do tipo number
const retornaLista = (list: Array<any>): Array<number> =>{

    const novaLista: Array<number> = []; // Nova lista apenas com os valores number

    for(let i: number = 0; i < list.length; i++){
        // variavel que recebe o valor da posição atual do vetor como Number
        let num: number = Number(list[i]);

        // verifica se o valor é um número, mesmo que em string como '10', se sim ele retorna o valor para dentro do vetor.
        if(!isNaN(num)) novaLista[i] = num;

    }

 
    const maior: number = Math.max.apply(null, novaLista);     // Variavel que pega o maior valor do novo vetor
    const menor: number = Math.min.apply(null, novaLista);    // Variavel que pega o menor valor do novo vetor
    let soma: number = 0; 
    let medio: number = 0;

    // for que percorre a lista somando todos os valores
    for(let i: number = 0; i< novaLista.length; i++){
        soma += novaLista[i];
    }

    // retorna o valor medio
    medio = soma/novaLista.length;


    console.log("O maior número é: "+maior);
    console.log("O menor número é: "+menor);
    console.log("O valor medio é :"+medio);

    
    return novaLista;
}


console.log(retornaLista(listNumeros));