
// Hamburger Menu
$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
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