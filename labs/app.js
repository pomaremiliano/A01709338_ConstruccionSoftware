// Node js se ejecuta en cualquier computadora en vez de un navegador
// Por default todo es asincrono en node.js
console.log("hola desde node!");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','Hola desde node'); // escribir de forma sincrona en un archivo. 

// codigo asincrono: se puede ejecutar a cualquier momento no necesariamente de manera secuencial. Casi todas las operaciones que normalmente bloquearia el sistema, en node js no se bloquearian como write file.

console.log("Ya acabe de escribir");

