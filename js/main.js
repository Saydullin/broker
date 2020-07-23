$(function () {
    $('.report-slider-content').slick({
        arrows: true,
        dots: false,
        disabled: true,
        autoplay: true,
        autoplaySpeed: 16500,
        pauseOnFocus: true,
        oauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: false,
        prevArrow: ".prevArr",
        nextArrow: ".nextArr"
    });
    if (document.querySelector('body').clientWidth < 420) {
        $('.slides-img').slick({
            arrows: true,
            dots: false,
            disabled: true,
            autoplay: true,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            pauseOnFocus: true,
            useCSS: true,
            oauseOnHover: true,
            pauseOnDotsHover: true,
            infinite: false,
            centerMode: false,
            prevArrow: ".prev-example-arr",
            nextArrow: ".next-example-arr"
        });
        $('.brokers-slider').slick({
            arrows: true,
            dots: false,
            disabled: true,
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: ".broker-button-prev",
            nextArrow: ".broker-button-next"
        });
    } else {
        $('.brokers-slider').slick({
            arrows: true,
            dots: false,
            disabled: true,
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: ".broker-button-prev",
            nextArrow: ".broker-button-next"
        });
        $('.slides-img').slick({
            arrows: true,
            dots: false,
            disabled: true,
            autoplay: false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            pauseOnFocus: true,
            useCSS: true,
            oauseOnHover: true,
            pauseOnDotsHover: true,
            infinite: false,
            centerMode: true,
            centerPadding: 80 + 'px',
            prevArrow: ".prev-example-arr",
            nextArrow: ".next-example-arr"
        });
    }
});

const answerOpen = document.querySelectorAll('.faq-open'),
    answer = document.querySelectorAll('.faq-answer'),
    closeAnswer = document.querySelectorAll('.close-answer'),
    faqOpen = document.querySelectorAll('.faq-open'),
    faqContentAnswer = document.querySelector('.faq-content-answer'),
    mobileMenu = document.querySelector('.navigation-mobile-menu'),
    menu = document.querySelector('.mobile-menu');


mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    console.log("h");
})

faqContentAnswer.addEventListener('click', (e) => {
    const target = e.target;
    targetId = target.closest('.faq-questions').id - 1;
    if (target.closest('.faq-inner-questions')) {
        faqOpen[targetId].classList.toggle('rotate');
        answer[targetId].classList.toggle('close');
    }
    if (target.closest('.close-answer')) {
        faqOpen[targetId].classList.toggle('rotate');
        answer[targetId].classList.toggle('close');
    }
    for (let e = 0; e < answer.length; e++) {
        if (answer[e].closest('.faq-questions').id != answer[targetId].closest('.faq-questions').id && !answer[e].classList.contains('close')) {
            answer[e].classList.add('close');
            faqOpen[e].classList.remove('rotate');
        }
    }
})
