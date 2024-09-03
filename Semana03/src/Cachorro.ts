export default class Cachorro {
    // private nome: string: "Bento" // Dessa forma, o "atributo" fica somente "acessivel" dentro dessa classe. 

    constructor(nome: string, raca: string, cor: string) {
        this.codigo = String(Math.random() * 50)
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;

    }
    codigo!: string;
    nome!: string;
    raca!: string;
    cor!: string;

    exibirCachorro() {
        console.log(`O Cachorro ${this.nome}\n é da raça ${this.raca}da cor ${this.cor}`)

    }
}

//