console.log("Hola typescript");
//var nombre = "algo" // NO VAMOS A USAR VAR NUNCA
var nombres = "Jimmy";
nombres = "A";
nombres = "C";
var nombreTS = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
var numerosTS = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; //DECIMALES
console.log(typeof numeros, "numeros decimales");
var booleanos = true;
var booleanosTS = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
var nulos = true;
var nulosTS = null;
console.log(typeof nulos, "nulos");
var arreglos = [];
var arreglosTs = [];
var arreglosTS2 = []; //Dos tipos de instanciar arreglos de numeros
console.log(typeof arreglos, "arreglos");
var objetos = {};
var objetosTS = {};
console.log(typeof objetos, "objetos");
var undefineds = undefined;
var undefinedsTS = undefined;
console.log(typeof undefineds, "undefineds");
// truty y falsy
// no es necesario que se ponga un booleano para realizar en un if
var trutyFalsy;
trutyFalsy = "";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = 1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = "a";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = -1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = 0;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = 1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = null;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = {};
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = [];
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
