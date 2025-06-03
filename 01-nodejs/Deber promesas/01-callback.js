

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
