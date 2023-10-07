const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(nuevo_usuario) {
    this.nombre = nuevo_usuario.nombre;
    this.username = nuevo_usuario.username;
    this.password = nuevo_usuario.password;
  }

  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((password_cifrado) => {
        return db.execute(
          "INSERT INTO users(username, password, nombre) VALUES (?, ?, ?)",
          [this.username, password_cifrado, this.nombre]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static fetchOne(username) {
    return db.execute("SELECT * FROM users WHERE username = ?", [username]);
  }

  static getPrivilegios(id_usuario) {
    return db.execute(
      `SELECT p.nombre 
            FROM users u, usuario_rol ur, roles r, rol_privilegio rp, 
                privilegios p
            WHERE u.id = ? AND u.id = ur.id_usuario AND ur.id_rol = r.id
                AND rp.id_rol = r.id AND rp.id_privilegio = p.id`,
      [id_usuario]
    );
  }
};
