const db = require("../util/database");

module.exports = class Peliculas {
  constructor(pelicula_nuevo) {
    this.nombre = pelicula_nuevo.nombre || ":'(";
    this.imagen = pelicula_nuevo.imagen;
  }
  save() {
    return db.execute("INSERT INTO peliculas(nombre, imagen) VALUES (?, ?)", [
      this.nombre,
      this.imagen,
    ]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM peliculas");
  }

  static fetch(id) {
    if (id) {
      return db.execute("SELECT * FROM peliculas WHERE id = ?", [id]);
    } else {
      return this.fetchAll();
    }
  }
};
