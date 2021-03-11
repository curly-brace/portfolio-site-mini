$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);
    
    $(".tabs a").click(function(){
        $(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
        $(this).parent().siblings().removeClass("active");
        $($(this).attr("href")).removeClass("hide");
        $(this).parent().addClass("active");
    });
    
    $(".banner-slider, .testimonial-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    
    $(".portfolio-slider").slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        appendArrows: ".portfolio-slider-arrows",
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',
    });
});

   


