
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


// появление дополнителньой информации в текстовом блоке карточек с недвижимостью на Главной странице
$(document).ready(function () {
    $('.real-estate__text-block').on('mouseenter', function () {
        $(this).parent().toggleClass('active');
    });
    $('.real-estate__text-block').on('mouseleave', function () {
        $(this).parent().toggleClass('active');
    });
});


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


// const rewiewsSwiper = new Swiper('.rewiews__slider', {
//     slidesPerView: 3,
//     spaceBetween: 109,
//     speed: 800,
//     navigation: {
//         prevEl: '.rewiews__slider-prev',
//         nextEl: '.rewiews__slider-next',
//     },

//     pagination: {
//         el: ".rewiews__pagination",
//         bullets: true,
//         clickable: true,
//     },
//     on: {
//         init: rewiewsNumbers,
//         slideChange: rewiewsNumbers
//     },
// });


// function rewiewsNumbers() {
//     let currentSlide = this.realIndex + 1;
//     if (currentSlide < 10) {
//         currentSlide = '0' + currentSlide
//     }

//     $('.rewiews__numbers').text(currentSlide);
// }


const liveSwiper = new Swiper('.live__slider', {
    slidesPerView: 4,
    spaceBetween: 38,
    speed: 800,
    navigation: {
        prevEl: '.live__slider-prev',
        nextEl: '.live__slider-next',
    },

    pagination: {
        el: ".swiper-bullets-live",
        bullets: true,
        clickable: true,
    },
    on: {
        init: liveNumbers,
        slideChange: liveNumbers
    },
});


function liveNumbers() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    $('.live__numbers').text(currentSlide);
}




// pagination: {
//     el: ".rewiews__pagination",
//     clickable: true,
//     bullets: true,
//     // // renderBullet: function (index, className) {
//     // //   return '<span class="' + className + '">' + (index + 1) + "</span>";
//     // // },
//     // renderFraction: function (currentClass, totalClass, index, total) {
//     //     return '<span class="' + currentClass + '">0 '+ index +' </span>' +
//     //         ' / ' +
//     //         '<span class="' + totalClass + '">0 '+ total +' </span>';
//     // },
// },


// });


// effect: "fade",
// fadeEffect: {
//     crossFade: true
// },

// on: {
//     init: number,
//     slideChange: number
// },
// });



// // ADD ACTIVE CLASS TO THE CURRENT BULLET

// // get all bullet elements
// var bullets = $('.swiper-pagination-bullet');

// swiper.on('slideChange', function () {
// // Get current slide from fraction pagination number
// var slide = "slide"+($('.swiper-pagination-current').html());
// // Remove active class from all bullets
// bullets.removeClass("swiper-pagination-bullet-active");
// // Check each bullet element if it has slideNumber class
// $.each(bullets, function (index, value) {
//   if($(this).hasClass(slide)) {
//     $(this).addClass("swiper-pagination-bullet-active");
//     return false;
//   }
// });
// });

// function number() {
//     let currentSlide = this.realIndex + 1;
//     if (currentSlide < 10) {
//         currentSlide = '0' + currentSlide
//     }

//     $('.rewiews__numbers').text(currentSlide);
// }






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
    slidesPerView: 2,
    spaceBetween: 39,
    speed: 800,

    navigation: {
        prevEl: '.blog__slider-prev',
        nextEl: '.blog__slider-next',
    },
});

