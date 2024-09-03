import ContaBancaria from "./ContaBancaria";

var c1 = new ContaBancaria("Joao","4866584" ,"teste","teste2");

c1.consultarSaldo();
c1.depositar(100);
c1.sacar(40);

console.log("--------------------------")
console.log(c1.numero);
console.log(c1.titular);
console.log(c1.dataCriacao);
console.log(c1.saldo);
console.log(c1.chavePix);

c1.numero = "543234"
c1.saldo = 1000.00
c1.titular = "Geovane"

