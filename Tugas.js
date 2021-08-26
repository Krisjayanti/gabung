// NO 1
const p = 'The quick brown fox jumps over the lazy dog';
const regex = /[a,i,u,e,o]/ig;
console.log(p.replaceAll(regex, '*'));

//NO 2
let numbers = [2, 4, 32, 100, 45];
const total = numbers.reduce((a, b) => a + b);
if (total >= 30) {
    console.log(total);
    console.log("it's big!");
} else {
    console.log(total);
}

//NO 3
var angka = [3, 6, 2, 56, 32, 5, 89, 32];
var terbesar = Math.max(...angka);
var terkecil = Math.min(...angka);
console.log(terbesar);
console.log(terkecil);