// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
let numero1 = prompt ("Digite um número:")
console.log("Número 1:", numero1)
let numero2 = prompt ("Digite outro número:")
console.log("Número 2:", numero2)
// ```
// O primeiro numero é maior que segundo? true
let maior = numero1 > numero2
console.log("O primeiro numero é maior que segundo?", maior) 
// O primeiro numero é igual ao segundo? false
let igual = numero1 === numero2
console.log("O primeiro numero é igual ao segundo?", igual)
// O primeiro numero é divisível pelo segundo? true
let divisao1 = numero1 % numero2 === 0
console.log("O primeiro numero é divisível pelo segundo?", divisao1)
// O segundo numero é divisível pelo primeiro? true
let divisao2 = numero2 % numero1 === 0
console.log("O segundo numero é divisível pelo primeiro?", divisao2)
// divisível = com resto zero