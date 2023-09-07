
let peliculas = [
    {
        nombre: "Mulholland Drive (2001)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYTRiMzg4NDItNTc3Zi00NjBjLTgwOWYtOGZjMTFmNGU4ODY4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    }, 
    {
        nombre: "Taxi Driver (1976)",
        imagen: "https://m.media-amazon.com/images/I/81V7dvwNlIL._UF1000,1000_QL80_.jpg",
    }, 
    {
        nombre: "Reservoir Dogs(1992)",
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/reservoir-dogs.jpg?tf=2048x",
    }, 
    {
        nombre: "Twin Peaks: Fire Walk With Me (1992)",
        imagen: "https://s3.amazonaws.com/criterion-production/films/0463cff2aba2f851fe53803acc03c022/20tdF8noUnU8VylJFM2YRMtlgNgKTn_large.jpg",
    },
];



module.exports = class Peliculas {
    constructor(pelicula_nuevo) {
        this.nombre = pelicula_nuevo.nombre || ":'(";
        this.imagen = pelicula_nuevo.imagen || "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg";
    }
    save() {
        peliculas.push(this);
    }
    static fetchAll() {
        return peliculas;
    }
}

