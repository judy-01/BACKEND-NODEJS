// maiores de idade pagam inteira
// menores de idade pagam meia
// pessoas acima ou com 65 anos pagam meia
// pessoa com 18 anos paga 75% da entrada
// se tiver cupom, ganha pipoca
console.clear();

const idade = 17
const temCupom = false

// == ou === comparar se é igual
// > < >= <=

if (idade > 18 && idade < 65) {
console.log("Pagar entrada inteira")
} else if (idade === 18) {
console.log("Pagar 3/4 entrada")
} else {
console.log("Pagar meia entrada")
}

if (temCupom) {
console.log("Ganhou pipoca")
}

console.log("Final")