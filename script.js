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


// ========== MODO OSCURO CON CORRECCIONES ==========
document.addEventListener('DOMContentLoaded', function() {
    const botonModoOscuro = document.getElementById('modoOscuroBtn');
    
    if (botonModoOscuro) {
        function toggleModoOscuro() {
            document.body.classList.toggle('dark-mode');
            
            const estaOscuro = document.body.classList.contains('dark-mode');
            const icono = botonModoOscuro.querySelector('.icono');
            const texto = botonModoOscuro.querySelector('.texto');
            
            if (estaOscuro) {
                icono.textContent = '☀️';
                texto.textContent = 'Modo Claro';
                localStorage.setItem('tema', 'oscuro');
            } else {
                icono.textContent = '🌙';
                texto.textContent = 'Modo Oscuro';
                localStorage.setItem('tema', 'claro');
            }
        }
        
        botonModoOscuro.addEventListener('click', toggleModoOscuro);
        
        // Cargar tema guardado
        const temaGuardado = localStorage.getItem('tema');
        if (temaGuardado === 'oscuro') {
            document.body.classList.add('dark-mode');
            const icono = botonModoOscuro.querySelector('.icono');
            const texto = botonModoOscuro.querySelector('.texto');
            icono.textContent = '☀️';
            texto.textContent = 'Modo Claro';
        }
    }
});

// Estilos corregidos para modo oscuro
const estilosModoOscuro = `
    /* Fondo general oscuro */
    body.dark-mode {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
    }
    
    /* ===== MENÚ DE NAVEGACIÓN (Inicio, Servicios, Productos, Contactos) ===== */
    body.dark-mode .menu_navbar ul li a,
    body.dark-mode nav a,
    body.dark-mode header nav a,
    body.dark-mode .menu ul li a,
    body.dark-mode .navbar a,
    body.dark-mode [class*="menu"] a {
        color: #ffffff !important;
    }
    
    body.dark-mode .menu_navbar ul li a:hover,
    body.dark-mode nav a:hover {
        color: #8dc84b !important;
    }
    
    /* ===== BOTONES "AGREGAR" - FONDO BLANCO Y TEXTO NEGRO ===== */
    body.dark-mode .btn-agregar,
    body.dark-mode button.btn-agregar,
    body.dark-mode .producto-card button,
    body.dark-mode [class*="agregar"] {
        background-color: #ffffff !important;
        color: #000000 !important;
        border: 1px solid #cccccc !important;
    }
    
    body.dark-mode .btn-agregar:hover,
    body.dark-mode button.btn-agregar:hover {
        background-color: #f0f0f0 !important;
        color: #000000 !important;
    }
    
    /* ===== REDES SOCIALES, IDIOMA, MÁS INFO, PLATAFORMA ===== */
    /* Cambiar texto a NEGRO y fondo gris claro */
    body.dark-mode .social-list,
    body.dark-mode .lang-list,
    body.dark-mode .more-info,
    body.dark-mode .plataforma,
    body.dark-mode [class*="social"],
    body.dark-mode [class*="idioma"],
    body.dark-mode [class*="comunicacion"],
    body.dark-mode .redes-sociales,
    body.dark-mode .idioma,
    body.dark-mode .mas-info {
        color: #000000 !important;
        background-color: #d3d3d3 !important;
        padding: 10px !important;
        border-radius: 8px !important;
    }
    
    /* Los textos dentro de esas secciones en NEGRO */
    body.dark-mode .social-list strong,
    body.dark-mode .lang-list strong,
    body.dark-mode .more-info strong,
    body.dark-mode .plataforma strong,
    body.dark-mode .social-list span,
    body.dark-mode .lang-list span,
    body.dark-mode .more-info span,
    body.dark-mode .social-list div,
    body.dark-mode .lang-list div,
    body.dark-mode .more-info div,
    body.dark-mode .social-list p,
    body.dark-mode .lang-list p,
    body.dark-mode .more-info p {
        color: #000000 !important;
    }
    
    /* Los links individuales en NEGRO */
    body.dark-mode .social-list a,
    body.dark-mode .lang-list a,
    body.dark-mode .more-info a,
    body.dark-mode .plataforma a {
        color: #000000 !important;
        text-decoration: none !important;
    }
    
    body.dark-mode .social-list a:hover,
    body.dark-mode .lang-list a:hover,
    body.dark-mode .more-info a:hover {
        color: #333333 !important;
    }
    
    /* ===== TARJETAS DE INFORMACIÓN (Envíos Rápidos, Calidad, Ofertas) ===== */
    body.dark-mode .info-card,
    body.dark-mode .card,
    body.dark-mode [class*="info"] div,
    body.dark-mode .informacion div,
    body.dark-mode .ofertas div {
        background-color: #2a2a2a !important;
        color: #ffffff !important;
    }
    
    body.dark-mode .info-card h3,
    body.dark-mode .card h3,
    body.dark-mode .info-card p,
    body.dark-mode .card p {
        color: #ffffff !important;
    }
    
    /* ===== ELEMENTOS VERDES que deben volverse GRIS ===== */
    body.dark-mode .logo,
    body.dark-mode [style*="color: #8dc84b"],
    body.dark-mode [class*="verde"],
    body.dark-mode .precio {
        color: #808080 !important;
    }
    
    /* ===== FONDOS DE SECCIONES ===== */
    body.dark-mode header,
    body.dark-mode .menu,
    body.dark-mode .hero,
    body.dark-mode .header-content,
    body.dark-mode .header-txt,
    body.dark-mode .info-panel {
        background-color: #1e1e1e !important;
    }
    
    /* ===== TEXTO GENERAL ===== */
    body.dark-mode h1,
    body.dark-mode h2,
    body.dark-mode h3,
    body.dark-mode p,
    body.dark-mode span:not(.icono):not(.texto) {
        color: #e0e0e0 !important;
    }
    
    /* ===== BOTONES Y ENLACES GENERALES ===== */
    body.dark-mode button:not(.btn-agregar):not(.btn-modo-oscuro) {
        background-color: #3a6b3a !important;
        color: white !important;
    }
    
    body.dark-mode input,
    body.dark-mode textarea {
        background-color: #2a2a2a !important;
        color: white !important;
        border-color: #555 !important;
    }
    
    /* ===== PRODUCTOS ===== */
    body.dark-mode .producto-card {
        background-color: #2c2c2c !important;
        color: #f0f0f0 !important;
    }
    
    body.dark-mode .producto-card h3 {
        color: #ffffff !important;
    }
    
    /* ===== CLIMA / TEMPERATURA ===== */
    body.dark-mode .clima,
    body.dark-mode [class*="temperatura"] {
        background-color: #3f4a3a !important;
        color: #dddddd !important;
    }
    
    /* ===== FOOTER ===== */
    body.dark-mode footer {
        border-top-color: #3e4d3a !important;
        color: #bbbbbb !important;
    }
    
    /* ===== CORREO ELECTRÓNICO ===== */
    body.dark-mode input[type="email"] {
        background-color: #ffffff !important;
        color: #000000 !important;
    }
    
    body.dark-mode button[type="submit"],
    body.dark-mode .newsletter button {
        background-color: #808080 !important;
        color: #ffffff !important;
    }
`;

// Aplicar los estilos al documento
const styleSheet = document.createElement("style");
styleSheet.textContent = estilosModoOscuro;
document.head.appendChild(styleSheet);