const nome = 'Luiz'; //string
const num1 = 10; //number
let nomeAluno; //undefined -> não aponta para local na memória
const sobrenomeAluno = null; //Nulo -> não aponta para local na memória
const aprovado = false; //Boolean = true, false (lógico)

const a = [1, 2];
const b=a;

console.log(a,b);

b.push(3);
console.log(a,b);