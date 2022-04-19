
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

// мобильное меню
$('.header__burger-btn').on('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('lock');
    $('.header__burger-btn').toggleClass("active");
    $('.header__menu-mobile').toggleClass("active");
});

// появление дополнителньой информации в текстовом блоке карточек с недвижимостью на Главной странице
$(document).ready(function () {
    $('.real-estate__text-block').on('mouseenter', function () {
        $(this).parent().toggleClass('active');
    });
    $('.real-estate__text-block').on('mouseleave', function () {
        $(this).parent().toggleClass('active');
    });
});

// кнопки
$(".real-estate__button-top").click(function (e) {
    e.preventDefault();
    $(".real-estate__button-top").removeClass('active');
    $(this).addClass('active');
})

$(".real-estate__button-bottom").click(function (e) {
    e.preventDefault();
    $(".real-estate__button-bottom").removeClass('active');
    $(this).addClass('active');
})

$(".objects-box__like").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
})

$(".real-estate__top-sorting-item").click(function (e) {
    e.preventDefault();
    $(".real-estate__top-sorting-item").removeClass('active');
    $(this).addClass('active');
})

$(".real-estate__view-btn").click(function (e) {
    e.preventDefault();
    $(".real-estate__view-btn").removeClass('active');
    $(this).addClass('active');
})

$(".real-estate__like").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
})


//   переключение класса в вакансиях
$(".vacancies__item-name").click(function (e) {
    e.preventDefault();
    $(".vacancies__item-name").removeClass('active');
    $(this).addClass('active');
})

//   переключение класса на странице "наша команда"
$(".command__lacation-item").click(function (e) {
    e.preventDefault();
    $(".command__lacation-item").removeClass('active');
    $(this).addClass('active');
})


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

const bigBoxSwiper = new Swiper('.real-estate__big-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    pagination: {
        el: ".real-estate__pagination-big",
        bullets: true,
        clickable: true,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});


const liveSwiper = new Swiper(".live__slider", {
    spaceBetween: 38,

    grid: {
        rows: 4,
        fill: 'row'
    },

    navigation: {
        prevEl: '.live__slider-prev',
        nextEl: '.live__slider-next',
    },

    pagination: {
        el: ".pagination-custom",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
    },

    breakpoints: {

        769: {
            slidesPerView: 4,
            spaceBetween: 37,

            grid: {
                rows: 1,
            },
        }
    }
});

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

    on: {
        init: sliderCounter,
        slideChange: sliderCounter
    },
});


function sliderCounter() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    $('.slider__number').text(currentSlide);
}


const videoSwiper = new Swiper('.blog-slider', {
    spaceBetween: 39,
    speed: 800,

    grid: {
        rows: 2,
        fill: 'row'
    },


    navigation: {
        prevEl: '.blog__slider-prev',
        nextEl: '.blog__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 2,
            spaceBetween: 39,

            grid: {
                rows: 1,
            },
        }
    },
});

const subscribeSwiper = new Swiper('.subscribe__slider', {
    slidesPerView: 1.15,
    spaceBetween: 30,
    speed: 800,

    navigation: {
        prevEl: '.subscribe__slider-prev',
        nextEl: '.subscribe__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 3.5,
            spaceBetween: 18,
        }
    },
});



const articleSwiper = new Swiper('.articles__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,

    navigation: {
        prevEl: '.articles__slider-prev',
        nextEl: '.articles__slider-next',
    },
});




const newsSwiper = new Swiper('.articles__box-photo', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    navigation: {
        prevEl: '.articles__prev',
        nextEl: '.articles__next',
    },

    pagination: {
        el: ".articles__box-pagination",
        bullets: true,
        clickable: true,
    },
});

const staffSwiper = new Swiper('.staff__slider', {
    spaceBetween: 37,
    speed: 800,

    grid: {
        rows: 3,
        fill: 'row'
    },
    

    navigation: {
        prevEl: '.staff__slider-prev',
        nextEl: '.staff__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 3,
            spaceBetween: 39,

            grid: {
                rows: 1,
            },
        }
    },
});


const catalogSwiper = new Swiper('.catalog__content', {
    spaceBetween: 37,
    // direction: "vertical",

    grid: {
        rows: 4,
        fill: 'row'
      },


    navigation: {
        prevEl: '.catalog__slider-prev',
        nextEl: '.catalog__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 4,
            spaceBetween: 37,

            grid: {
                rows: 1,
              },
        }
    }
});


const videoReviewSwiper = new Swiper('.review-video__slider', {
    spaceBetween: 37,
    speed: 800,

    grid: {
        rows: 3,
        fill: 'row'
    },

    navigation: {
        prevEl: '.review-video__slider-prev',
        nextEl: '.review-video__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 3,
            spaceBetween: 37,

            grid: {
                rows: 1,
            },
        }
    }
});


