// Estamos en el LADO DEL SERVIDOR
// const fs = require ('fs'); //Importar libreria fs
// console.log ("Primero");
// fs.readFile(
//     './a.txt',//path
//     'utf-8',//codificacion
//     funcion arrow function
//     (errorLectura, contenido) => { // Estoy seguro que algo me retorna dentro del callback
//         if (errorLectura){
//             console.log('Error lectura 1')
//         }else{
//             console.log('Tercero\n',contenido);
//         }
//     }
// );
// fs.writeFile(
//     './a.txt',//path
//     'Hola!'+ new Date().toString(),//codificacion
//     //funcion arrow function
//     (repeticion) =>{
//         while (repeticiones<10){
//         repeticiones= repeticiones + 1
            
//         }
//     },
//     (errorEscritura) => { // Estoy seguro que algo me retorna dentro del callback
//         if (errorEscritura){
//             console.error('Error escritura');
//         }else{
//             console.log('Archivo escrito');
//         }
//     }
// );


// function escribirHolaConFecha(veces, archivo) {
//   const fecha = new Date().toLocaleDateString('es-ES'); // Fecha actual (DD/MM/AAAA)
//   let contenido = ''; // Aquí acumulamos el texto a escribir

//   Generamos el contenido repetido
//   for (let i = 0; i < veces; i++) {
//     contenido += `Hola! ${fecha}\n`; // \n = salto de línea
//   }

//   Escribimos en el archivo (sobrescribe si ya existe)
//   fs.writeFile(archivo, contenido, (err) => {
//     if (err) {
//       console.error('Error al escribir el archivo:', err);
//     } else {
//       console.log(`Archivo "${archivo}" escrito correctamente con ${veces} saludos.`);
//     }
//   });
// }

// Ejemplo: Escribe 5 veces "Hola! [fecha]" en saludos.txt
// escribirHolaConFecha(5, 'saludos.txt');


//Trabajo en clase 

const fs = require('fs'); // Import

console.log("Usando Callbacks");

// Leer archivo 'a.txt' de forma asíncrona
fs.readFile('./a.txt', 'utf-8', (err, data) => {
    if (err) {
        // Error lectura
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Se concatena la fecha
    const nuevoContenido = data + '\n' + new Date().toString();

    // Se escribe el nuevo contenido
    fs.writeFile('./a.txt', nuevoContenido, (errEscritura) => {
        if (errEscritura) {
            // Error de escritura
            console.error('Error al escribir en el archivo:', errEscritura);
        } else {
            // Exito
            console.log('Archivo actualizado correctamente con callbacks.');
        }
    });
});
