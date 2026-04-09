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


const traducciones = {
    es: {
        // Menú principal
        inicio: "Inicio",
        servicios: "Servicios",
        productos: "Productos",
        contactos: "Contactos",
        
        // Encabezados principales
        titulo_principal: "HUERTANET",
        ofertas: "Ofertas",
        bienvenido_titulo: "¡Bienvenido a la mejor página para ver productos!!",
        bienvenido_texto: "Bienvenido a HuertaNet, una página diseñada para ofrecer una amplia variedad de productos. Ofrecemos productos frescos y de alta calidad para todos los gustos. Contamos con una selección de frutas y verduras cuidadosamente elegidas, ideales para una alimentación saludable y llena de sabor. También preparamos jugos naturales al momento, refrescantes y llenos de energía, además de deliciosas hamburguesas elaboradas con ingredientes de calidad que destacan por su sabor único.",
        
        // Modo claro
        modo_claro: "Modo Claro",
        
        // Clima
        temperatura: "21°C",
        clima: "Parc. soleado",
        
        // Información
        informacion: "Información",
        envios_rapidos: "Envíos Rápidos",
        envios_texto: "Entrega en 24/48 horas",
        calidad_garantizada: "Calidad Garantizada",
        calidad_texto: "Productos frescos y seleccionados",
        ofertas_exclusivas: "Ofertas Exclusivas",
        ofertas_texto: "Descuentos para clientes",
        
        // Ofertas premium
        oferta_premium: "Oferta premium",
        global: "GLOBAL",
        pilsner: "Pilsner Urquell",
        granola: "GRANOLA",
        granola_100: "100% GRANOLA",
        
        // Productos destacados
        productos_destacados: "Productos Destacados",
        
        // Productos y precios
        producto_manzanas: "Manzanas",
        precio_manzanas: "500 GS.",
        producto_naranjas: "Naranjas",
        precio_naranjas: "700 GS.",
        producto_arandanos: "Arándanos",
        precio_arandanos: "400 GS.",
        producto_zarzamoras: "Zarzamoras",
        precio_zarzamoras: "900 GS.",
        producto_fresas: "Fresas",
        precio_fresas: "300 GS.",
        producto_bananas: "Bananas",
        precio_bananas: "600 GS.",
        producto_brocoli: "Brócoli",
        precio_brocoli: "1.000 GS.",
        producto_espinacas: "Espinacas",
        precio_espinacas: "1.200 GS.",
        
        // Botones
        agregar: "Agregar",
        
        // Footer - correo
        correo_electronico: "Correo electrónico",
        enviar: "Enviar",
        
        // Redes sociales
        redes_sociales: "Redes Sociales",
        tiktok: "TikTok",
        instagram: "Instagram",
        youtube: "YouTube",
        facebook: "Facebook",
        
        // Selector de idioma
        idioma: "Idioma",
        español: "Español de España",
        ingles: "Inglés USA",
        japones: "Japonés",
        ruso: "Ruso",
        
        // Más info
        mas_info: "Más Info",
        productos_premium: "Productos premium",
        lista_productos: "Lista de productos",
        precios: "Precios",
        descripcion: "Descripción",
        
        // Plataformas de comunicación
        plataforma_comunicacion: "Plataforma De Comunicación",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        discord: "Discord",
        messenger: "Messenger" 
    },

    en: {
        // Main menu
        inicio: "Home",
        servicios: "Services",
        productos: "Products",
        contactos: "Contact",
        
        // Main headers
        titulo_principal: "HUERTANET",
        ofertas: "Offers",
        bienvenido_titulo: "Welcome to the best page to see products!!",
        bienvenido_texto: "Welcome to HuertaNet, a page designed to offer a wide variety of products. We offer fresh and high-quality products for all tastes. We have a selection of carefully chosen fruits and vegetables, ideal for a healthy and flavorful diet. We also prepare fresh natural juices, refreshing and full of energy, as well as delicious hamburgers made with quality ingredients that stand out for their unique flavor.",
        
        // Light mode
        modo_claro: "Light Mode",
        
        // Weather
        temperatura: "21°C",
        clima: "Partly sunny",
        
        // Information
        informacion: "Information",
        envios_rapidos: "Fast Shipping",
        envios_texto: "Delivery in 24/48 hours",
        calidad_garantizada: "Guaranteed Quality",
        calidad_texto: "Fresh and selected products",
        ofertas_exclusivas: "Exclusive Offers",
        ofertas_texto: "Discounts for customers",
        
        // Premium offers
        oferta_premium: "Premium offer",
        global: "GLOBAL",
        pilsner: "Pilsner Urquell",
        granola: "GRANOLA",
        granola_100: "100% GRANOLA",
        
        // Featured products
        productos_destacados: "Featured Products",
        
        // Products and prices
        producto_manzanas: "Apples",
        precio_manzanas: "500 GS.",
        producto_naranjas: "Oranges",
        precio_naranjas: "700 GS.",
        producto_arandanos: "Blueberries",
        precio_arandanos: "400 GS.",
        producto_zarzamoras: "Blackberries",
        precio_zarzamoras: "900 GS.",
        producto_fresas: "Strawberries",
        precio_fresas: "300 GS.",
        producto_bananas: "Bananas",
        precio_bananas: "600 GS.",
        producto_brocoli: "Broccoli",
        precio_brocoli: "1,000 GS.",
        producto_espinacas: "Spinach",
        precio_espinacas: "1,200 GS.",
        
        // Buttons
        agregar: "Add",
        
        // Footer - email
        correo_electronico: "Email",
        enviar: "Send",
        
        // Social media
        redes_sociales: "Social Media",
        tiktok: "TikTok",
        instagram: "Instagram",
        youtube: "YouTube",
        facebook: "Facebook",
        
        // Language selector
        idioma: "Language",
        español: "Spanish Spain",
        ingles: "English USA",
        japones: "Japanese",
        ruso: "Russian",
        
        // More info
        mas_info: "More Info",
        productos_premium: "Premium products",
        lista_productos: "Product list",
        precios: "Prices",
        descripcion: "Description",
        
        // Communication platforms
        plataforma_comunicacion: "Communication Platform",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        discord: "Discord",
        messenger: "Messenger"
    },
    
    ja: {
        // メインメニュー
        inicio: "ホーム",
        servicios: "サービス",
        productos: "製品",
        contactos: "お問い合わせ",
        
        // メインヘッダー
        titulo_principal: "HUERTANET",
        ofertas: "オファー",
        bienvenido_titulo: "製品を見るのに最適なページへようこそ！！",
        bienvenido_texto: "HuertaNetへようこそ。多様な製品を提供するために設計されたページです。新鮮で高品質な製品をあらゆる好みに合わせて提供しています。健康的で風味豊かな食事に理想的な、厳選された果物や野菜を取り揃えています。また、さわやかでエネルギーに満ちた新鮮な天然ジュースや、ユニークな味わいが際立つ高品質の材料で作られた美味しいハンバーガーもその場で調理しています。",
        
        // ライトモード
        modo_claro: "ライトモード",
        
        // 天気
        temperatura: "21°C",
        clima: "一部晴れ",
        
        // 情報
        informacion: "情報",
        envios_rapidos: "迅速な配送",
        envios_texto: "24/48時間以内に配送",
        calidad_garantizada: "品質保証",
        calidad_texto: "新鮮で厳選された製品",
        ofertas_exclusivas: "限定オファー",
        ofertas_texto: "顧客向け割引",
        
        // プレミアムオファー
        oferta_premium: "プレミアムオファー",
        global: "グローバル",
        pilsner: "ピルスナー・ウルケル",
        granola: "グラノーラ",
        granola_100: "100% グラノーラ",
        
        // 注目の製品
        productos_destacados: "注目の製品",
        
        // 製品と価格
        producto_manzanas: "リンゴ",
        precio_manzanas: "500 GS.",
        producto_naranjas: "オレンジ",
        precio_naranjas: "700 GS.",
        producto_arandanos: "ブルーベリー",
        precio_arandanos: "400 GS.",
        producto_zarzamoras: "ブラックベリー",
        precio_zarzamoras: "900 GS.",
        producto_fresas: "イチゴ",
        precio_fresas: "300 GS.",
        producto_bananas: "バナナ",
        precio_bananas: "600 GS.",
        producto_brocoli: "ブロッコリー",
        precio_brocoli: "1,000 GS.",
        producto_espinacas: "ホウレンソウ",
        precio_espinacas: "1,200 GS.",
        
        // ボタン
        agregar: "追加",
        
        // フッター - メール
        correo_electronico: "メールアドレス",
        enviar: "送信",
        
        // ソーシャルメディア
        redes_sociales: "ソーシャルメディア",
        tiktok: "TikTok",
        instagram: "Instagram",
        youtube: "YouTube",
        facebook: "Facebook",
        
        // 言語セレクター
        idioma: "言語",
        español: "スペイン語（スペイン）",
        ingles: "英語（アメリカ）",
        japones: "日本語",
        ruso: "ロシア語",
        
        // 詳細情報
        mas_info: "詳細情報",
        productos_premium: "プレミアム製品",
        lista_productos: "製品リスト",
        precios: "価格",
        descripcion: "説明",
        
        // コミュニケーションプラットフォーム
        plataforma_comunicacion: "コミュニケーションプラットフォーム",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        discord: "Discord",
        messenger: "Messenger"
    },
    
    ru: {
        // Главное меню
        inicio: "Главная",
        servicios: "Услуги",
        productos: "Товары",
        contactos: "Контакты",
        
        // Главные заголовки
        titulo_principal: "HUERTANET",
        ofertas: "Предложения",
        bienvenido_titulo: "Добро пожаловать на лучшую страницу для просмотра товаров!!",
        bienvenido_texto: "Добро пожаловать в HuertaNet - страницу, созданную для широкого ассортимента товаров. Мы предлагаем свежие и качественные продукты на любой вкус. У нас есть выбор тщательно подобранных фруктов и овощей, идеально подходящих для здорового и вкусного питания. Мы также готовим свежие натуральные соки, освежающие и полные энергии, а также вкусные гамбургеры из качественных ингредиентов, отличающиеся уникальным вкусом.",
        
        // Светлый режим
        modo_claro: "Светлый режим",
        
        // Погода
        temperatura: "21°C",
        clima: "Переменная облачность",
        
        // Информация
        informacion: "Информация",
        envios_rapidos: "Быстрая доставка",
        envios_texto: "Доставка за 24/48 часов",
        calidad_garantizada: "Гарантированное качество",
        calidad_texto: "Свежие и отборные продукты",
        ofertas_exclusivas: "Эксклюзивные предложения",
        ofertas_texto: "Скидки для клиентов",
        
        // Премиум предложения
        oferta_premium: "Премиум предложение",
        global: "ГЛОБАЛЬНЫЙ",
        pilsner: "Пилснер Уркелл",
        granola: "ГРАНОЛА",
        granola_100: "100% ГРАНОЛА",
        
        // Рекомендуемые товары
        productos_destacados: "Рекомендуемые товары",
        
        // Товары и цены
        producto_manzanas: "Яблоки",
        precio_manzanas: "500 GS.",
        producto_naranjas: "Апельсины",
        precio_naranjas: "700 GS.",
        producto_arandanos: "Голубика",
        precio_arandanos: "400 GS.",
        producto_zarzamoras: "Ежевика",
        precio_zarzamoras: "900 GS.",
        producto_fresas: "Клубника",
        precio_fresas: "300 GS.",
        producto_bananas: "Бананы",
        precio_bananas: "600 GS.",
        producto_brocoli: "Брокколи",
        precio_brocoli: "1,000 GS.",
        producto_espinacas: "Шпинат",
        precio_espinacas: "1,200 GS.",
        
        // Кнопки
        agregar: "Добавить",
        
        // Футер - электронная почта
        correo_electronico: "Электронная почта",
        enviar: "Отправить",
        
        // Социальные сети
        redes_sociales: "Социальные сети",
        tiktok: "TikTok",
        instagram: "Instagram",
        youtube: "YouTube",
        facebook: "Facebook",
        
        // Выбор языка
        idioma: "Язык",
        español: "Испанский (Испания)",
        ingles: "Английский (США)",
        japones: "Японский",
        ruso: "Русский",
        
        // Дополнительная информация
        mas_info: "Подробнее",
        productos_premium: "Премиум товары",
        lista_productos: "Список товаров",
        precios: "Цены",
        descripcion: "Описание",
        
        // Платформы связи
        plataforma_comunicacion: "Платформа связи",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        discord: "Discord",
        messenger: "Messenger"
    }
};

