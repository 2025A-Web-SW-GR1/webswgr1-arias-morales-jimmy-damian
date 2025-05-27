//console.log("Hola typescript");

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


const jimmy ={
"nombre" : "Jimmy",
"apellido": "Arias",
edad: 22,
hijos: 0,
casado: false,
zapatos: undefined,
ropa:{
    color: "azul",
    talla: 42
},
mascotas: ["Michi", "Perro"]


};
console.log(jimmy);
//acceder a las propiedades
jimmy.nombre //"Jimmy"
jimmy["apellido"] //Arias

//modificar (reasignar)
jimmy.nombre = "vicente";
jimmy["nombre"] = "Vicente";
//jimmy={}; ERROR
//crear atributos
// jimmy.sueldo=1.1;
jimmy["gastos"] = 0.8;
//eliminar propiedades
// jimmy.nombre = undefined;
// delete jimmy.nombre;


//VARIABLES POR VALOR O POR REFERENCIA
//Variables por valor
//Primitivas: number, string, boolean
let edadJimmy=22;
let edadArias = edadJimmy; //CLONANDO EL PRIMITIVO
console.log(edadJimmy); //33
console.log(edadArias); //33
edadJimmy = edadArias +1;
console.log(edadJimmy);//34
console.log(edadArias);//33

//variables por referencia
//Objet: {} []
let notas ={
    total: 10,
};
let notas2doBim = notas; //REFERENCIA
notas2doBim.total = notas2doBim.total+1
console.log(notas);//total: 11
console.log(notas2doBim) //total: 11

//como clonar
let notasClonadasUno = Object.assign({},notas);
let arregloACopiar = [1,2,3];
let ArregloClonado =Object.assign(
    [], arregloACopiar
) //arr
notasClonadasUno.total= notasClonadasUno.total+1;
console.log(notas);//total:11
console.log(notas2doBim)//total:11
console.log(notasClonadasUno)//total:12

//ARREGLOS  
const arregloEjemplo = [1,2,3,4,5];
//for of
for (let valorDelArreglo of arregloEjemplo){
    console.log('Valor:',valorDelArreglo);
}
for(let indiceDelArreglo of arregloEjemplo){
console.log('Indice: ', indiceDelArreglo);
console.log('Valor:', arregloEjemplo[indiceDelArreglo]);

}
//Añadir al FINAL un elemento
arregloEjemplo.push(6);//[1,2,3,4,5,6]
//Eliminar el ultimo elemento
arregloEjemplo.pop();//[1,2,3,4,5]
//Añadir al principio del arreglo
arregloEjemplo.unshift(0);//[,1,2,3,4,5,6]
//Eliminar y agregar elementos
//splice - indice donde empezar
//       - numero elementos a eliminar
//       - elemento a añadir
arregloEjemplo.splice
(
    0,//empezamos en el indice 0
    3,//eliminamos 3 elementos
    3,4,5
);
//[0,1,2,3,4,5] -> arreglo original
//[0,1,2] -> eliminados
//[4,5,3,4,5] -> arreglo final


//OPERADORES PARA TRABAJAR CON ARREGLOS

// find
// findIndex
// foreach
// map
// filter
// some
// every
// reduce

function soloNumeros(a,b,c){
    return a-b+c;
}
function soloNumerosTs(
    a:number,b:number,c:number
):number{
    return a-b+c;
}
function soloImprimir(texto:string):void{
    console.log(texto);
}
function soloImprimir2(texto:string):undefined{
    console.log(texto);
}
//Funciones nombradas
function nombreDeMiFuncion(){}
//Funciones anonimas
const funcionSinNombre = function (){};
nombreDeMiFuncion();
funcionSinNombre();
[].forEach(function(){});
//Fat arrow function
const functionFatArrow=(
a:number, b:number

):number => {
    return a+b;
};
const functionFatArrowSinParametros = () =>{
    console.log('Sin parametros');
};
const functionFAOmitirReturn= (a,b) => a+b;

const unSoloParametroSinParentesis = a => a * a;
//parámetros infinitos

function sumarNumeros (
    ...todosNumeros:number[]
): number{
    let total =0;
    for (let valorNumero of todosNumeros){
        total= total +valorNumero;
    }
    return total;
}
sumarNumeros(1,2,3,4,5,2,1,2,3,4,5);

//Destructuracion
//Destructuracion de objetos

const jimmyDest = {

    nombre: "Jimmy",
};
const carolinaDest = {
    nombre : "Carolina",
    apellido: "Jimmy",
};
//merge de las dos variables (orde importa)
const jimmyCalorinaDest = {
    ...jimmyDest,
    ...carolinaDest,
};
const carolinaJimmyDest = {
    ...carolinaDest,
    ...jimmyDest,
    
};
// {nombre: "Jimmy", apellido: "Arias"}
const overrideDest = {
    ...carolinaJimmyDest,
    ...jimmyDest
};
const arregloDestUno = [1,2,3];
const arregloDestDos= [4,5,6];
//Destructuracion de arreglos
const arregloUnoDosDest = [
    ...arregloDestUno,
    ...arregloDestDos,
]; //[1,2,3,4,5,6]
const arregloDosUnoDest = [
    ...arregloDestDos,
    ...arregloDestUno,  
]; //[4,5,6,1,2,3]
const objetoACopiar = {a:1};
const objetoCopiadoA = {...objetoACopiar};