document.addEventListener('DOMContentLoaded', () => {
        const elementosCarousel = document.querySelectorAll('.carousel')
        console.log(elementosCarousel)
        M.Carousel.init(elementosCarousel, {
            duration: 150,
            dist: 0,
            shift: 5,
            padding: 7,
            numVisible: 5
        });
    })

