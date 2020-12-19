/*console.log("Przykładowy jakiś komunikat wyświetlany w konsoli");*/

/*var animal = ' ';
switch (animal) {
case "cat":
    console.log("maow");
    break;
    case "dog":
        console.log("bark");
        break;
        default:
            console.log('test');
}*/

//value types
/*var string = "tekst";
var number = 2;
var decimal = 2.5;
var boolean = true; false;
var test; var test = undefined;
var test = null;

 //reference types
var object = {};
var array = [];
function fun () {};

//console.log(typeof decimal);

//const foo = "Przykład";
console.log(foo);

var foo2 = "tekst";
const foo = {
    bar: 2
};

foo.bar = 5;
foo2 = "teskt2"

var fun = 10;
let ber = 20;

var fin = 30;
ber = 40;*/

const global = "global const variable";
let global2 = "global let variable";

/*function test() {
    console.log(global); // można wyświetlić zmienną global, ponieważ jest o zasięgu globalnym
    console.log(global2);
    console.log(global3);
}
var global3 = "Przykład";
test();

function functionScope() {
    var funVariable = "function variable";
    console.log(funVariable);
    function child() {
        console.log(funVariable);
    }
    if (true) {
        var foo = 10;
    }
    child();
    console.log(foo);
}

functionScope();

console.log(funVariable); // tutaj otrzymamy błąd: Uncaught ReferenceError: funVariable is not defined
*/
/*function functionScope() {
    var funVariable = "function variable";
    console.log(funVariable);
    if (true) {
        var foo = 10;
    }
    console.log(foo); // Uncaught ReferenceError: x is not defined
}

functionScope();*/

/*for (let i = 0; i < 3; i++) {
    console.log(i);
}*/
/*
console.log(foo);
foo = "Dupa";

console.log(foo2);
const foo2 = "ciasna";

const array = [1,2,3];
array.forEach(function(value,index) {
    console.log('value=', value);
    console.log('index=', index);
})

let tablica = [1, 2, 3];
tablica.forEach( function( element, index ) {
 tablica[index] = tablica[index] + 2;
    //console.log( ”Element z Indexem: ” + index + ” ma wartość ” + element );
});

console.log(tablica);*/

/*function myFunction() {
    // kod funkcji
    (function(a, b) {
        return a + b;
    })(10,20);

myFunction(); // wywołanie funkcji*/

/*const tablica = [1,2,3,4,5]; //pusta tablica
const tablica2 = [1, 2, 3, 4]; //tablica z 4 liczbami
const tablica3 = ["Jan", "Piotr", "Daniel", "Wojtek"];*/

const tablica = [1, 2, 3, 4];
tablica.push(5);

console.log(tablica);

//> Array(5) [1, 2, 3, 4, 5]

//console.log(tablica);
