/*
let productos = [
    {
        nombre: "Sabritas Adobadas",
        imagen: "https://supermode.com.mx/cdn/shop/products/PAPASABRITASADOBADAS64GR.jpg?v=1623178426"
    },
    {
        nombre: "Takis Fuego",
        imagen: "https://m.media-amazon.com/images/I/61OdAGzkCZL._AC_UF894,1000_QL80_.jpg"
    },
    {
        nombre: "Coca-Cola 600ml",
        imagen: "https://panoli.mx/cdn/shop/products/RE0015_761x.jpg?v=1600970250"
    },
    {
        nombre: "Dr Pepper 600ml",
        imagen: "https://gbrisabebidas.com/wp-content/uploads/2020/11/10000151.jpg"
    },
    {
        nombre: "Pepsi 600ml",
        imagen: "https://supermode.com.mx/cdn/shop/products/0750103131001L.jpg?v=1616004597"
    },
    {
        nombre: "Sprite 600ml",
        imagen: "https://panoli.mx/cdn/shop/products/12959_2_1000x.jpg?v=1617824909"
    },
    {
        nombre: "Fanta 600ml",
        imagen: "https://chedrauimx.vtexassets.com/arquivos/ids/18248425/7501055303779_00.jpg?v=638288814374530000"
    },
    {
        nombre: "Coca-Cola Sin Azúcar 600ml",
        imagen: "https://supermeat.mx/cdn/shop/products/39047040a11831e1d322d0cb54325a6e.jpg?v=1681238999"
    }
];
*/

const db = require("../util/database");

module.exports = class Productos {
  constructor(producto_nuevo) {
    this.nombre = producto_nuevo.nombre || "No me han venido a surtir bro :'(";
    this.imagen =
      producto_nuevo.imagen ||
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg";
  }
  save() {
    return db.execute("INSERT INTO productos(nombre, imagen) VALUES (?, ?)", [
      this.nombre,
      this.imagen,
    ]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM productos");
  }

  static fetch(id) {
    if (id) {
      return db.execute("SELECT * FROM productos WHERE id = ?", [id]);
    } else {
      return this.fetchAll();
    }
  }
};
