let carro1 = "Fuscao";
let carro2 = "Brasilia";
let carro3 = "Fiesta";

const carro = [];
carro[0] = "celta";
carro[1] = "corsa";
carro[2] = "Fuscao";
carro[3] = "Brasilia";
carro[4] = "Fiesta";
carro[5] = "ka";

const frutas = ["uva", "maça", "banana", "morango"];

console.log(carro);
console.table(carro);
console.log(carro.length);

let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);


let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);
