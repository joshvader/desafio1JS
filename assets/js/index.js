// Establecer las variables de precio base y cantidad inicial
let precio = 400000;
let cantidad = 0;

// Obtener elementos del DOM por medio de las clases
const cantidadSpan = document.querySelector(".cantidad");
const precioSpan = document.querySelector(".precio-inicial");
const totalSpan = document.querySelector(".valor-total");

// Actualizar el precio base en el HTML
precioSpan.textContent = precio;



// Función para actualizar la cantidad y el total a pagar
function actualizarCantidadYTotal() {
    cantidadSpan.textContent = cantidad;
    totalSpan.textContent = cantidad * precio;
}

// Función para aumentar la cantidad
function mas() {
    cantidad++;
    actualizarCantidadYTotal();
}

// Función para disminuir la cantidad
function menos() {
    if (cantidad > 0) {
    cantidad--;
    actualizarCantidadYTotal();
   } 
}



