import leia from 'readline-sync'

/*Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores,
 e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.*?*/

 var idades: number [] = [];
 var nomes: string [] = [];

 var nomeNova: string;
 var IdadeNova: number;

  var nomevelha: string;
 var idadevelha: number;
 


function pedirInfoUsuario(qts: number){
    for( var i= 0; i<qts; i++){
        var nome = leia.question("Informe o Nome: ");
        nomes.push(nome);
        var idade = leia.questionInt("Informe a Idade: ");
        idades.push(idade);

    }
}

function PessoasMaisNovas(){ //rever e ajustar
    for(var i =0; i<idades.length; i++){
if(IdadeNova === undefined || idades[i]<IdadeNova){
    IdadeNova = idades[i];
    nomeNova = nomes[i];
    console.log(` PESSOA MAIS VELHA É ${nomeNova} com ${IdadeNova} ANOS`);
}

    }

}

function PessoasMaisVelhas (){
idades.forEach((idade,index) => {
    if(idadevelha === undefined || idades[i]<idadevelha){
        idadevelha = idades[i];
        nomevelha = nomes[index];
        console.log(`A PESSOA MAIS VELHA É ${nomevelha} com ${idadevelha} ANOS`);
}})
}

pedirInfoUsuario (5);
PessoasMaisNovas ();
PessoasMaisVelhas();




