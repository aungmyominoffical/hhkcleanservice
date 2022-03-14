$('.slide').slick({
    dots: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 6,
                // slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                // slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                // slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  });

  

  var filtered = false;

  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });

  $('.navbar-toggler').click(function(){
    var result = $('.navbar-collapse').hasClass('show');
    if(result){
        $('.new-icon').removeClass('fa-close').addClass('fa-bars');
    }else{
        $('.new-icon').removeClass('fa-bars').addClass('fa-close');
    }
})


function addMyNav(){
    var screenHeight = $(window).height() - 150;
    $(window).scroll(function(){
        var myPosition = $(this).scrollTop();
        if(myPosition > screenHeight){
            $('.my-header').addClass('new-header');
        }else{
            $('.my-header').removeClass('new-header');
        }
    })
}

addMyNav();

$(window).on('load',function(){
    $('.loader').fadeOut(500,function(){
        $(this).remove();
    });
})


