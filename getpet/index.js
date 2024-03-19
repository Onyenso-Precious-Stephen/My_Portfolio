var carouselwidth = $('.corousel-inner')[0].scrollwidth;
var cardwidth = $('.carousel-item').width();

var scrollposition = 0;

$('.carousel-control-next').on('click', function(){
    console.log('next');
     scrollposition = scrollposition + cardwidth;
     $('.carsousel-inner').animate({scrollLeft:
        scrollposition},600)

    }

);