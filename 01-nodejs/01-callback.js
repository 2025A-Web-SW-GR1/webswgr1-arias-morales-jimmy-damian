//Estamos en el LADO DEL SERVIDOR
const fs = require ('fs'); //Importar libreria fs
console.log ("Primero");
fs.readFile(
    './a.txt',//path
    'utf-8',//codificacion
    //funcion arrow function
    (errorLectura, contenido) => { // Estoy seguro que algo me retorna dentro del callback
        if (errorLectura){
            console.log('Error lectura 1')
        }else{
            console.log('Tercero',contenido);
        }
    }
);

fs.writeFile(
    './a.txt',//path
    'Hola!'+ new Date().toString(),//codificacion
    //funcion arrow function
    (errorEscritura) => { // Estoy seguro que algo me retorna dentro del callback
        if (errorEscritura){
            console.error('Error escritura');
        }else{
            console.log('Archivo escrito');
        }
    }
);
