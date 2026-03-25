// Variables
const carrito = document.getElementById('carrito');
const contenedorProductos = document.getElementById('lista-1'); // antes 'elemento1'
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Cargar event listeners
cargarEventListeners();

function cargarEventListeners() {
    contenedorProductos.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Función para comprar elemento
function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        // Usamos closest para obtener el contenedor del producto
        const producto = e.target.closest('.product');
        leerDatosProducto(producto);
    }
}

// Leer datos del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoProducto);
}

// Insertar producto en el carrito
function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width="100" alt="${producto.titulo}">
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar" data-id="${producto.id}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
}

// Eliminar elemento del carrito
function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        // Eliminar la fila completa
        e.target.closest('tr').remove();
    }
}

// Vaciar todo el carrito
function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    return false;
}