const subscribeSwiper = new Swiper('.subscribe__slider', {
    slidesPerView: 3.5,
    spaceBetween: 18,
    speed: 800,

    navigation: {
        prevEl: '.subscribe__slider-prev',
        nextEl: '.subscribe__slider-next',
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
    slidesPerView: 3,
    spaceBetween: 37,
    speed: 800,

    navigation: {
        prevEl: '.staff__slider-prev',
        nextEl: '.staff__slider-next',
    },
});


const catalogSwiper = new Swiper('.catalog__content', {
    slidesPerView: 1,
    spaceBetween: 37,

    navigation: {
        prevEl: '.catalog__slider-prev',
        nextEl: '.catalog__slider-next',
    },

    breakpoints: {

        769: {
            slidesPerView: 4,
            spaceBetween: 37,
        }
    }
});


const videoReviewSwiper = new Swiper('.review-video__slider', {
    slidesPerView: 3,
    spaceBetween: 37,
    speed: 800,

    navigation: {
        prevEl: '.review-video__slider-prev',
        nextEl: '.review-video__slider-next',
    },
});



var totalSlides = 4;
const slidesPerView = 6
const $counter = document.querySelector(".counter")
const photoReviewSwiper = new Swiper('.photo-review__slider', {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 25,
    speed: 800,
    navigation: {
        prevEl: '.photo-review__slider-prev',
        nextEl: '.photo-review__slider-next',
    },
    on: {
        init: function(){
          $counter.innerHTML = 'Показано ' + (this.activeIndex +  1)  + ' из ' + (totalSlides); 
        },
        slideChange: function(){
          $counter.innerHTML = 'Показано ' + (this.activeIndex +  1) + ' из '+ (totalSlides);
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


// function updateFraction(slider) {
//     const { params, activeIndex } = slider;

//     slider.$el
//         .find(`.${params.pagination.currentClass}`)
//         .text(`${activeIndex + 1} - ${activeIndex + params.slidesPerView}`);

//     slider.$el
//         .find(`.${params.pagination.totalClass}`)
//         .text(slider.slides.length)
// }






// function show(anything) {
//     document.querySelector(".textBox").value = anything;
// }

// let dropdown = document.querySelector('.dropdown');
// dropdown.onclick = function () {
//     dropdown.classList.toggle('active');
// }




// var truncate = document.querySelector(".truncate p");
// $clamp(truncate, {
//  clamp: 3, // Число строк
//  useNativeClamp: false // НЕ используем -webkit-line-clamp
// });



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


// $('.paid').on('click', function(e) {
//     e.preventDefault();

//     if($(this).closest('.paid').hasClass('active')) {
//         $('.paid').removeClass('active');
//     } else {
//         $('.paid').removeClass('active');
//         $(this).closest('.paid').addClass('active');
//     }

// Show the content
//     var $content = $(this).next();
//     $content.slideToggle(300);
//     $('.paid-content').not($content).slideUp('fast');
// });



// Регулировка высоты контента в секции поддержки
$('.service__spoller-title-wrap').on('click', function (e) {
    e.preventDefault();

    if ($(this).closest('.paid').hasClass('active')) {
        $('.item-paid').addClass('open-bottom');
    } else {
        $('.item-paid').removeClass('open-bottom');
    }
});


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



// Двойные буллеты в слайдере

const rewiewsSwiper = new Swiper('.rewiews__slider', {
    slidesPerView: 3,
    spaceBetween: 109,
    speed: 800,
    navigation: {
        prevEl: '.rewiews__slider-prev',
        nextEl: '.rewiews__slider-next',
    },

    // pagination: {
    //     el: '.swiper-number',
    //     type: 'fraction',
    // },

    pagination: {
        el: ".swiper-bullets",
        bullets: true,
        clickable: true,
    },
});

function sliderNumber() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    // $('.swiper-bullets-two').text(currentSlide);
}

// Generate pagination bullets inside div with #bullets ID
// for (var i = 1; i < rewiewsSwiper.slides.length - 1; i++) {
//     if (i === 1) {
//         // add active class if it is the first bullet
//         $('#bullets').append('<span class="bullets-two-bullet' + ' ' + 'bullets-two-bullet-active' + ' ' + 'slide' + i + '"><p>' + i + '</p></span>');
//     } else {
//         $('#bullets').append('<span class="bullets-two-bullet' + ' ' + 'slide' + i + '"><p>' + i + '</p></span>');
//     }
// }







// // ADD ACTIVE CLASS TO THE CURRENT BULLET

// // get all bullet elements
// var bullet = $('.swiper-bullets-two');

// rewiewsSwiper.on('slideChange', function () {
// // Get current slide from fraction pagination number
// var slide = "slide"+($('.swiper-pagination-current').html());
// // Remove active class from all bullets
// bullet.removeClass("swiper-pagination-bullet-active");
// // Check each bullet element if it has slideNumber class
// $.each(bullet, function () {
//   if($(this).hasClass(slide)) {
//     $(this).addClass("swiper-pagination-bullet-active");
//     return false;
//   }
// });
// });