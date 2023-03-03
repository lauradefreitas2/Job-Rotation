//1) Observe o trecho de código abaixo:

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA? Será 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(n) {
    let fibonacciArray = [0, 1];
    
    for (let i = 2; i <= n; i++) {
      fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    
    return fibonacciArray;
  }
  
  function pertenceFibonacci(numero, fibonacciArray) {
    let termo = fibonacciArray[numero];
    
    if (numero === 0 || numero === 1 || termo === numero) {
      return true;
    } else {
      return false;
    }
  }

  let numero = parseInt(prompt("Digite um número: "));
  
  let fibonacciArray = fibonacci(numero);
  
  if (pertenceFibonacci(numero, fibonacciArray)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }

// 3) Descubra a lógica e complete o próximo elemento:
//a): 9
let a = [1, 3, 5, 7];
let proximoElemento = a[a.length-1] + 2;
console.log(proximoElemento); 
//b): 128
let b = [2, 4, 8, 16, 32, 64];
let proximoElemento2 = b[b.length-1] * 2;
console.log(proximoElemento2);
//c): 49
let c = [0, 1, 4, 9, 16, 25, 36];
let proximoElemento3 = Math.pow(c.length, 2);
console.log(proximoElemento3);
//d):  1000
let d = [4, 16, 36, 64];
let proximoElemento4 = Math.pow(d.length+1, 3);
console.log(proximoElemento4);
//e): 13
let e = [1, 1, 2, 3, 5, 8];
let proximoElemento5 = e[e.length-1] + e[e.length-2];
console.log(proximoElemento5); 
//f): 23
let f = [2, 10, 12, 16, 17, 18, 19];
let numeroAnterior = f[f.length-1];
let menorPrimo = 2;
for (let i = numeroAnterior + 1; i < Infinity; i++) {
    let divisores = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j === 0) {
            divisores++;
        }
    }
    if (divisores === 1) {
        menorPrimo = i;
        break;
    }
}
let proximoElemento6 = numeroAnterior + menorPrimo;
console.log(proximoElemento6);

//4) eu fiz essa questão em java, pois nao consegui fazer em javascript, o script está em uma pasta chamada ex4, ultliziei a IDE InteliJ :)

//5) Escreva um programa que inverta os caracteres de um string.

let str = "exemplo"; // string a ser invertida
let strInvertida = ""; // string que irá armazenar a string invertida

for(let i = str.length - 1; i >= 0; i--){
  strInvertida += str[i];
}

console.log(strInvertida);


