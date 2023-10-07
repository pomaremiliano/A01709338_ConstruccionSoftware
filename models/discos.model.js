
const db = require("../util/database");


module.exports = class Discos {
  constructor(disco_nuevo) {
    this.nombre = disco_nuevo.nombre || ":'(";
    this.imagend =
      disco_nuevo.imagend;
  }
  save() {
    return db.execute(
      "INSERT INTO discos(nombre, imagen) VALUES (?, ?)",
      [this.nombre, this.imagend]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM discos");
  }

  static fetch(id) {
    if (id) {
      return db.execute("SELECT * FROM discos WHERE id = ?", [id]);
    } else {
      return this.fetchAll();
    }
  }

  static delete(id) {
    return db.execute("DELETE FROM discos WHERE id = ?", [id]);
  }
};



