// variables, constantes, consola
let pelicula_favorita = "taxi driver";

//para imprimir 
console.log(pelicula_favorita);
//para declarar constantes 
const precio = 5;
console.log(precio);

console.error("Mensaje de error");

console.warn("Mensaje de advertencia");

console.info("Info");

console.assert(precio === 55); //regresa valor booleano. El triple igual significa que tengan el mismo valor y el mismo tipo de valor 

// Alcance de las variables 

if(precio>60){   // las variables declaradas con let se limitan a las llaves, y al usar var: tiene un alcance a toda la funcion (pero menos seguro)
    let respuesta = "caro";
    console.log(respuesta);

} else {
    let respuesta = "barato";
    console.log(respuesta);

}


for(let i=1; i<=10;i++){
    console.log(i);
}

//funciones que interactuan con el navegador
alert("Hola")

const is_hungry = prompt("Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("Nombre:");
console.log("Hola: " + nombre);


//funciones tradicionales

function vamonos(){
    console.log("Vamonos, ya se acabo la clase");
}

vamonos();

//funciones modernas 
() => console.log("Funcion anonima, declaracion sin ejecucion");

 
const funcion_anonima = () => { //una variable que guarde una funcion anonima, guarda la direccion de memoria como un apuntador
    console.log("Funcion anonima, declaracion sin ejecucion");
}

//para ejecutarse
funcion_anonima();

//html dinamico 
const Soundtracks = document.getElementById("Soundtracks");
console.log(Soundtracks);

const despliega_rating= () => {
    const rating = "10/10";
    Soundtracks.innerHTML = rating;
    Soundtracks.onclick = despliega_nombre;
    
}

const despliega_nombre= () => {
    const nombre = "Soundtracks for the blind";
    Soundtracks.innerHTML = nombre;
    Soundtracks.onclick = despliega_rating;
}

Soundtracks.onclick = () => {
    console.log("Swans");
    despliega_rating();
}