// Función principal para cambiar el idioma
function cambiarIdioma(idioma) {
    // Verificar si el idioma existe
    if (!traducciones[idioma]) {
        console.error(`Idioma '${idioma}' no encontrado`);
        return;
    }
    
    // Guardar el idioma seleccionado
    localStorage.setItem('huertanet_idioma', idioma);
    
    // Cambiar el atributo lang del HTML
    document.documentElement.lang = idioma;
    
    // Obtener todos los elementos con atributo data-i18n
    const elementos = document.querySelectorAll('[data-i18n]');
    let elementosActualizados = 0;
    
    elementos.forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        const traduccion = traducciones[idioma][clave];
        
        if (traduccion) {
            // Si el elemento es un input o textarea, cambiar value
            if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA') {
                if (elemento.getAttribute('type') !== 'submit' && elemento.getAttribute('type') !== 'button') {
                    elemento.placeholder = traduccion;
                } else {
                    elemento.value = traduccion;
                }
            } 
            // Si es un botón normal
            else if (elemento.tagName === 'BUTTON') {
                elemento.textContent = traduccion;
            }
            // Para cualquier otro elemento
            else {
                elemento.textContent = traduccion;
            }
            elementosActualizados++;
        } else {
            console.warn(`Traducción no encontrada para clave: '${clave}' en idioma: ${idioma}`);
        }
    });
    
    console.log(`Idioma cambiado a: ${idioma} (${elementosActualizados} elementos actualizados)`);
    
    // Disparar evento personalizado para notificar que el idioma cambió
    const evento = new CustomEvent('idiomaCambiado', { detail: { idioma: idioma } });
    document.dispatchEvent(evento);
}

