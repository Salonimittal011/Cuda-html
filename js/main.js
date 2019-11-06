$(document).ready(function () {

    //animated body..
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });

    //toggle function..
    $(".search-links a").click(function () {
        $(".test").toggle();
    });

    //slick slider..
    $('.banner').slick();

    //sticky header..
    $(window).scroll(function () { // this will work when your window scrolled.
        var header = document.getElementById("myheader");
        var height = $(window).scrollTop(); //getting the scrolling height of window
        if (height > 100) {
            $(".myheader").addClass("sticky-header");
        } else {
            $(".myheader").removeClass("sticky-header");
        }
    });

    //wow function..
    new WOW().init();

    //burger-menu..
    $('.nav-icon').on('click', function () {
        $(this).toggleClass('open');
    });

    //filter.
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".article").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});