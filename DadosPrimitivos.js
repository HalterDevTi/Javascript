// String, number, undefined, null, boolean

const nome = "luiz"; //string
const nome1 = 'luiz'; //string
const nome2 = `luiz`; //string

const num = 22; //sem ("", '', ``) é considerado Number!
const num1 = 0.5; //sem ("", '', ``) é considerado Number!

let nomeAluno; /* retornará Undefined, pois não foi atribuído valor ainda para este Let,
porém ficou reservado, para que futuramente possa ser atribuído algum valor */

let sobrenome = null; //retornará um valor Nulo, propositalmente.

const aprovado = true // Boolean, que é um valor True or False! (Valor lógico)

console.log(typeof nome); /* "Typeof" dentro de Console.log retornará o tipo da Const "nome", no caso uma String,
que foi atribuída à ela na linha 1*/ 

console.log(typeof nome, nome); // retornará o tipo e o Valor da Const nome, caso: String luiz

console.log(sobrenome, sobrenome); // retornará: object null

console.log(aprovado, aprovado); // retornará: Boolean True



