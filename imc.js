/* Luiz Otávio tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925924
nasceu em 
*/

const nome = "Luiz Otávio"
const sobrenome = "Miranda"
const idade = 30;
const peso = 84;
const altura = 1.80

let IMC;
let anoNascimento;

IMC = peso / (altura * altura);
anoNascimento = 2023 - 30;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", altura, "metros e seu IMC é de ", IMC,
", nasceu em ", anoNascimento, "." );