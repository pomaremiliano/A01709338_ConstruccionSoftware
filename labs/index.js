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

//arreglos push trata el arreglo como pila y agrega el elemento al final del otro

const arreglo = ["Elemento1"];

arreglo.push("Elemento2");

arreglo[10] = "Uno mas";

// arreglos asociativos que permiten asociar pares de llaves variables

arreglo["Once"] = "Otro mas";

//podemos recorrer el arreglo usando ciclo for 

for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// Pero tambien se puede recorrer de esta forma 


for(let posicion in arreglo){//in regresa indices del arreglo
    console.log(posicion);
}   


for(let valor of arreglo){ //guarda los valores 
    console.log(valor); 

}

//objetos json: javascript object rotation: formato de arreglo de objetos 

const objeto = {
    atributo1: "valor1",
    atributo2: "valor2",
    atributo3: "valor3"
}

console.log(objeto);
console.log(objeto.atributo1);





function ejercicio1() {
    const numero = parseInt(prompt("Ingresa un numero:"));
    
 
    for(let i = 1; i < numero; i++){
        tablan += i,i**2,i**3;

    }
   tabla = console.log(tablan);
 

    document.getElementById("ejercicio1").innerHTML = "Ejercicio 1 resultados: ", tabla;
}

function ejercicio2(){
    const numero = prompt("");
}
ejercicio1();