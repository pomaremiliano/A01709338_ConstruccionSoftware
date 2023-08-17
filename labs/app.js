// Node js se ejecuta en cualquier computadora en vez de un navegador
// Por default todo es asincrono en node.js
console.log("hola desde node!");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','Hola desde node'); // escribir de forma sincrona en un archivo. 

// codigo asincrono: se puede ejecutar a cualquier momento no necesariamente de manera secuencial. Casi todas las operaciones que normalmente bloquearia el sistema, en node js no se bloquearian como write file.

console.log("Ya acabe de escribir");

setTimeout(()=>{console.error("h")},11000); // se ejecuta hasta los 11 segundos (milisegundos)

// funcion asincrona de manera ordenada
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}