// Inicializar los selectores de idioma
function inicializarSelectoresIdioma() {
    // Buscar elementos que tengan el atributo data-idioma
    const opcionesIdioma = document.querySelectorAll('[data-idioma]');
    
    if (opcionesIdioma.length === 0) {
        console.warn('No se encontraron elementos con data-idioma');
    }
    
    opcionesIdioma.forEach(opcion => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            const idioma = opcion.getAttribute('data-idioma');
            if (idioma) {
                cambiarIdioma(idioma);
            }
        });
    });
}

// Cargar el idioma guardado al iniciar
function cargarIdiomaGuardado() {
    const idiomaGuardado = localStorage.getItem('huertanet_idioma');
    const idiomaValido = idiomaGuardado && traducciones[idiomaGuardado];
    
    if (idiomaValido) {
        cambiarIdioma(idiomaGuardado);
    } else {
        // Idioma por defecto: español
        cambiarIdioma('es');
    }
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarSelectoresIdioma();
    cargarIdiomaGuardado();
})


// JavaScript para tu footer con enlaces de redes sociales
const TIKTOK_URL = "https://www.tiktok.com/@ldddz0020/video/7594424039146409247?is_from_webapp=1&sender_device=pc&web_id=7626536269041124880";
const INSTAGRAM_URL = "https://www.instagram.com/p/DWPT7l5k2Gh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const YOUTUBE_URL = "https://www.youtube.com";
const FACEBOOK_URL = "https://www.facebook.com";

// Función para abrir enlaces
function openLink(url, event) {
    if (url) {
        event.preventDefault(); // Evita que el href="#" suba la página
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Buscar todos los enlaces dentro del footer
    const footerLinks = document.querySelectorAll('.footer .link ul li a');
    
    footerLinks.forEach(link => {
        const texto = link.textContent.trim().toLowerCase();
        
        if (texto === 'tiktok') {
            link.addEventListener('click', (e) => openLink(TIKTOK_URL, e));
        }
        else if (texto === 'instagram') {
            link.addEventListener('click', (e) => openLink(INSTAGRAM_URL, e));
        }
        else if (texto === 'youtube') {
            link.addEventListener('click', (e) => openLink(YOUTUBE_URL, e));
        }
        else if (texto === 'facebook') {
            link.addEventListener('click', (e) => openLink(FACEBOOK_URL, e));
        }
    });
});