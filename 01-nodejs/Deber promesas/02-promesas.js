

//Trabajo en clase : 
const fs = require('fs').promises;

console.log("Usando then/catch");

fs.readFile('./a.txt', 'utf-8')
    .then((contenido) => {
        const nuevoContenido = contenido + '\n' + new Date().toString();
        return fs.writeFile('./a.txt', nuevoContenido);
    })
    .then(() => {
        console.log('Archivo actualizado correctamente con promesas (then/catch).');
    })
    .catch((error) => {
        console.error('Error durante el proceso:', error);
    });
