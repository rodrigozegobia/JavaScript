//função comum 
function raiz1(n) {
    return n ** 0.5;
}
console.log(raiz1(9));

//função anonima
const raiz2 = function (n){
    return n**0.5;
}
console.log(raiz1(16));

//função arrow
const raiz = n => n ** 0.5;
console.log(raiz1(25));