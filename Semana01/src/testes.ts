import leia from 'readline-sync'

/*Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores,
 e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.*?*/

 function encontrarExtremos() {
    const nomes: string[] = [];
    const idades: number[] = [];

    for (let i = 0; i < 5; i++) {
        const nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
        const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`), 10);
        nomes.push(nomes);
        idades.push(idades);
    }

    let indiceMaisVelho = 0;
    let indiceMaisNovo = 0;

    for (let i = 1; i < idades.length; i++) {
        if (idades[i] > idades[indiceMaisVelho]) {
            indiceMaisVelho = i;
        }
        if (idades[i] < idades[indiceMaisNovo]) {
            indiceMaisNovo = i;
        }
    }

    console.log(`Pessoa mais velha: ${nomes[indiceMaisVelho]} com ${idades[indiceMaisVelho]} anos.`);
    console.log(`Pessoa mais nova: ${nomes[indiceMaisNovo]} com ${idades[indiceMaisNovo]} anos.`);
}

encontrarExtremos();
