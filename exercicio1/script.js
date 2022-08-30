// Construa um programa que:

// a) Peça ao usuário que insira um número **par**
let numero = prompt ("Insira um número par:")
numero = Number (numero)
console.log("Número inserido:",numero)
// b) Imprima no console **o resto da divisão** desse número por 2.
let resto = numero%2
let resultado = numero/2
console.log("Resultado divisão:", resultado)
console.log("O resto deste número dividido por 2 é: ", resto)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Ele sempre faz a divisão do número por 2, quando feito 2/2= 1 e 0/2=0, até nos numeros negativos esta funcionando corretamente.
// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
// como eu não coloquei uma 'preferencia' a numero par, ele esta dividindo o numero impar tambem (sempre com numero quebrado com virgula)