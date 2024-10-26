// Inicialización de un nuevo carrusel Swiper
const swiper = new Swiper('.slider-wrapper', {
    
    // Habilita el bucle infinito, el carrusel volverá al inicio después de la última diapositiva
    loop: true,
    
    // Muestra el cursor de "manita" para indicar que se puede arrastrar el carrusel
    grabCursor: true,

    // Define el espacio entre cada diapositiva (en píxeles)
    spaceBetween: 30,

    // Paginación del carrusel (los puntos de navegación)
    pagination: {
        // Selecciona el elemento donde se mostrarán los puntos de paginación
        el: '.swiper-pagination',
        
        // Permite que los puntos sean clicables para navegar entre las diapositivas
        clickable: true,
        
        // Activa las balas dinámicas, que cambian de tamaño según la diapositiva activa
        dynamicBullets: true,
    },

    // Flechas de navegación (anterior y siguiente)
    navigation: {
        // Elemento para la flecha de "siguiente"
        nextEl: '.swiper-button-next',
        
        // Elemento para la flecha de "anterior"
        prevEl: '.swiper-button-prev',
    },

    // Puntos de quiebre para hacer el carrusel responsivo
    breakpoints: {
        // En pantallas de ancho 0px o más, se muestra 1 diapositiva por vista
        0: {
            slidesPerView: 1
        },
        // En pantallas de ancho 768px o más, se sigue mostrando 1 diapositiva por vista
        768: {
            slidesPerView: 1
        },
        // En pantallas de ancho 1024px o más, también se muestra 1 diapositiva por vista
        1024: {
            slidesPerView: 1
        },
    }
});
