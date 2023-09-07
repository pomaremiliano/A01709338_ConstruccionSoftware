let discos = [
    {
        nombre: "Soundtracks for the blind (1995)- swans",
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/11/19/f6/1119f602-b7dc-024d-1d7d-22c60e19fe2b/658457000120_cover.jpg/1200x1200bf-60.jpg",
    }, 
    {
        nombre: "The Velvet Underground (1969) - The Velvet Underground",
        imagen: "https://m.media-amazon.com/images/I/81wyM+As6LL._UF1000,1000_QL80_.jpg",
    }, 
    {
        nombre: "Siamese Dream (1993)- The Smashing Pumpkins",
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3a/dc/08/3adc08b0-e98c-b5dd-943e-a37c7ed06205/13UABIM03615.rgb.jpg/1200x1200bf-60.jpg",
    }, 
    {
        nombre: "Hot Rats (1969)- Frank Zappa",
        imagen: "https://m.media-amazon.com/images/I/51Bez-qABuL._UF894,1000_QL80_.jpg",
    },
    {
        nombre: "Double Nickels on the Dime (1984) - Minutemen",
        imagen: "https://m.media-amazon.com/images/I/71PBYqFqyDL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre:"Hellfire (2022) - Black Midi",
        imagen: "https://indierocks.b-cdn.net/wp-content/uploads/2022/07/Black-Midi_Hellfire-portada.jpg"
    },
    {
        nombre: "Master of Reality (1971) - Black Sabbath",
        imagen: "https://progrography.com/wp-content/uploads/2020/05/masterofreality.jpg"
    },    
];

module.exports = class Discos {
    constructor(disco_nuevo) {
        this.nombre = disco_nuevo.nombre || ":'(";
        this.imagen = disco_nuevo.imagen || "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg";
    }
    save() {
        discos.push(this);
    }
    static fetchAll() {
        return discos;
    }
}

