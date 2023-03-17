// Operadores Aritiméticos + - / *

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); 

//retornará o valor 15, no caso fará adição

//já se voce "somar" um number e uma String, o "+" retornará a concatenação:

 const num1 = "5";
const num2 = 10;
console.log(num1 + num2);

//deste modo retornará 510

// "**" operador de potencia

const num1 = 5;
const num2 = 10;
console.log(num1 ** num2);

// fará a potencia e retornará o valor: 9765625

// "%" operador que retornará o resto da divisao(não é porcentagem!) 

const num1 = 10;
const num2 = 3;
console.log(num1 % num2);

// retornará o resultado: 1 , que é o resto da divisao, caso seja uma divisão exata retornará 0(sem resto!)

//pode ser feito uma operação com mais de dois operadores:

const num1 = 5;
const num2 = 10;
const num3 = 2;
console.log( num1 + num2 * num3);

/*Retornará o resultado da operação, PORÉM, a operação será feita pela hierarquia dos operadores,
no caso, realizará a multiplicação antes da soma! */

// caso queira que a operação de soma seja priorizada, basta colocá-la entre parenteses:

const num1 = 5;
const num2 = 10;
const num3 = 2;
console.log( (num1 + num2) * num3);

// assim retornará o resultado da operação, aplicando a soma antes da multiplicação!

// Hierarquia dos operadores: (), **, * / %, + -

//incrementação:

let contador = 1;
contador++;
console.log(contador);

// usará o valor da variavél e incrementará mais um ao valor! retornando: 2

// já no caso:

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador);

//retornará o resultado 4, pois usará o valor da variavel e incrementará 3 vezes!

// incremento "++" só pode ser usado em Let, se usado em const retornará erro!

// incremento "++" e decremento "--"

// incremento pelo intervalo(passo):

const contador = 0;
const passo = 10;
contador += passo; // +10
contador += passo; // +10
contador += passo; // +10
console.log(contador);

// retornará o resultado 30!

//pode ser feito usando outro operador:

const contador = 2
contador *= 2;
console.log(contador);

//retornará  o resultado 4

// pode ser usado coomo passo tambem:

const contador = 2
contador *= 2;
contador *= 2;
contador *= 2;
contador *= 2;
console.log(contador);

// retornará o resultado 32, fazendo o passo multiplicando 4 vezes

//NaN - not a number:

const num1 = 10;
const num2 = "olá"
console.log( num1 * num2);

// retornará NaN, pois nao multiplicará um número com uma string!

// ParseInt(), serve para converter um string em numero inteiro:

const num1 = 10;
const num2 = PaeseInt ("5");
console.log(num1 + num2);

// retornará o resultado 15

// já se a string fosse "decimal" no caso, teria que ser usado o ParseFloat(ponto flutuante):

const num1 = 10;
const num2 = ParseFloat("5.2");
console.log(num1 + num2);




