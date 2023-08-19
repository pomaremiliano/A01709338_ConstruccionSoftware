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




// Lab 4: Ejercicio 1
function cuadrados_cubos() {
    const numero = parseInt(prompt("Ingresa un numero: "));
    
    let lista_numeros = "<ul>";
    for(let i = 1; i < numero; i++){
        lista_numeros += `<li> -->${i}, cuadrado: ${i ** 2}, Cubo: ${i ** 3}</li>`;

    }
   lista_numeros += "</ul>";
 

    document.getElementById("ejercicio1").innerHTML = lista_numeros;
}

cuadrados_cubos();

// Lab 4: Ejercicio 2

function valida_suma() {
    const respuesta = prompt("Ingresa tu respuesta: ");
    const t_inicial = new Date();
    const aleatorio1= Math.floor(Math.random()* 255);
    const aleatorio2= Math.floor(Math.random() * 255);
    const suma_aleatoria= aleatorio1 + aleatorio2;
    if (respuesta == suma_aleatoria) {
        document.getElementById("ejercicio2").textContent = "¡Correcto!";
    } else {
        document.getElementById("ejercicio2").textContent = `¡Incorrecto! La respuesta correcta es --> ${suma_aleatoria}`;
    }


    document.getElementById("ejercicio2.1").textContent = `Tiempo:  ${new Date() - t_inicial} ms`;
    
}

valida_suma();

//Lab 4: Ejercicio 3
// Calcular cantidad de números negativos de un array en una función de JS. (n.d.). Stack Overflow En Español. https://es.stackoverflow.com/questions/484717/calcular-cantidad-de-n%C3%BAmeros-negativos-de-un-array-en-una-funci%C3%B3n-de-js
function contador_negativos(arreglo) {
   // contador numeros negativos
   let negativo = 0;
   arreglo.forEach(num => {
    if (num < 0) negativo++;
   });
   document.getElementById("ejercicio3.1").textContent = `Numeros negativos: ${negativo}`;
}

function contador_ceros(arreglo) {
    // contador ceros (0)
    let cero = 0;
    arreglo.forEach(num => {
    if (num == 0) cero++;
    });
    document.getElementById("ejercicio3.2").textContent = `Ceros: ${cero}`;
}

function contador_mayores(arreglo) {
   // contador valores mayores a 0 
   let mayores = 0;
   arreglo.forEach(num => {
    if (num > 0) mayores++;
   });
   document.getElementById("ejercicio3.3").textContent = `Mayores: ${mayores}`;
}

// para declarar el arreglo y ejecutar cada funcion 
let arreglo1 = [-1,80,-154,2,3,0,0]; 
contador_negativos(arreglo1);
contador_ceros(arreglo1);
contador_mayores(arreglo1);


// Lab 4: Ejercicio 4
function promedios(arreglo) {
    let arreglo_promedios=[];

    for (let i=0; i<arreglo.length; i++) {
        const renglon = arreglo[i];
        const suma = renglon.reduce((total, num) => total + num, 0); // reduce recorre el renglon va sumando el total y suma para luego ser dividido (para el promedio). El 0 es el valor inicial que pide la funcion reduce.
        const promedio = suma / renglon.length;
        arreglo_promedios.push(promedio);
    }
    document.getElementById("ejercicio4").textContent = `Promedios: ${arreglo_promedios}`;
}

let matriz1 = [
    [6, 4, 2, 1, 7],
    [2, 1, 3, 4, 6],
    [5, 4, 3, 2, 1],
    [6, 3, 0, 4, 5],
    [3, 2, 1, 3, 2]
];

promedios(matriz1);

//Lab 4: Ejercicio 5
function inverso() {
    const numero = prompt("Ingresa un numero para invertir: ");
    const ninverso = numero.split('').reverse().join('');
    document.getElementById("ejercicio5").textContent = `Numero Inverso: ${ninverso}`;
}
inverso();

//Lab 4: Ejercicio 6
const album = [
    {track1: 7.4},
    {track2: 4.47},
    {track3: 5.58},
    {track4: 4.36},
    {track5: 5.29},
    {track6: 2.52},
    {track7: 7.43},
    {track8: 3.56},
    {track9: 4.26},
    {track10: 7.38},
    {track11: 5.37},
    {track12: 3.27},
    {track13: 2.34}
];


