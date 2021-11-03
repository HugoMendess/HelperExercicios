//  3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:

let listNumeros: Array<any> = [-2, 1, 3, 5, 7, 8, 9, '10', 'Hoje'] // Passando vetor com números e uma string

// a função recebe uma lista do tipo any e retorna uma lista do tipo number
const retornaLista = (list: Array<any>): Array<number> => {


    // função que filtra os valores number e retorna uma lista apenas com números
    const validaNumeros: Array<number> = list.filter(list => (!isNaN(Number(list))));
    // função que retorna um array com todos os números que sejam number, ou seja, o '10' vem como 10 agora.
    const validaLista: Array<number> = validaNumeros.map((number: any) => Number(number));

    const maior: number = Math.max.apply(null, validaLista);     // Variavel que pega o maior valor do novo vetor
    const menor: number = Math.min.apply(null, validaLista);    // Variavel que pega o menor valor do novo vetor

    // Função que retorna o valor medio
    const medio: number = validaLista.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {

        return Number(acumulador) + Number(elementoAtual);

    });

    return [maior, menor, medio];

}


console.log(retornaLista(listNumeros));