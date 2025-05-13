console.log("Hola typescript");

//var nombre = "algo" // NO VAMOS A USAR VAR NUNCA

 var nombres = "Jimmy";
 nombres = "A";
 nombres = "C";
var nombreTS ="";
console.log(typeof nombres, "nombres");

let numeros = 1;
let numerosTS: number= 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; //DECIMALES
console.log(typeof numeros, "numeros decimales");

let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log (typeof booleanos, "booleanos");

let nulos = true;
let nulosTS : null = null;
console.log (typeof nulos, "nulos");

let arreglos =[];
let arreglosTs: number[]=[];
let arreglosTS2: Array<number> = []; //Dos tipos de instanciar arreglos de numeros
console.log (typeof arreglos, "arreglos");

let objetos ={};
let objetosTS : object ={} ;
console.log(typeof objetos,"objetos")

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds,"undefineds");

// truty y falsy
// no es necesario que se ponga un booleano para realizar en un if

let trutyFalsy:any;
trutyFalsy="";

if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy=1
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy="a"
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy=-1
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 0
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}

trutyFalsy = 1
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}

trutyFalsy = null
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}

trutyFalsy = {}
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}

trutyFalsy = []
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("falsy");
}