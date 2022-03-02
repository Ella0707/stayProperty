
// появление дополнителньой информации в текстовом блоке карточек с недвижимостью на Главной странице
$(document).ready(function () {
    $('.real-estate__text-block').on('mouseenter', function () {
        $(this).parent().toggleClass('active');
    });
    $('.real-estate__text-block').on('mouseleave', function () {
        $(this).parent().toggleClass('active');
    });
});



// функция для кастомных селектов
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('active');
    }
};

select();


// слайдеры
const objectSwiper = new Swiper('.objects-box__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    pagination: {
        el: ".objects-box__pagination",
        bullets: true,
        clickable: true,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});


const supportSwiper = new Swiper('.support__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    pagination: {
        el: ".support__slider-pagination",
        bullets: true,
        clickable: true,
    },

    navigation: {
        prevEl: '.support__slider-prev',
        nextEl: '.support__slider-next',
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});


const realSwiper = new Swiper('.real-estate__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    pagination: {
        el: ".real-estate__pagination",
        bullets: true,
        clickable: true,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});


const rewiewsSwiper = new Swiper('.rewiews__slider', {
    slidesPerView: 3,
    spaceBetween: 42,
    speed: 800,
    navigation: {
        prevEl: '.rewiews__slider-prev',
        nextEl: '.rewiews__slider-next',
    },

    pagination: {
        el: ".rewiews__pagination",
        bullets: true,
        clickable: true,
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true
    // },

    on: {
        init: number,
        slideChange: number
    },
});

function number() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    $('.rewiews__numbers').text(currentSlide);
}


const bannerSwiper = new Swiper('.banner__slider', {
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 800,
    navigation: {
        prevEl: '.swiper__arrow-prev',
        nextEl: '.swiper__arrow-next',
    },

    pagination: {
        el: ".swiper__pagination",
        bullets: true,
        clickable: true,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //         // shadow: true,
    //         translate: ["-20%", 0, -1],
    //       },
    //       next: {
    //         translate: ["100%", 0, 0],
    //       },
    // },

    on: {
        init: sliderNumber,
        slideChange: sliderNumber
    },
});


function sliderNumber() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    $('.slider__number').text(currentSlide);
}


// function show(anything) {
//     document.querySelector(".textBox").value = anything;
// }

// let dropdown = document.querySelector('.dropdown');
// dropdown.onclick = function () {
//     dropdown.classList.toggle('active');
// }




