let papas = [
    {
        nombre: "Sabritas Adobadas",
        imagen: "https://supermode.com.mx/cdn/shop/products/PAPASABRITASADOBADAS64GR.jpg?v=1623178426"
    },
    {
        nombre: "Takis Fuego",
        imagen: "https://m.media-amazon.com/images/I/61OdAGzkCZL._AC_UF894,1000_QL80_.jpg"
    },
];

let refrescos = [
    {
        nombre: "Coca-Cola 600ml",
        imagen: "https://panoli.mx/cdn/shop/products/RE0015_761x.jpg?v=1600970250"
    },
    {
        nombre: "Dr Pepper 600ml",
        imagen: "https://gbrisabebidas.com/wp-content/uploads/2020/11/10000151.jpg"
    },
];


module.exports = class Producto {
    constructor(nproducto) {
        this.nombre = nproducto.nombre || "No me han venido a surtir bro :'(";
        this.imagen = nproducto.imagen || "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg";
    }
    save() {
        refrescos.push(this);
        papas.push(this);
    }
    static fetchAll() {
        return refrescos,papas;
    }
}