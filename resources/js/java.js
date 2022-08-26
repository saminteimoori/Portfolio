
// Hamburger Menu

$(function(){
  $('.navbar-toggle, .nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');
    $(".nav").fadeToggle();
    $(".nav").removeClass('nav-hide');
  });
});
// Sticky Navigation color

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $('nav').addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $('nav').removeClass("active");
    }
});