// счетчик страниц слайдов в слайдере
var totalSlides = 4;
const slidesPerView = 6
const $counter = document.querySelector(".counter")
const photoReviewSwiper = new Swiper('.photo-review__slider', {
    grid: {
        rows: 3,
        fill: 'row'
    },
    spaceBetween: 25,
    speed: 800,
    navigation: {
        prevEl: '.photo-review__slider-prev',
        nextEl: '.photo-review__slider-next',
    },

    pagination: {
        el: ".photo-review__slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
    },

    breakpoints: {

        769: {
            slidesPerView: 3,
            spaceBetween: 25,

            grid: {
                rows: 2,
                fill: 'row'
            },
        }
    },

    on: {
        init: function () {
            $counter.innerHTML = 'Показано ' + (this.activeIndex + 1) + ' из ' + (totalSlides);
        },
        slideChange: function () {
            $counter.innerHTML = 'Показано ' + (this.activeIndex + 1) + ' из ' + (totalSlides);
        }
    }
});



const cardSwiper = new Swiper('.card__slider', {
    slidesPerView: 1,
    spaceBetween: 37,
    speed: 800,

    navigation: {
        prevEl: '.card__slider-prev',
        nextEl: '.card__slider-next',
    },
});



// Споллер faq
$(document).ready(function () {
    $('.faq__spoller-title-wrap').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// споллер на странице карточка товара с картами
$(document).ready(function () {
    $('.description__spoller-title-wrap').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// раскрытие фильтра в баннере в мобильной версии
if ($('#spoller-filter').length) {
    if ($(window).width() <= 769) {
        $(document).ready(function () {
            $('.filter__header').click(function (event) {
                $(this).toggleClass('active').next().slideToggle(300);
            });
        });
    }
}

// раскрытие доп информации в футере в мобильной версии
if ($('#footer-spoller').length) {
    if ($(window).width() <= 769) {
        $(document).ready(function () {
            $('.footer__nav-title').click(function (event) {
                $(this).toggleClass('active').next().slideToggle(300);
            });
        });
    }
}

// Споллер саппорт
$('.service__spoller-title-wrap').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('.service__spoller-title-wrap').hasClass('active')) {
        $('.service__spoller-title-wrap').removeClass('active');
    } else {
        $('.service__spoller-title-wrap').removeClass('active');
        $(this).closest('.service__spoller-title-wrap').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(300);
    $('.service__spoller-content').not($content).slideUp('fast');
});



// Регулировка высоты контента в секции поддержки
// $('.service__spoller-title-wrap').on('click', function (e) {
//     e.preventDefault();

//     if ($(this).closest('.paid').hasClass('active')) {
//         $('.item-paid').addClass('open-bottom');
//     } else {
//         $('.item-paid').removeClass('open-bottom');
//     }
// });


// Споллер  страница новости
$(document).ready(function () {
    $('.other-news__spoller-wrap').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// Споллер текстовые отзывы
$(document).ready(function () {
    $('.text-review__spoller-wrap').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// переключение класса в новостях
$(".other-news__spoller-pagination-num").click(function (e) {
    e.preventDefault();
    $(".other-news__spoller-pagination-num").removeClass('active');
    $(this).addClass('active');
})


// кастомная пагинация слайдера
$(".spoller-pagination-num").click(function (e) {
    e.preventDefault();
    $(".spoller-pagination-num").removeClass('active');
    $(this).addClass('active');
})


// пагинация на странице недвижимости 
$(".real-estate__pagination-num").click(function (e) {
    e.preventDefault();
    $(".real-estate__pagination-num").removeClass('active');
    $(this).addClass('active');
})

$(".real-estate__pagination-bullet").click(function (e) {
    e.preventDefault();
    $(".real-estate__pagination-bullet").removeClass('active');
    $(this).addClass('active');
})



const rewiewsSwiper = new Swiper('.rewiews__slider', {
    spaceBetween: 60,

    grid: {
        rows: 3,
        fill: 'row'
    },

    navigation: {
        prevEl: '.rewiews__slider-prev',
        nextEl: '.rewiews__slider-next',
    },

    pagination: {
        el: ".rewiews__slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
    },

    breakpoints: {

        769: {
            slidesPerView: 3,
            spaceBetween: 109,

            grid: {
                rows: 1,
            },
        }
    },
});


const activitySlider = new Swiper('#destroy_1', {
    speed: 800,
    spaceBetween: 30,

    grid: {
        rows: 2,
        fill: 'row'
    },

    navigation: {
        nextEl: '.blog__slider-next',
        prevEl: '.blog__slider-prev',
    },
});

if ($('#destroy_1').length) {
    if ($(window).width() >= 769) {
        activitySlider.destroy();
    }
}




// сортировка на странице недвижимости
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 





