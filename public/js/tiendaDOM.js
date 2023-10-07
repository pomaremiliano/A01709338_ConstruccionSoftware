


boton_seleccion= document.getElementById("boton_seleccion");
boton_seleccion.onclick= () => {
    let seleccion = 0;
    seleccion ++;
    boton_seleccion.textContent=`Agregar producto (${seleccion})`;
}

document.getElementById("boton_producto").onclick = () => {
    
    const precio = 30;
    const iva = precio * 1.16;
    document.getElementById("boton_producto").textContent = `Precio unitario= $ ${precio}.`;
    document.getElementById("precio_producto").textContent = `Precio con IVA: $ ${iva}.`;
    
}

