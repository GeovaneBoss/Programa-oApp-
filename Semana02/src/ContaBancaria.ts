export default class ContaBancaria { //Sempre que criar uma classe nova, será nesse formato
    constructor(numero: string, saldo: number, titular: string, chavePix: string) {
        this.numero = String(Math.floor(Math.random() + 89999) + 10000);
        this.saldo = 0;
        this.titular = titular;
        this.chavePix = chavePix;
        this.dataCriacao = new Date();

    }
    numero: string;
    saldo: number;
    titular: string;
    chavePix: string;
    dataCriacao: Date;

    depositar(valor: number) {
        if (valor <= 0) {
            console.log("Valor invalido");
            return;
        } else {
            this.saldo = this.saldo + valor;
            console.log(`Deposito de R$ ${valor} realizado com sucesso. Seu saldo atual é ${this.saldo}`);
        }
    }
    sacar(valor: number) {

        if (valor > this.saldo || valor <= - 0) {
            console.log("Valor invalido")
        } else {
            this.saldo = this.saldo - valor;
            console.log(`Valor de R$ ${valor} sacado realizado com sucesso. Seu saldo atual é ${this.saldo}`)
        }
    }
    consultarSaldo() {
        console.log(`Seu Saldo é de R$${this.saldo}`)
    }
}

