$(function () {

    /* slider */

    $('.slider-wrapper').slick({
        prevArrow: '<i class="arrow1 far fa-arrow-left"></i>',
        nextArrow: '<i class="arrow2 far fa-arrow-right"></i>',
        
        fade: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000 
    })








/* typed js starts */

const typed = new Typed('.test-type', {
  
  strings: ['Yeasin Sharif',

  
            
        ],
        
        backSpeed: 100,
        typeSpeed: 100,
        loop: true,

});

/* typed js ends */

/* scroll top button js starts */

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })


    
    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /* scroll top button js ends */

    /* smooth jump js starts*/ 

    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })

    /* smooth jump js ends*/



})


