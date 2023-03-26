//Indice         01234567
let umaString = "Um Texto";
console.log(umaString[4]);

//Retornará o indice na casa 4 da String UmaString, no caso "e"

//Formas de concatenar Strings na frase:

console.log(umaString.concat(' Em um lindo dia.'));
console.log(umaString + ' Em um lindo dia');
console.log(`${umaString} Em um lindo dia. `);

//para saber em que indice começa String usá-se:

console.log(umaString.indexOf("Texto"));

// para buscar encontar um pedaço da String, a partir de um indice especifico usa-se:

console.log(umaString.indexOf("o", 3));

//irá procurar a partir do indice 3

// para bsucar de trás pra frente usa-se:

console.log(umaString.lastIndexOf("m", 3));

//vai buscar a String do indice 3, em direção o inicio da String, da direita para a esquerda.

//Para trocar(repalce) uma String, usa-se:

console.log(umaString.replace("Um", 'Outro'));

// retornaria a frase com "Outro" no lugar de "Um"



//alterar o primeiro caractere de uma frase por outro:

et umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.replace(/r/, '#'));

//alterar TODA VEZ que o caractere aparece na frase:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.replace(/r/g, '#'));

//retornará: "o #ato #oeu a #oupa do #ei de #oma"

//para saber o tamanho da String:

//               0123456789
let umaString = 'O rato roe'
console.log(umaString.length);

//retornará 10, pois apesar de 9 letras, o indice 0 é considerado


//para pegar um pedaço da String usa-se Slice:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.slice(2, 6));

/*retornará a palavra rato que vai do indice 2 ao 5, 
porem se pede um indice A MAIS do desejado para que retorne como desejado. */

//no caso se for usado um numero negativo no Slice, ele funcionará como um lenght menos o numero:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.slice(-5));

// retornará: "roma", pq é equivalente à:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.length -5);


// Para dividir a String em varios pedaços por um caractere especifico:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.split(''));

//retornará toda string separado por palavras toda vez que aparecer um espaço:

// 'O' 'rato' 'roeu' 'a' 'roupa' 'do' 'rei' 'de' 'roma'

//para devolver a String em MAIUSCULA usa-se:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.toUpperCase);

//para devolver a String em minuscula usa-se:

let umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.toLowerCase);

