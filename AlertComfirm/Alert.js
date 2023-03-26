alert('nossa mensagem');

// retornará um alerta na página web

// equivalente á:

window.alert('nossa mensagem')

// no caso:

window.confirm('deseja apagar ?')

// retornará uma pergunta para o usuário, que resultará em um Boolean: True ou False(quaso cancelar).

// no caso:

windown.prompt('Digite seu nome:')

//abrirá uma caixa de texto(imput) para que o usuário preecha.

alert('olá mundo')

// retornará um valor undefined 

// uma forma de capturar o valor Boolean que o usuário informar:

const confirma = confirm('deseja apagar')

//retornará um valor True ou False dependendo da resposta do usuario, logo apos ficará armazenada a ação
//poderá ser pedido o valor que está armazendo chamando a função:

console.log('confirma')

//retornará o Boolean armazenado.

// outra forma de armazenar dados é:

let num1 = prompt('digite um numero')

// o número que o usuário digitar será armazenado e poderá ser retornado usando:

console.log(num1)

//tudo que o prompt retorna é String, mesmo sendo numeros, converte assim:

let num1 = prompt('num1')
num1 = number(num1)

// dessa forma Num1 se tornará um Number.

