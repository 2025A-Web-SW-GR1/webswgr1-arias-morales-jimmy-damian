//Trabajo en clase
const fs = require('fs').promises; // Trabajamos con promesas modernas

console.log("Usando Promesas con async/await");

// Función asincrónica para usar await
async function actualizarArchivoConFecha() {
    try {
        // Leemos el contenido del archivo
        const contenido = await fs.readFile('./a.txt', 'utf-8');

        // Concatenamos la fecha actual al final del contenido
        const nuevoContenido = contenido + '\n' + new Date().toString();

        // Escribimos el nuevo contenido al archivo
        await fs.writeFile('./a.txt', nuevoContenido);

        // Mensaje de éxito
        console.log('Archivo actualizado correctamente con async/await.');
    } catch (error) {
        // Capturamos cualquier error
        console.error('Error durante el proceso:', error);
    }
}

// Llamamos a la función para ejecutar la lógica
actualizarArchivoConFecha();
