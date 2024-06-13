$(function () {    
        $('.customers__slider').slick ({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            appendArrows: $('.customers__slider-arrows'),
            waitForAnimate: false,
            responsive: [
                {
                    breakpoint: 1300, 
                    settings: {
                        slidesToShow: 3,
                        draggable: true, 
                        dots: true, 
                        appendDots: $('.customers__dots'),                         
                    }
                },
                {
                    breakpoint: 760, 
                    settings: {
                        slidesToShow: 2,
                        draggable: true, 
                        dots: true, 
                        appendDots: $('.customers__dots'),                         
                    }
                },
                {
                    breakpoint: 550, 
                    settings: {
                        slidesToShow: 1,
                        draggable: true, 
                        dots: true, 
                        appendDots: $('.customers__dots'),
                    }
                },
                
            ]

        });

    $('.customers__slider-prev').on('click', function (e) {
        e.preventDefault();
        $('.customers__slider').slick('slickPrev');
    })
    $('.customers__slider-next').on('click', function (e) {
        e.preventDefault();
        $('.customers__slider').slick('slickNext');
    })



    $('.testimonials__slider').slick({
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        draggable: true,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault();
        $('.testimonials__slider').slick('slickPrev');
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault();
        $('.testimonials__slider').slick('slickNext');
    })

    // ===================================================================
    //Accordion - my own code   
    //This option allows to open only one option. Others are closed
    $('.opportunities__accordeon-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('opportunities__accordeon-link--active');
        $(this).children('.opportunities__accordeon-text').slideToggle();
        $('.opportunities__accordeon-link').not(this).children('.opportunities__accordeon-text').slideUp(); 
        $('.opportunities__accordeon-link').not(this).removeClass('opportunities__accordeon-link--active'); 
    }) 

    //====================================================================
    //Can simply use ('.header__top') instead of headTop. Did it just for experiement
    var headTop = document.querySelector('.header__top');

    $(document).on('scroll', function (e) {
        if ($(document).scrollTop() > 0) {
            $('.burger').addClass('burger-active'); 
        } else {
            $('.burger').removeClass('burger-active');
        }

        if($(headTop).hasClass('header__top--open')) {
            $('.burger').removeClass('burger-active');
        } 
    })
    
    $('.burger, .overlay, .header__top a').on('click', function(e) {
        e.preventDefault(); 
        $('.header__top').toggleClass('header__top--open');
        if($(window).width() <= 1300) {
            $('.overlay').toggleClass('overlay-active');
        }         
                
        if ($(document).scrollTop() == 0) {
            $('.burger').removeClass('burger-active'); 
        } else {
            $('.burger').addClass('burger-active');
        }

        if($(headTop).hasClass('header__top--open')) {
            $('.burger').removeClass('burger-active');
        }
    })   
    
    // ---------------------------------------------------
    $('.footer__top-title--active').on('click', function() {
        $(this).next().slideToggle();
    })
})

//================================Pure JS====================================

let mixer = mixitup(".services__list");
let elem = document.querySelectorAll('.services__filter-btn');

elem.forEach(function (btnItem) {
    btnItem.addEventListener('click', function selBtn () {
        for (let activeStyle of elem) {
            if (activeStyle.matches('.services__filter-btn--active')) {
                activeStyle.classList.remove('services__filter-btn--active');
            }
        }
        btnItem.classList.add('services__filter-btn--active');
    })
})

let elem2 = document.querySelectorAll('.footer__top-link');

elem2.forEach(function (btnItemSec) {
    btnItemSec.addEventListener('click', function () {
        for (let activeStyle of elem) {
            if (activeStyle.matches('.mixitup-control-active')) {
                activeStyle.classList.add('services__filter-btn--active');
            } else {
                activeStyle.classList.remove('services__filter-btn--active');
            }
        }         
    })
})


//This is my pure JS code for smooth scrolling of page to anchors
const elemBody = document.documentElement; 
const navMenu = document.getElementById('menu');

console.log(navMenu);
let linkObj; 
elemBody.addEventListener('click', function(e) {     
    if(e.target.closest('.header__nav-link, .header__top_btn, .footer__top-link, .footer__go-top')) { 
        e.preventDefault();       
        let linkAttr = e.target.getAttribute('href'); 
        console.log(linkAttr);
        linkObj = document.querySelector(linkAttr); 
        console.log(linkObj);  
        linkObj.scrollIntoView({
            block: 'start', 
            inline: 'nearest', 
            behavior: 'smooth',
        })      
    } else if(e.target.closest('.logo')) {
        location.href='/'; 
    } else {
        return; 
    }
    
})





