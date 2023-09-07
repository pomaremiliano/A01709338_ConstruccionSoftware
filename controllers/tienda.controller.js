const model = require('../models/tienda.model');
const Productos= require('../models/tienda.model');


exports.get_add = (request, response, next) => {

    response.render('labs_list/tienda.ejs');
};
exports.post_add = (request, response, next) => {
    const producto = new Productos({
        nombre: request.body.nombre,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg",
    });
    producto.save();
    response.redirect('tienda');
}


exports.get_list = (request, response, next) => {
    response.render('labs_list/tienda.ejs', {
        productos: Productos.fetchAll()
    });
}


/*
let seleccion1 = 0;

boton_seleccionar1= document.getElementById("boton_seleccion1");
boton_seleccionar1.onclick= () => {
    seleccion1 ++;
    boton_seleccionar1.textContent=`Agregar producto (${seleccion1})`;
}

document.getElementById("boton_papas").onclick = () => {
    
    const precio = 30;
    const iva = precio * 1.16;
    document.getElementById("boton_papas").textContent = `Precio unitario= $ ${precio}.`;
    document.getElementById("precio_papas").textContent = `Precio con IVA: $ ${iva}.`;
    
    
    
}
let seleccion2 = 0;
boton_seleccionar2= document.getElementById("boton_seleccion2");
boton_seleccionar2.onclick= () => {
    seleccion2 ++;
    boton_seleccionar2.textContent=`Agregar producto (${seleccion2})`;
}

document.getElementById("boton_refresco").onclick= () => {
    const precio = 16;
    const iva = precio * 1.16;
    document.getElementById("boton_refresco").textContent = `Precio unitario= $ ${precio}.`;
    document.getElementById("precio_refrescos").textContent = `Precio con IVA: $ ${iva}.`;
}


*/