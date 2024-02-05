Accaunt = document.querySelector(".Accaunt");
Accaunt.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Navbar Pages dropdown

document.querySelector('#pages').addEventListener('click', function (event) {
    event.preventDefault();
    let dropdown = this.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.toggle('show');
});

// Navbar Pages dropdown active onclick color

document.querySelectorAll('.nav-item a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-item a.active').forEach(function (activeLink) {
            activeLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});
// Header carusel

$('.hero-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,

})

//Sport Drama Famil Romance active deactive.page kecid etmek ucun active edir.

$(document).ready(function () {
    $('ul > li').click(function () {

        let cat = $(this).data("category");
        let findedImages = $('.image').hasClass(`${cat}`)

        if (findedImages == true) {

            $('.image').removeClass("active");
            $(`.${cat}`).addClass('active');
            $(`.${cat}`).css({ 'transition': '0.5s' });
        }

    });
});


//  P0PULAR MOVIES

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,

    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        },
    }
});

//  TOP 10 BOX OFFICE Carusel

$(".boxoffice").owlCarousel({
    margin: 20,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        },
    }
});

//  TRENDING NOW Carusel

$(".trendingNow").owlCarousel({
    margin: 20,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        },
    }
});

//  SUGGESTED FOR YOU Carusel

$(".suggestedFor").owlCarousel({
    margin: 20,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        },
    }
});
//  TOP 10 BOX OFFICE

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// JS code to open and close the modal Sign In

let modalsignin = document.getElementsByClassName("modal-overlay")[0];
let btnsignin = document.getElementById("open-modal");
let spansignin = document.getElementsByClassName("close-button")[0];

btnsignin.onclick = function () {
    modalsignin.style.display = "block";
}

spansignin.onclick = function () {
    modalsignin.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalsignin) {
        modalsignin.style.display = "none";
    }
}

// JS code to open and close the modal Sign Up

let modal = document.getElementsByClassName("modal-overlay-sigup")[0];
let btn = document.getElementById("open-modal-signup");
let span = document.getElementsByClassName("close-button-sigup")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//let sekilin uzerine maus geldikde sekilin olcusunu deyismek ucun  

$(document).ready(function () {
    $('.img-div div').hover(function () {

        $(this).children().css({ 'transform': 'scale(1.2)', 'transition': 'transform 0.5s', 'z-index': '1' });

    }, function () {
        $(this).children().css({ 'transform': 'scale(1)', 'z-index': '0' });
    });

    $('.img-div > div').mouseover(function () {
        $(this).addClass("active");
    });

    $('.img-div > div').mouseleave(function () {
        $(this).removeClass("active");
    });
});

