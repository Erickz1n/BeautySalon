// DOM - Document Object Model


// ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER E X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// mudar o header da página quando der scroll

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if(this.window.scrollY >= navHeight) {
        // scroll é maior que a altura do header

        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

// Testminoials swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

/* ScrollReveal: mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '38px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    `,
    { interval: 100 }
)