function duracion_album() {
    let suma = 0;
    for (const track of album) {
        const duracion_track=Object.values(track)[0];
        suma += duracion_track; 
    }

    const duracion = suma / 60;
    document.getElementById("ejercicio6").textContent = `Duración Álbum:  ${duracion.toFixed(2)} hrs`;

}

function prom_album() {
    let suma = 0;
    for (const track of album) {
        const duracion_track=Object.values(track)[0];
        suma += duracion_track; 
    }

    const duracion = suma / 60;
    promedios = duracion/album.length;
    document.getElementById("ejercicio6.1").textContent = `promedio Álbum:  ${promedios} hrs`;

}

duracion_album();
prom_album();

//Lab 6 ----------------
//Lab 6 
document.getElementById("boton_papas").onclick = () => {
    const precio = 30;
    const iva = precio * 1.16;
    document.getElementById("boton_papas").textContent = `Precio unitario= $ ${precio}.`;
    document.getElementById("precio_papas").textContent = `Precio con IVA: $ ${iva}.`;
}

document.getElementById("boton_refresco").onclick= () => {
    const precio = 16;
    const iva = precio * 1.16;
    document.getElementById("boton_refresco").textContent = `Precio unitario= $ ${precio}.`;
    document.getElementById("precio_refrescos").textContent = `Precio con IVA: $ ${iva}.`;
}

const papas = [
    {
        nombre: "Sabritas Adobadas",
        imagen: "https://supermode.com.mx/cdn/shop/products/PAPASABRITASADOBADAS64GR.jpg?v=1623178426"
    },
    {
        nombre: "Takis Fuego",
        imagen: "https://m.media-amazon.com/images/I/61OdAGzkCZL._AC_UF894,1000_QL80_.jpg"
    },
];

const refrescos = [
    {
        nombre: "Coca-Cola 600ml",
        imagen: "https://panoli.mx/cdn/shop/products/RE0015_761x.jpg?v=1600970250"
    },
    {
        nombre: "Dr Pepper 600ml",
        imagen: "https://gbrisabebidas.com/wp-content/uploads/2020/11/10000151.jpg"
    },
];
function crea_papas() {
    let html = `<div class="columns">`;
    for(let papa of papas) {
        html += 
        `<div class="column">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${papa.imagen}" alt="${papa.nombre}">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="${papa.imagen}" alt="${papa.nombre}">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${papa.nombre}</p>
                </div>
            </div>
        

        </div>
    </div>
</div>`;
    }
    html += `</div>`;
    document.getElementById("papas").innerHTML = html;
}
crea_papas();

function crea_refrescos() {
    let html = `<div class="columns">`;
    for(let refresco of refrescos) {
        html += 
        `<div class="column">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${refresco.imagen}" alt="${refresco.nombre}">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="${refresco.imagen}" alt="${refresco.nombre}">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${refresco.nombre}</p>
                </div>
            </div>
        

        </div>
    </div>
</div>`;
    }
    html += `</div>`;
    document.getElementById("refrescos").innerHTML = html;
}
crea_refrescos();

//Ejemplos clase lab 6
//cambia de color el texto en el input
/*document.getElementById("pelicula").onkeyup = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.getElementById("pelicula").style.color = `rgb(${red}, ${green}, ${blue})`;

}
// arreglo de objetos para 
const peliculas = [
    {
        nombre: "Titanic",
        imagen: "https://i.etsystatic.com/27725708/r/il/3989d8/2912524873/il_fullxfull.2912524873_6vc1.jpg",
        sinopsis: "Historia de amor entre Jack y Rose en el trasatlántico más grande de la época"
    }, 
    {
        nombre: "Oppenheimer",
        imagen: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        sinopsis: "Historia de la bomba atómica"
    }, 
    {
        nombre: "Barbie",
        imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
        sinopsis: "La muñeca más famosa de la historia"
    }, 
    {
        nombre: "TMNT",
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/5d830b134127975.61ce89a78d10c.jpg",
        sinopsis: "Las aventuras flipantes de las tortugas verdes en Nueva York"
    },
];

function genera_posters() {
    let html = `<div class="columns">`;
    for(let pelicula of peliculas) {
        html += 
        `<div class="column">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${pelicula.nombre}</p>
                </div>
            </div>
        
            <div class="content">
                ${pelicula.sinopsis}
            </div>
        </div>
    </div>
</div>`;
    }
    html += `</div>`;
    document.getElementById("posters").innerHTML = html;
}
genera_posters();
*/